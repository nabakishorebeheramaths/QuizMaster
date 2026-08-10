
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CourseQuiz.css";

function CourseQuiz() {
  const navigate = useNavigate();
  const { courseId } = useParams();

  // =====================================================
  // ALL COURSE CATEGORIES
  // =====================================================

  const courseCategories = [
    {
  id: "school",
  icon: "🏫",
  title: "School Classes",
  description:
    "Class 1 to Class 12 quizzes for all major subjects.",
  courses: [
    {
      id: "class-1",
      name: "Class 1",
      icon: "📘",
      description:
        "Basic learning, Mathematics, English & EVS",
    },
    {
      id: "class-2",
      name: "Class 2",
      icon: "📗",
      description:
        "Basic Mathematics, English, EVS & General Knowledge",
    },
    {
      id: "class-3",
      name: "Class 3",
      icon: "📕",
      description:
        "Mathematics, English, EVS & General Knowledge",
    },
    {
      id: "class-4",
      name: "Class 4",
      icon: "📙",
      description:
        "Mathematics, Science, English & Social Science",
    },
    {
      id: "class-5",
      name: "Class 5",
      icon: "📚",
      description:
        "Mathematics, Science, English & Social Science",
    },
    {
      id: "class-6",
      name: "Class 6",
      icon: "🎒",
      description:
        "Mathematics, Science, English & Social Science",
    },
    {
      id: "class-7",
      name: "Class 7",
      icon: "🎒",
      description:
        "Mathematics, Science, English & Social Science",
    },
    {
      id: "class-8",
      name: "Class 8",
      icon: "🎒",
      description:
        "Mathematics, Science, English & Social Science",
    },
    {
      id: "class-9",
      name: "Class 9",
      icon: "📖",
      description:
        "Mathematics, Science, English & Social Science",
    },
    {
      id: "class-10",
      name: "Class 10",
      icon: "📖",
      description:
        "Board Mathematics, Science, English & Social Science",
    },
    {
      id: "class-11",
      name: "Class 11",
      icon: "🎓",
      description:
        "Physics, Chemistry, Mathematics & Biology",
    },
    {
      id: "class-12",
      name: "Class 12",
      icon: "🎓",
      description:
        "Physics, Chemistry, Mathematics & Biology",
    },
  ],
},
    {
      id: "engineering",
      icon: "⚙️",
      title: "Engineering & Technology",
      description:
        "Engineering and technology course-wise quizzes.",
      courses: [
        {
          id: "btech",
          name: "B.Tech",
          icon: "💻",
          description:
            "Engineering subjects, aptitude & technical quizzes",
        },
        {
          id: "be",
          name: "B.E",
          icon: "⚙️",
          description:
            "Core engineering and technical subjects",
        },
        {
          id: "bca",
          name: "BCA",
          icon: "💻",
          description:
            "Programming, DBMS, networking & computer science",
        },
        {
          id: "bsc-it",
          name: "B.Sc IT",
          icon: "🖥️",
          description:
            "IT, programming & technology quizzes",
        },
        {
          id: "mca",
          name: "MCA",
          icon: "👨‍💻",
          description:
            "Advanced computer applications",
        },
        {
          id: "mtech",
          name: "M.Tech",
          icon: "🔬",
          description:
            "Advanced engineering & technology",
        },
      ],
    },

    {
      id: "science-medical",
      icon: "🔬",
      title: "Science & Medical",
      description:
        "Science, healthcare and medical education quizzes.",
      courses: [
        {
          id: "bsc",
          name: "B.Sc",
          icon: "🔬",
          description:
            "Physics, Chemistry, Biology & Mathematics",
        },
        {
          id: "nursing",
          name: "B.Sc Nursing",
          icon: "🩺",
          description:
            "Nursing subjects and healthcare quizzes",
        },
        {
          id: "gnm",
          name: "GNM Nursing",
          icon: "🏥",
          description:
            "General Nursing & Midwifery",
        },
        {
          id: "bpharm",
          name: "B.Pharm",
          icon: "💊",
          description:
            "Pharmacy and pharmaceutical sciences",
        },
        {
          id: "mbbs",
          name: "MBBS",
          icon: "🧑‍⚕️",
          description:
            "Medical science practice quizzes",
        },
        {
          id: "bds",
          name: "BDS",
          icon: "🦷",
          description:
            "Dental science quizzes",
        },
        {
          id: "biotechnology",
          name: "Biotechnology",
          icon: "🧬",
          description:
            "Biology, genetics & biotechnology",
        },
      ],
    },

    {
      id: "commerce",
      icon: "💼",
      title: "Commerce & Management",
      description:
        "Commerce, finance, business and management quizzes.",
      courses: [
        {
          id: "bcom",
          name: "B.Com",
          icon: "📊",
          description:
            "Accounting, economics & business studies",
        },
        {
          id: "bba",
          name: "BBA",
          icon: "💼",
          description:
            "Business administration & management",
        },
        {
          id: "bms",
          name: "BMS",
          icon: "📈",
          description:
            "Management studies",
        },
        {
          id: "ba-economics",
          name: "BA Economics",
          icon: "💰",
          description:
            "Economics & analytical concepts",
        },
        {
          id: "ca",
          name: "CA",
          icon: "🧮",
          description:
            "Accounting, taxation & finance",
        },
        {
          id: "cs",
          name: "Company Secretary",
          icon: "📋",
          description:
            "Corporate law & company management",
        },
      ],
    },

    {
      id: "arts",
      icon: "🎨",
      title: "Arts & Humanities",
      description:
        "Humanities, social science and creative fields.",
      courses: [
        {
          id: "ba",
          name: "BA",
          icon: "📖",
          description:
            "History, Political Science, Sociology & more",
        },
        {
          id: "psychology",
          name: "Psychology",
          icon: "🧠",
          description:
            "Psychology concepts & practice",
        },
        {
          id: "journalism",
          name: "Journalism",
          icon: "📰",
          description:
            "Media, journalism & communication",
        },
        {
          id: "mass-communication",
          name: "Mass Communication",
          icon: "🎙️",
          description:
            "Media and communication studies",
        },
        {
          id: "fashion-design",
          name: "Fashion Design",
          icon: "👗",
          description:
            "Fashion & design knowledge",
        },
        {
          id: "animation",
          name: "Animation",
          icon: "🎬",
          description:
            "Animation, media & creative technology",
        },
      ],
    },

    {
      id: "competitive",
      icon: "🏆",
      title: "Competitive Exams",
      description:
        "Prepare for major entrance and competitive examinations.",
      courses: [
        {
          id: "jee",
          name: "JEE",
          icon: "🚀",
          description:
            "Physics, Chemistry & Mathematics",
        },
        {
          id: "neet",
          name: "NEET",
          icon: "🩺",
          description:
            "Physics, Chemistry & Biology",
        },
        {
          id: "gate",
          name: "GATE",
          icon: "🎯",
          description:
            "Engineering aptitude & technical subjects",
        },
        {
          id: "upsc",
          name: "UPSC",
          icon: "🇮🇳",
          description:
            "Civil Services examination preparation",
        },
        {
          id: "ssc",
          name: "SSC",
          icon: "📝",
          description:
            "SSC examination practice",
        },
        {
          id: "banking",
          name: "Banking",
          icon: "🏦",
          description:
            "IBPS, SBI & banking aptitude",
        },
        {
          id: "railway",
          name: "Railway",
          icon: "🚆",
          description:
            "Railway examination practice",
        },
        {
          id: "nda",
          name: "NDA",
          icon: "🪖",
          description:
            "Defence entrance examination",
        },
        {
          id: "cuet",
          name: "CUET",
          icon: "🎓",
          description:
            "University entrance examination",
        },
      ],
    },

    {
      id: "professional",
      icon: "💡",
      title: "Professional & Skill Courses",
      description:
        "Modern career-oriented courses and skills.",
      courses: [
        {
          id: "data-science",
          name: "Data Science",
          icon: "📊",
          description:
            "Data analysis, statistics & machine learning",
        },
        {
          id: "artificial-intelligence",
          name: "Artificial Intelligence",
          icon: "🤖",
          description:
            "AI & machine learning concepts",
        },
        {
          id: "cyber-security",
          name: "Cyber Security",
          icon: "🔐",
          description:
            "Cyber security & information security",
        },
        {
          id: "digital-marketing",
          name: "Digital Marketing",
          icon: "📱",
          description:
            "SEO, social media & online marketing",
        },
        {
          id: "web-development",
          name: "Web Development",
          icon: "🌐",
          description:
            "HTML, CSS, JavaScript & modern web",
        },
        {
          id: "cloud-computing",
          name: "Cloud Computing",
          icon: "☁️",
          description:
            "Cloud technologies & infrastructure",
        },
      ],
    },
  ];

  // =====================================================
  // FIND SELECTED COURSE
  // =====================================================

  const selectedCourse = courseId
    ? courseCategories
        .flatMap((category) => category.courses)
        .find((course) => course.id === courseId)
    : null;

  // =====================================================
  // START DAILY LIVE QUIZ
  // =====================================================

  const startDailyQuiz = () => {
    navigate("/quiz");
  };

  // =====================================================
  // START SUBJECT QUIZ
  // =====================================================

  const startSubjectQuiz = (course, subject) => {
    navigate("/quiz", {
      state: {
        courseId: course.id,
        courseName: course.name,
        subject: subject.name,
        subjectId: subject.id,
        quizType: "subject",
      },
    });
  };

  // =====================================================
  // OPEN COURSE
  // =====================================================

  const openCourse = (course) => {
    navigate(`/course/${course.id}`);
  };

  // =====================================================
  // INVALID COURSE
  // =====================================================

  if (courseId && !selectedCourse) {
    return (
      <div className="course-page">
        <button
          className="back-button"
          onClick={() => navigate("/course")}
        >
          ← All Courses
        </button>
<div className="course-information">
  <h2>Welcome All, My self Nabakishore Behera! 🎓</h2>

  <p>
    All the best for your career! 🚀
    Keep learning, keep practicing and keep improving with QuizMaster.
  </p>

  <button
    className="primary-button"
    onClick={() => navigate("/course")}
  >
    Browse All Courses →
  </button>
</div>
      </div>
    );
  }

  // =====================================================
  // SELECTED COURSE PAGE
  // =====================================================

  if (selectedCourse) {
    const subjects = getSubjects(selectedCourse.id);

    return (
      <div className="course-page">
        <button
          className="back-button"
          onClick={() => navigate("/course")}
        >
          ← All Courses
        </button>

        {/* COURSE HERO */}

        <div className="course-hero">
          <div className="course-icon">
            {selectedCourse.icon}
          </div>

          <div className="course-hero-content">
            <h1>{selectedCourse.name}</h1>

            <p>{selectedCourse.description}</p>

            <span className="course-badge">
              📚 Course Quiz
            </span>
          </div>
        </div>

        {/* DAILY LIVE QUIZ */}

        <div className="course-section">
          <div className="section-title">
            <span className="live-label">
              🟢 LIVE NOW
            </span>

            <h2>Daily Live Quiz</h2>

            <p>
              Today's quiz is available for everyone.
            </p>
          </div>

          <div className="daily-quiz-card">
            <div className="daily-quiz-info">
              <span>📝 30 Questions</span>
              <span>⏱️ 30 Seconds / Question</span>
              <span>📅 Daily</span>
              <span>🏆 Score & Rank</span>
            </div>

            <button
              className="primary-button"
              onClick={startDailyQuiz}
            >
              🚀 Start Live Quiz
            </button>
          </div>
        </div>

        {/* SUBJECTS */}

        <div className="course-section">
          <div className="section-title">
            <h2>📚 Choose Subject</h2>

            <p>
              Select a subject to practice course-specific
              questions.
            </p>
          </div>

          <div className="subject-grid">
            {subjects.map((subject, index) => (
              <div
                className="subject-card"
                key={subject.id}
              >
                <span className="subject-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="subject-icon">
                  {subject.icon}
                </div>
 
                <h3>{subject.name}</h3>

                <p>{subject.description}</p>

                <button
                  onClick={() =>
                    startSubjectQuiz(
                      selectedCourse,
                      subject
                    )
                  }
                >
                  Start Practice →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* COURSE INFORMATION */}

        <div className="course-information">
          <h2>
            About {selectedCourse.name} Quiz
          </h2>

          <p>
            Practice {selectedCourse.name}-related
            questions and improve your knowledge,
            accuracy and preparation. More
            course-specific question sets will be
            added to QuizMaster gradually.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // ALL COURSES PAGE
  // =====================================================

  return (
    <div className="course-page">
      {/* BACK TO DASHBOARD */}

      <button
        className="back-button"
        onClick={() => navigate("/dashboard")}
      >
        ← Dashboard
      </button>

      {/* PAGE HEADER */}

      <div className="course-hero">
        <div className="course-icon">🎓</div>

        <div className="course-hero-content">
          <h1>QuizMaster Courses</h1>

          <p>
            Choose your class, course or competitive
            examination and start practicing.
          </p>

          <span className="course-badge">
            🎯 Learn • Practice • Improve
          </span>
        </div>
      </div>

      {/* DAILY LIVE QUIZ */}

      <div className="course-section">
        <div className="section-title">
          <span className="live-label">
            🟢 LIVE NOW
          </span>

          <h2>Today's Daily Quiz</h2>

          <p>
            One daily quiz for the entire QuizMaster
            community.
          </p>
        </div>

        <div className="daily-quiz-card">
          <div className="daily-quiz-info">
            <span>📝 30 Questions</span>
            <span>⏱️ 30 Seconds / Question</span>
            <span>📅 Every Day</span>
            <span>🏆 Leaderboard</span>
          </div>

          <button
            className="primary-button"
            onClick={startDailyQuiz}
          >
            🚀 Start Live Quiz
          </button>
        </div>
      </div>

      {/* COURSE CATEGORIES */}

      {courseCategories.map((category) => (
        <div
          className="course-section"
          key={category.id}
        >
          <div className="section-title">
            <h2>
              {category.icon} {category.title}
            </h2>

            <p>{category.description}</p>
          </div>

          <div className="subject-grid">
            {category.courses.map((course) => (
              <div
                className="subject-card"
                key={course.id}
                onClick={() => openCourse(course)}
                style={{ cursor: "pointer" }}
              >
                <div className="subject-icon">
                  {course.icon}
                </div>

                <h3>{course.name}</h3>

                <p>{course.description}</p>

                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    openCourse(course);
                  }}
                >
                  Explore Quiz →
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// =====================================================
// SUBJECT DATABASE
// =====================================================

function getSubjects(courseId) {
  const commonSchoolSubjects = {
    primary: [
      {
        id: "maths",
        name: "Mathematics",
        icon: "🔢",
        description:
          "Numbers, counting & basic maths",
      },
      {
        id: "english",
        name: "English",
        icon: "📖",
        description:
          "English language & vocabulary",
      },
      {
        id: "evs",
        name: "EVS",
        icon: "🌱",
        description:
          "Environment & surroundings",
      },
      {
        id: "gk",
        name: "General Knowledge",
        icon: "🧠",
        description:
          "Basic general awareness",
      },
    ],

    middle: [
      {
        id: "maths",
        name: "Mathematics",
        icon: "🔢",
        description:
          "School mathematics",
      },
      {
        id: "science",
        name: "Science",
        icon: "🔬",
        description:
          "Science concepts",
      },
      {
        id: "english",
        name: "English",
        icon: "📖",
        description:
          "English language",
      },
      {
        id: "social-science",
        name: "Social Science",
        icon: "🌍",
        description:
          "History, geography & civics",
      },
    ],
  };

  const subjects = {
    // =================================================
    // SCHOOL
    // =================================================

   // =================================================
// SCHOOL
// =================================================

"class-1": commonSchoolSubjects.primary,

"class-2": commonSchoolSubjects.primary,

"class-3": commonSchoolSubjects.primary,

"class-4": commonSchoolSubjects.middle,

"class-5": commonSchoolSubjects.middle,

"class-6": commonSchoolSubjects.middle,

"class-7": commonSchoolSubjects.middle,

"class-8": commonSchoolSubjects.middle,

"class-9": [
  {
    id: "maths",
    name: "Mathematics",
    icon: "🔢",
    description:
      "Class 9 Mathematics",
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    description:
      "Physics, Chemistry & Biology",
  },
  {
    id: "english",
    name: "English",
    icon: "📖",
    description:
      "English language & literature",
  },
  {
    id: "social-science",
    name: "Social Science",
    icon: "🌍",
    description:
      "History, Geography, Civics & Economics",
  },
],

"class-10": [
  {
    id: "maths",
    name: "Mathematics",
    icon: "🔢",
    description:
      "Board Mathematics",
  },
  {
    id: "science",
    name: "Science",
    icon: "🔬",
    description:
      "Physics, Chemistry & Biology",
  },
  {
    id: "english",
    name: "English",
    icon: "📖",
    description:
      "Board English",
  },
  {
    id: "social-science",
    name: "Social Science",
    icon: "🌍",
    description:
      "History, Geography, Civics & Economics",
  },
],

"class-11": [
  {
    id: "physics",
    name: "Physics",
    icon: "⚡",
    description:
      "Class 11 Physics",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "🧪",
    description:
      "Class 11 Chemistry",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "📐",
    description:
      "Class 11 Mathematics",
  },
  {
    id: "biology",
    name: "Biology",
    icon: "🧬",
    description:
      "Class 11 Biology",
  },
],

"class-12": [
  {
    id: "physics",
    name: "Physics",
    icon: "⚡",
    description:
      "Class 12 Physics",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    icon: "🧪",
    description:
      "Class 12 Chemistry",
  },
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "📐",
    description:
      "Class 12 Mathematics",
  },
  {
    id: "biology",
    name: "Biology",
    icon: "🧬",
    description:
      "Class 12 Biology",
  },
],
    // =================================================
    // ENGINEERING
    // =================================================

   // =================================================
// ENGINEERING
// =================================================

btech: [
  {
    id: "engineering-mathematics",
    name: "Engineering Mathematics",
    icon: "📐",
    description:
      "Calculus, differential equations, linear algebra & probability",
  },
  {
    id: "digital-electronics",
    name: "Digital Electronics",
    icon: "🔌",
    description:
      "Digital logic, Boolean algebra & digital circuits",
  },
  {
    id: "analog-electronics",
    name: "Analog Electronics",
    icon: "📡",
    description:
      "Analog circuits, diodes, transistors & amplifiers",
  },
  {
    id: "programming",
    name: "Programming",
    icon: "💻",
    description:
      "C, C++, programming fundamentals & problem solving",
  },
  {
    id: "data-structures",
    name: "Data Structures",
    icon: "🗂️",
    description:
      "Arrays, linked lists, stacks, queues, trees & graphs",
  },
  {
    id: "computer-networks",
    name: "Computer Networks",
    icon: "🌐",
    description:
      "Networking fundamentals, protocols & communication",
  },
  {
    id: "aptitude",
    name: "Aptitude",
    icon: "🧠",
    description:
      "Quantitative aptitude, logical reasoning & verbal ability",
  },
  {
    id: "ece-core",
    name: "ECE Core",
    icon: "📻",
    description:
      "Electronic devices, communication systems & ECE fundamentals",
  },
],

    be: [
      {
        id: "engineering-mathematics",
        name: "Engineering Mathematics",
        icon: "📐",
        description:
          "Engineering Mathematics",
      },
      {
        id: "electronics",
        name: "Electronics",
        icon: "🔌",
        description:
          "Electronic circuits & systems",
      },
      {
        id: "programming",
        name: "Programming",
        icon: "💻",
        description:
          "Programming fundamentals",
      },
      {
        id: "aptitude",
        name: "Aptitude",
        icon: "🧠",
        description:
          "Quantitative & reasoning",
      },
    ],

    bca: [
      {
        id: "programming",
        name: "Programming",
        icon: "💻",
        description:
          "C, C++, Java & programming",
      },
      {
        id: "dbms",
        name: "DBMS",
        icon: "🗄️",
        description:
          "Database Management Systems",
      },
      {
        id: "computer-networks",
        name: "Computer Networks",
        icon: "🌐",
        description:
          "Networking concepts",
      },
      {
        id: "web-development",
        name: "Web Development",
        icon: "🌐",
        description:
          "Web technologies",
      },
    ],

    "bsc-it": [
      {
        id: "programming",
        name: "Programming",
        icon: "💻",
        description:
          "Programming concepts",
      },
      {
        id: "database",
        name: "Database",
        icon: "🗄️",
        description:
          "Database systems",
      },
      {
        id: "networking",
        name: "Networking",
        icon: "🌐",
        description:
          "Computer networks",
      },
      {
        id: "web",
        name: "Web Technology",
        icon: "🌐",
        description:
          "Modern web technologies",
      },
    ],

    mca: [
      {
        id: "advanced-programming",
        name: "Advanced Programming",
        icon: "💻",
        description:
          "Advanced programming",
      },
      {
        id: "dbms",
        name: "DBMS",
        icon: "🗄️",
        description:
          "Database management",
      },
      {
        id: "software-engineering",
        name: "Software Engineering",
        icon: "🛠️",
        description:
          "Software development",
      },
      {
        id: "networking",
        name: "Computer Networks",
        icon: "🌐",
        description:
          "Networking",
      },
    ],

    mtech: [
      {
        id: "advanced-engineering",
        name: "Advanced Engineering",
        icon: "⚙️",
        description:
          "Advanced technical concepts",
      },
      {
        id: "research",
        name: "Research",
        icon: "🔬",
        description:
          "Research methodology",
      },
      {
        id: "advanced-mathematics",
        name: "Advanced Mathematics",
        icon: "📐",
        description:
          "Advanced engineering mathematics",
      },
      {
        id: "technical",
        name: "Technical Subjects",
        icon: "💻",
        description:
          "Branch-specific technical topics",
      },
    ],

    // =================================================
    // SCIENCE / MEDICAL
    // =================================================

    bsc: [
      {
        id: "physics",
        name: "Physics",
        icon: "⚡",
        description:
          "Physics concepts",
      },
      {
        id: "chemistry",
        name: "Chemistry",
        icon: "🧪",
        description:
          "Chemistry concepts",
      },
      {
        id: "biology",
        name: "Biology",
        icon: "🧬",
        description:
          "Biological sciences",
      },
      {
        id: "mathematics",
        name: "Mathematics",
        icon: "📐",
        description:
          "Mathematics",
      },
    ],

    nursing: [
      {
        id: "anatomy",
        name: "Anatomy",
        icon: "🫀",
        description:
          "Human anatomy",
      },
      {
        id: "physiology",
        name: "Physiology",
        icon: "🧠",
        description:
          "Human physiology",
      },
      {
        id: "pharmacology",
        name: "Pharmacology",
        icon: "💊",
        description:
          "Medicines & pharmacology",
      },
      {
        id: "nursing-foundation",
        name: "Nursing Foundation",
        icon: "🏥",
        description:
          "Nursing fundamentals",
      },
    ],

    gnm: [
      {
        id: "nursing-foundation",
        name: "Nursing Foundation",
        icon: "🏥",
        description:
          "Nursing basics",
      },
      {
        id: "anatomy",
        name: "Anatomy",
        icon: "🫀",
        description:
          "Human anatomy",
      },
      {
        id: "community-health",
        name: "Community Health",
        icon: "🌍",
        description:
          "Community healthcare",
      },
      {
        id: "pharmacology",
        name: "Pharmacology",
        icon: "💊",
        description:
          "Pharmacology",
      },
    ],

    bpharm: [
      {
        id: "pharmaceutics",
        name: "Pharmaceutics",
        icon: "💊",
        description:
          "Pharmaceutical sciences",
      },
      {
        id: "pharmacology",
        name: "Pharmacology",
        icon: "🧪",
        description:
          "Drug action & medicines",
      },
      {
        id: "pharmaceutical-chemistry",
        name: "Pharmaceutical Chemistry",
        icon: "⚗️",
        description:
          "Pharmaceutical chemistry",
      },
      {
        id: "human-anatomy",
        name: "Human Anatomy",
        icon: "🫀",
        description:
          "Human anatomy",
      },
    ],

    mbbs: [
      {
        id: "anatomy",
        name: "Anatomy",
        icon: "🫀",
        description:
          "Human anatomy",
      },
      {
        id: "physiology",
        name: "Physiology",
        icon: "🧠",
        description:
          "Human physiology",
      },
      {
        id: "biochemistry",
        name: "Biochemistry",
        icon: "🧪",
        description:
          "Medical biochemistry",
      },
      {
        id: "pathology",
        name: "Pathology",
        icon: "🔬",
        description:
          "Disease processes",
      },
    ],

    bds: [
      {
        id: "oral-anatomy",
        name: "Oral Anatomy",
        icon: "🦷",
        description:
          "Oral structures",
      },
      {
        id: "dental-anatomy",
        name: "Dental Anatomy",
        icon: "🦷",
        description:
          "Dental structures",
      },
      {
        id: "physiology",
        name: "Physiology",
        icon: "🧠",
        description:
          "Human physiology",
      },
      {
        id: "biochemistry",
        name: "Biochemistry",
        icon: "🧪",
        description:
          "Biochemistry",
      },
    ],

    biotechnology: [
      {
        id: "cell-biology",
        name: "Cell Biology",
        icon: "🧬",
        description:
          "Cells & biological systems",
      },
      {
        id: "genetics",
        name: "Genetics",
        icon: "🧬",
        description:
          "Genetics & heredity",
      },
      {
        id: "microbiology",
        name: "Microbiology",
        icon: "🔬",
        description:
          "Microorganisms",
      },
      {
        id: "biochemistry",
        name: "Biochemistry",
        icon: "🧪",
        description:
          "Biochemical processes",
      },
    ],

    // =================================================
    // COMMERCE
    // =================================================

    bcom: [
      {
        id: "accounting",
        name: "Accounting",
        icon: "🧮",
        description:
          "Financial accounting",
      },
      {
        id: "economics",
        name: "Economics",
        icon: "💰",
        description:
          "Micro & macro economics",
      },
      {
        id: "business-law",
        name: "Business Law",
        icon: "⚖️",
        description:
          "Business legal concepts",
      },
      {
        id: "business-studies",
        name: "Business Studies",
        icon: "💼",
        description:
          "Business management",
      },
    ],

    bba: [
      {
        id: "management",
        name: "Management",
        icon: "💼",
        description:
          "Management principles",
      },
      {
        id: "marketing",
        name: "Marketing",
        icon: "📢",
        description:
          "Marketing fundamentals",
      },
      {
        id: "finance",
        name: "Finance",
        icon: "💰",
        description:
          "Business finance",
      },
      {
        id: "business-economics",
        name: "Business Economics",
        icon: "📊",
        description:
          "Business economics",
      },
    ],

    bms: [
      {
        id: "management",
        name: "Management",
        icon: "💼",
        description:
          "Management studies",
      },
      {
        id: "finance",
        name: "Finance",
        icon: "💰",
        description:
          "Finance fundamentals",
      },
      {
        id: "marketing",
        name: "Marketing",
        icon: "📢",
        description:
          "Marketing concepts",
      },
      {
        id: "human-resources",
        name: "Human Resources",
        icon: "👥",
        description:
          "HR management",
      },
    ],

    "ba-economics": [
      {
        id: "microeconomics",
        name: "Microeconomics",
        icon: "📊",
        description:
          "Microeconomic theory",
      },
      {
        id: "macroeconomics",
        name: "Macroeconomics",
        icon: "📈",
        description:
          "Macroeconomic theory",
      },
      {
        id: "statistics",
        name: "Statistics",
        icon: "📊",
        description:
          "Economic statistics",
      },
      {
        id: "development",
        name: "Development Economics",
        icon: "🌍",
        description:
          "Economic development",
      },
    ],

    ca: [
      {
        id: "accounting",
        name: "Accounting",
        icon: "🧮",
        description:
          "Accounting",
      },
      {
        id: "law",
        name: "Business Law",
        icon: "⚖️",
        description:
          "Business law",
      },
      {
        id: "economics",
        name: "Economics",
        icon: "💰",
        description:
          "Economics",
      },
      {
        id: "taxation",
        name: "Taxation",
        icon: "📑",
        description:
          "Taxation concepts",
      },
    ],

    cs: [
      {
        id: "company-law",
        name: "Company Law",
        icon: "⚖️",
        description:
          "Company law",
      },
      {
        id: "corporate-governance",
        name: "Corporate Governance",
        icon: "🏢",
        description:
          "Corporate governance",
      },
      {
        id: "business-law",
        name: "Business Law",
        icon: "📜",
        description:
          "Business law",
      },
      {
        id: "management",
        name: "Management",
        icon: "💼",
        description:
          "Management concepts",
      },
    ],

    // =================================================
    // ARTS
    // =================================================

    ba: [
      {
        id: "history",
        name: "History",
        icon: "🏛️",
        description:
          "History",
      },
      {
        id: "political-science",
        name: "Political Science",
        icon: "🇮🇳",
        description:
          "Political science",
      },
      {
        id: "sociology",
        name: "Sociology",
        icon: "👥",
        description:
          "Society & social systems",
      },
      {
        id: "english",
        name: "English",
        icon: "📖",
        description:
          "English literature & language",
      },
    ],

    psychology: [
      {
        id: "basic-psychology",
        name: "Basic Psychology",
        icon: "🧠",
        description:
          "Fundamentals of psychology",
      },
      {
        id: "social-psychology",
        name: "Social Psychology",
        icon: "👥",
        description:
          "Social behaviour",
      },
      {
        id: "developmental",
        name: "Developmental Psychology",
        icon: "🌱",
        description:
          "Human development",
      },
      {
        id: "research",
        name: "Research Methods",
        icon: "🔬",
        description:
          "Psychological research",
      },
    ],

    journalism: [
      {
        id: "journalism",
        name: "Journalism",
        icon: "📰",
        description:
          "Journalism fundamentals",
      },
      {
        id: "mass-media",
        name: "Mass Media",
        icon: "📺",
        description:
          "Mass media",
      },
      {
        id: "communication",
        name: "Communication",
        icon: "🎙️",
        description:
          "Media communication",
      },
      {
        id: "current-affairs",
        name: "Current Affairs",
        icon: "🌍",
        description:
          "Current events",
      },
    ],

    "mass-communication": [
      {
        id: "mass-media",
        name: "Mass Media",
        icon: "📺",
        description:
          "Mass media",
      },
      {
        id: "journalism",
        name: "Journalism",
        icon: "📰",
        description:
          "Journalism",
      },
      {
        id: "advertising",
        name: "Advertising",
        icon: "📢",
        description:
          "Advertising",
      },
      {
        id: "communication",
        name: "Communication",
        icon: "🎙️",
        description:
          "Communication studies",
      },
    ],

    "fashion-design": [
      {
        id: "fashion",
        name: "Fashion",
        icon: "👗",
        description:
          "Fashion fundamentals",
      },
      {
        id: "textile",
        name: "Textile",
        icon: "🧵",
        description:
          "Textile knowledge",
      },
      {
        id: "design",
        name: "Design",
        icon: "🎨",
        description:
          "Design principles",
      },
      {
        id: "history",
        name: "Fashion History",
        icon: "🏛️",
        description:
          "Fashion history",
      },
    ],

    animation: [
      {
        id: "animation",
        name: "Animation",
        icon: "🎬",
        description:
          "Animation principles",
      },
      {
        id: "design",
        name: "Design",
        icon: "🎨",
        description:
          "Design fundamentals",
      },
      {
        id: "graphics",
        name: "Graphics",
        icon: "🖥️",
        description:
          "Computer graphics",
      },
      {
        id: "media",
        name: "Media",
        icon: "🎥",
        description:
          "Digital media",
      },
    ],

    // =================================================
    // COMPETITIVE
    // =================================================

    jee: [
      {
        id: "physics",
        name: "Physics",
        icon: "⚡",
        description:
          "JEE Physics",
      },
      {
        id: "chemistry",
        name: "Chemistry",
        icon: "🧪",
        description:
          "JEE Chemistry",
      },
      {
        id: "mathematics",
        name: "Mathematics",
        icon: "📐",
        description:
          "JEE Mathematics",
      },
      {
        id: "aptitude",
        name: "Aptitude",
        icon: "🧠",
        description:
          "Entrance examination aptitude",
      },
    ],

    neet: [
      {
        id: "physics",
        name: "Physics",
        icon: "⚡",
        description:
          "NEET Physics",
      },
      {
        id: "chemistry",
        name: "Chemistry",
        icon: "🧪",
        description:
          "NEET Chemistry",
      },
      {
        id: "biology",
        name: "Biology",
        icon: "🧬",
        description:
          "NEET Biology",
      },
      {
        id: "gk",
        name: "General Knowledge",
        icon: "🧠",
        description:
          "General awareness",
      },
    ],

    gate: [
      {
        id: "engineering-mathematics",
        name: "Engineering Mathematics",
        icon: "📐",
        description:
          "GATE Mathematics",
      },
      {
        id: "general-aptitude",
        name: "General Aptitude",
        icon: "🧠",
        description:
          "GATE aptitude",
      },
      {
        id: "technical",
        name: "Technical",
        icon: "⚙️",
        description:
          "Branch-specific technical questions",
      },
      {
        id: "reasoning",
        name: "Reasoning",
        icon: "💡",
        description:
          "Logical reasoning",
      },
    ],

    upsc: [
      {
        id: "history",
        name: "History",
        icon: "🏛️",
        description:
          "Indian & world history",
      },
      {
        id: "geography",
        name: "Geography",
        icon: "🌍",
        description:
          "Indian & world geography",
      },
      {
        id: "polity",
        name: "Indian Polity",
        icon: "🇮🇳",
        description:
          "Indian constitution & polity",
      },
      {
        id: "current-affairs",
        name: "Current Affairs",
        icon: "📰",
        description:
          "Current events",
      },
    ],

    ssc: [
      {
        id: "quantitative-aptitude",
        name: "Quantitative Aptitude",
        icon: "🔢",
        description:
          "SSC mathematics",
      },
      {
        id: "reasoning",
        name: "Reasoning",
        icon: "🧠",
        description:
          "Logical reasoning",
      },
      {
        id: "english",
        name: "English",
        icon: "📖",
        description:
          "English language",
      },
      {
        id: "general-awareness",
        name: "General Awareness",
        icon: "🌍",
        description:
          "General awareness",
      },
    ],

    banking: [
      {
        id: "quantitative-aptitude",
        name: "Quantitative Aptitude",
        icon: "🔢",
        description:
          "Banking mathematics",
      },
      {
        id: "reasoning",
        name: "Reasoning",
        icon: "🧠",
        description:
          "Logical reasoning",
      },
      {
        id: "english",
        name: "English",
        icon: "📖",
        description:
          "English language",
      },
      {
        id: "banking-awareness",
        name: "Banking Awareness",
        icon: "🏦",
        description:
          "Banking knowledge",
      },
    ],

    railway: [
      {
        id: "mathematics",
        name: "Mathematics",
        icon: "🔢",
        description:
          "Railway mathematics",
      },
      {
        id: "reasoning",
        name: "Reasoning",
        icon: "🧠",
        description:
          "Railway reasoning",
      },
      {
        id: "general-science",
        name: "General Science",
        icon: "🔬",
        description:
          "General science",
      },
      {
        id: "general-awareness",
        name: "General Awareness",
        icon: "🌍",
        description:
          "General awareness",
      },
    ],

    nda: [
      {
        id: "mathematics",
        name: "Mathematics",
        icon: "📐",
        description:
          "NDA mathematics",
      },
      {
        id: "english",
        name: "English",
        icon: "📖",
        description:
          "NDA English",
      },
      {
        id: "general-science",
        name: "General Science",
        icon: "🔬",
        description:
          "Science",
      },
      {
        id: "current-affairs",
        name: "Current Affairs",
        icon: "📰",
        description:
          "Current affairs",
      },
    ],

    cuet: [
      {
        id: "english",
        name: "English",
        icon: "📖",
        description:
          "CUET English",
      },
      {
        id: "general-test",
        name: "General Test",
        icon: "🧠",
        description:
          "General test",
      },
      {
        id: "current-affairs",
        name: "Current Affairs",
        icon: "📰",
        description:
          "Current affairs",
      },
      {
        id: "domain",
        name: "Domain Subjects",
        icon: "📚",
        description:
          "Subject-specific preparation",
      },
    ],

    // =================================================
    // PROFESSIONAL
    // =================================================

    "data-science": [
      {
        id: "statistics",
        name: "Statistics",
        icon: "📊",
        description:
          "Statistics & probability",
      },
      {
        id: "python",
        name: "Python",
        icon: "🐍",
        description:
          "Python programming",
      },
      {
        id: "machine-learning",
        name: "Machine Learning",
        icon: "🤖",
        description:
          "ML fundamentals",
      },
      {
        id: "data-analysis",
        name: "Data Analysis",
        icon: "📈",
        description:
          "Data analysis",
      },
    ],

    "artificial-intelligence": [
      {
        id: "machine-learning",
        name: "Machine Learning",
        icon: "🤖",
        description:
          "Machine learning",
      },
      {
        id: "deep-learning",
        name: "Deep Learning",
        icon: "🧠",
        description:
          "Deep learning",
      },
      {
        id: "python",
        name: "Python",
        icon: "🐍",
        description:
          "Python for AI",
      },
      {
        id: "ai-fundamentals",
        name: "AI Fundamentals",
        icon: "🤖",
        description:
          "Artificial intelligence",
      },
    ],

    "cyber-security": [
      {
        id: "network-security",
        name: "Network Security",
        icon: "🌐",
        description:
          "Network security",
      },
      {
        id: "cryptography",
        name: "Cryptography",
        icon: "🔐",
        description:
          "Cryptography basics",
      },
      {
        id: "ethical-security",
        name: "Security Fundamentals",
        icon: "🛡️",
        description:
          "Security concepts",
      },
      {
        id: "cyber-awareness",
        name: "Cyber Awareness",
        icon: "💻",
        description:
          "Cyber safety",
      },
    ],

    "digital-marketing": [
      {
        id: "seo",
        name: "SEO",
        icon: "🔎",
        description:
          "Search engine optimization",
      },
      {
        id: "social-media",
        name: "Social Media",
        icon: "📱",
        description:
          "Social media marketing",
      },
      {
        id: "content",
        name: "Content Marketing",
        icon: "✍️",
        description:
          "Content strategy",
      },
      {
        id: "analytics",
        name: "Marketing Analytics",
        icon: "📊",
        description:
          "Digital analytics",
      },
    ],

    "web-development": [
      {
        id: "html-css",
        name: "HTML & CSS",
        icon: "🎨",
        description:
          "Web page fundamentals",
      },
      {
        id: "javascript",
        name: "JavaScript",
        icon: "🟨",
        description:
          "JavaScript programming",
      },
      {
        id: "react",
        name: "React",
        icon: "⚛️",
        description:
          "React development",
      },
      {
        id: "backend",
        name: "Backend Development",
        icon: "⚙️",
        description:
          "Server-side development",
      },
    ],

    "cloud-computing": [
      {
        id: "cloud-fundamentals",
        name: "Cloud Fundamentals",
        icon: "☁️",
        description:
          "Cloud concepts",
      },
      {
        id: "aws",
        name: "AWS",
        icon: "☁️",
        description:
          "AWS fundamentals",
      },
      {
        id: "azure",
        name: "Azure",
        icon: "☁️",
        description:
          "Microsoft Azure",
      },
      {
        id: "devops",
        name: "DevOps",
        icon: "⚙️",
        description:
          "DevOps fundamentals",
      },
    ],
  };

  return (
    subjects[courseId] || [
      {
        id: "general",
        name: "General Quiz",
        icon: "🧠",
        description:
          "General questions related to this course",
      },
      {
        id: "aptitude",
        name: "Aptitude",
        icon: "🧠",
        description:
          "Aptitude and logical questions",
      },
      {
        id: "practice",
        name: "Practice",
        icon: "📝",
        description:
          "Practice questions",
      },
      {
        id: "general-knowledge",
        name: "General Knowledge",
        icon: "🌍",
        description:
          "General awareness questions",
      },
    ]
  );
}

export default CourseQuiz;
