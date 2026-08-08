import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css";

function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================================================
  // API CONFIGURATION
  // =========================================================

  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://quizmaster-qsjk.onrender.com";

  // =========================================================
  // FETCH LEADERBOARD
  // =========================================================

  const fetchLeaderboard = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const baseURL = API_URL
  .trim()
  .replace(/\/api\/?$/i, "")
  .replace(/\/+$/, "");
      const endpoint = `${baseURL}/api/quiz/leaderboard`;

      console.log("🏆 Leaderboard API:", endpoint);

      const response = await axios.get(endpoint, {
        timeout: 15000,
      });

      console.log("🏆 Leaderboard response:", response.data);

      // =====================================================
      // GET LEADERBOARD ARRAY
      // Backend response:
      // {
      //   success: true,
      //   leaderboard: [...]
      // }
      // =====================================================

      let leaderboardData = [];

      if (Array.isArray(response.data?.leaderboard)) {
        leaderboardData = response.data.leaderboard;
      } else if (Array.isArray(response.data)) {
        leaderboardData = response.data;
      } else if (Array.isArray(response.data?.players)) {
        leaderboardData = response.data.players;
      } else if (Array.isArray(response.data?.data)) {
        leaderboardData = response.data.data;
      }

      // =====================================================
      // NORMALIZE BACKEND DATA
      // =====================================================

      const normalizedPlayers = leaderboardData.map(
        (player, index) => {
          const score = Number(
            player?.score ??
              player?.totalScore ??
              player?.points ??
              player?.totalPoints ??
              0
          );

          const percentage = Number(
            player?.percentage ??
              player?.accuracy ??
              player?.accuracyPercentage ??
              player?.accuracyPercent ??
              0
          );

          const totalQuestions = Number(
            player?.totalQuestions ?? 0
          );

          return {
            ...player,

            // Backend gives userName and user.name
            name:
              player?.userName ||
              player?.user?.name ||
              player?.name ||
              player?.username ||
              player?.user?.username ||
              "Anonymous",

            // Score
            score: Number.isFinite(score) ? score : 0,

            // Backend gives percentage
            accuracy: Number.isFinite(percentage)
              ? Math.round(percentage * 100) / 100
              : 0,

            // Total questions
            totalQuestions: Number.isFinite(totalQuestions)
              ? totalQuestions
              : 0,

            rank: index + 1,
          };
        }
      );

      // =====================================================
      // SORT — HIGHEST SCORE FIRST
      // =====================================================

      normalizedPlayers.sort(
        (a, b) => b.score - a.score
      );

      // =====================================================
      // FINAL RANK
      // =====================================================

      const rankedPlayers = normalizedPlayers.map(
        (player, index) => ({
          ...player,
          rank: index + 1,
        })
      );

      console.log(
        "🏆 Final leaderboard:",
        rankedPlayers
      );

      setPlayers(rankedPlayers);
    } catch (err) {
      console.error(
        "❌ Leaderboard error:",
        err
      );

      if (err?.response) {
        console.error(
          "❌ Server response:",
          err.response.status,
          err.response.data
        );
      } else if (err?.request) {
        console.error(
          "❌ No response received from leaderboard API."
        );
      }

      setError(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Leaderboard data load nahi ho paya."
      );

      setPlayers([]);
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  // =========================================================
  // INITIAL LOAD + AUTO REFRESH
  // =========================================================

  useEffect(() => {
    fetchLeaderboard();

    const timer = setInterval(() => {
      fetchLeaderboard();
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, [fetchLeaderboard]);

  // =========================================================
  // MEDAL
  // =========================================================

  const getMedal = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";

    return "";
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <main className="leaderboard-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="leaderboard-header">

        <div className="leaderboard-badge">
          🏆 QUIZMASTER LEADERBOARD
        </div>

        <h1>
          Today's Top
          <span> Players</span>
        </h1>

        <p>
          Compete with other learners and see who is
          leading today's quiz.
        </p>

        <button
          type="button"
          className="refresh-btn"
          onClick={fetchLeaderboard}
          disabled={loading}
        >
          {loading
            ? "⏳ Loading..."
            : "🔄 Refresh Leaderboard"}
        </button>

      </section>

      {/* =====================================================
          LOADING
      ===================================================== */}

      {loading && (
        <section className="leaderboard-status">

          <div className="leaderboard-spinner"></div>

          <h3>
            Loading leaderboard...
          </h3>

          <p>
            Please wait while we fetch today's rankings.
          </p>

        </section>
      )}

      {/* =====================================================
          ERROR
      ===================================================== */}

      {!loading && error && (
        <section className="leaderboard-status error-state">

          <div className="status-icon">
            ⚠️
          </div>

          <h3>
            Unable to load leaderboard
          </h3>

          <p>
            {error}
          </p>

          <button
            type="button"
            className="retry-btn"
            onClick={fetchLeaderboard}
          >
            🔄 Try Again
          </button>

        </section>
      )}

      {/* =====================================================
          EMPTY
      ===================================================== */}

      {!loading &&
        !error &&
        players.length === 0 && (
          <section className="leaderboard-status">

            <div className="status-icon">
              🏆
            </div>

            <h3>
              No participants today
            </h3>

            <p>
              Be the first player to complete
              today's quiz!
            </p>

          </section>
        )}

      {/* =====================================================
          LEADERBOARD
      ===================================================== */}

      {!loading &&
        !error &&
        players.length > 0 && (
          <section className="leaderboard-container">

            {/* =================================================
                TOP THREE
            ================================================= */}

            <div className="top-three">

              {players
                .slice(0, 3)
                .map((player, index) => (
                  <div
                    className={`top-player top-player-${
                      index + 1
                    }`}
                    key={
                      player._id ||
                      player.id ||
                      `${player.name}-${index}`
                    }
                  >

                    <div className="player-medal">
                      {getMedal(index)}
                    </div>

                    <div className="player-avatar">
                      {(player.name || "A")
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <h2>
                      {player.name}
                    </h2>

                    <div className="player-score">
                      {player.score}
                      <span>
                        {" "}
                        points
                      </span>
                    </div>

                    <div className="player-rank">
                      Rank #{index + 1}
                    </div>

                  </div>
                ))}

            </div>

            {/* =================================================
                ALL PLAYERS
            ================================================= */}

            <div className="leaderboard-list">

              <div className="leaderboard-list-header">
                <span>Rank</span>
                <span>Player</span>
                <span>Score</span>
                <span>Accuracy</span>
              </div>

              {players.map((player, index) => (
                <div
                  className="leaderboard-row"
                  key={
                    player._id ||
                    player.id ||
                    `${player.name}-${index}`
                  }
                >

                  <div className="rank-number">
                    #{index + 1}
                  </div>

                  <div className="player-info">

                    <div className="small-avatar">
                      {(player.name || "A")
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>
                      <strong>
                        {player.name}
                      </strong>
                    </div>

                  </div>

                  <div className="score-value">
                    {player.score}
                  </div>

                  <div className="accuracy-value">
                    {player.accuracy}%
                  </div>

                </div>
              ))}

            </div>

          </section>
        )}

    </main>
  );
}

export default Leaderboard;
