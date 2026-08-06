
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Question from "../models/Question.js";
import DailyQuiz from "../models/DailyQuiz.js";  // 👈 add karo

dotenv.config();

const questions = [
 
{
 question:"For an ideal operational amplifier, the input impedance is:",
 options:[
  "Zero",
  "Infinite",
  "Very low",
  "1 Ohm"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The cut-in voltage of a silicon diode is approximately:",
 options:[
  "0.1 V",
  "0.3 V",
  "0.7 V",
  "1.5 V"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The Boolean expression A + AB simplifies to:",
 options:[
  "A",
  "AB",
  "B",
  "A+B"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The output frequency of a frequency divider circuit using a flip-flop is:",
 options:[
  "Same as input frequency",
  "Twice the input frequency",
  "Half the input frequency",
  "Zero"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"A continuous time signal is called periodic if:",
 options:[
  "It repeats after a fixed interval of time",
  "It has zero frequency",
  "It is always constant",
  "It has infinite energy"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The Fourier transform converts a signal from:",
 options:[
  "Time domain to frequency domain",
  "Frequency domain to time domain only",
  "Digital to analog",
  "Analog to digital"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"For a stable LTI system, all poles of the system must lie:",
 options:[
  "On imaginary axis",
  "Inside left half of s-plane",
  "Outside right half of s-plane",
  "At origin"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The impedance of an inductor is:",
 options:[
  "1/jωL",
  "jωL",
  "R/L",
  "ω/L"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The sampling frequency according to Nyquist theorem should be:",
 options:[
  "Equal to maximum frequency",
  "Less than maximum frequency",
  "At least twice the maximum frequency",
  "Zero"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"A transistor operates as an amplifier in:",
 options:[
  "Cut-off region",
  "Active region",
  "Saturation region",
  "Breakdown region"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The unit of conductance is:",
 options:[
  "Ohm",
  "Siemens",
  "Henry",
  "Farad"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"For a series RLC circuit at resonance, the impedance is:",
 options:[
  "Maximum",
  "Minimum",
  "Zero always",
  "Infinite"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The quality factor of a resonant circuit indicates:",
 options:[
  "Power loss",
  "Sharpness of resonance",
  "Resistance only",
  "Capacitance only"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"A Zener diode is mainly used for:",
 options:[
  "Amplification",
  "Voltage regulation",
  "Oscillation",
  "Switching only"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The output of an AND gate is HIGH when:",
 options:[
  "All inputs are HIGH",
  "All inputs are LOW",
  "Any input is HIGH",
  "Inputs are different"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The number of flip-flops required for a MOD-16 counter is:",
 options:[
  "2",
  "4",
  "8",
  "16"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The Laplace transform of a unit step function is:",
 options:[
  "1/s",
  "s",
  "1",
  "s²"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The convolution of two signals in time domain corresponds to:",
 options:[
  "Addition in frequency domain",
  "Multiplication in frequency domain",
  "Division in frequency domain",
  "Differentiation"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The gain of a common emitter amplifier is generally:",
 options:[
  "Less than unity",
  "Greater than unity",
  "Always zero",
  "Equal to one"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"In digital electronics, a multiplexer is used to:",
 options:[
  "Store data",
  "Select one input from multiple inputs",
  "Convert analog signal",
  "Generate clock signal"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},{
 question:"The bandwidth of an AM signal with modulating frequency fm is:",
 options:[
  "fm",
  "2fm",
  "3fm",
  "fc"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"In frequency modulation (FM), the amplitude of carrier signal:",
 options:[
  "Varies with message signal",
  "Remains constant",
  "Becomes zero",
  "Doubles"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The process of converting analog signal into digital form is called:",
 options:[
  "Modulation",
  "Sampling",
  "Amplification",
  "Filtering"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The Nyquist rate for a signal having maximum frequency 5 kHz is:",
 options:[
  "2.5 kHz",
  "5 kHz",
  "10 kHz",
  "20 kHz"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"A control system is stable if its poles are located:",
 options:[
  "In right half plane",
  "In left half plane",
  "On imaginary axis only",
  "At infinity"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The transfer function of a system is defined as:",
 options:[
  "Output/Input with zero initial conditions",
  "Input/Output",
  "Only output signal",
  "Only input signal"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The time constant of an RC circuit is:",
 options:[
  "R/C",
  "RC",
  "1/RC",
  "R+C"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"A MOSFET is a:",
 options:[
  "Current controlled device",
  "Voltage controlled device",
  "Power source",
  "Passive element"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The ideal op-amp has open loop gain:",
 options:[
  "Zero",
  "One",
  "Infinite",
  "Negative"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The modulation index of AM should not exceed:",
 options:[
  "0.5",
  "1",
  "2",
  "10"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},
{
 question:"The derivative of sin(x) is:",
 options:[
  "cos(x)",
  "-cos(x)",
  "sin(x)",
  "-sin(x)"
 ],
 correctAnswer:0,
 category:"Engineering Mathematics",
 difficulty:"Easy"
},

{
 question:"The determinant of an identity matrix is:",
 options:[
  "0",
  "1",
  "Depends on size",
  "Infinity"
 ],
 correctAnswer:1,
 category:"Engineering Mathematics",
 difficulty:"Medium"
},

{
 question:"If A is a square matrix and |A| ≠ 0, then A is:",
 options:[
  "Singular",
  "Non-singular",
  "Zero matrix",
  "Identity matrix"
 ],
 correctAnswer:1,
 category:"Engineering Mathematics",
 difficulty:"Medium"
},

{
 question:"The eigenvalues of an identity matrix are:",
 options:[
  "0",
  "1",
  "-1",
  "Depends on matrix"
 ],
 correctAnswer:1,
 category:"Engineering Mathematics",
 difficulty:"Easy"
},

{
 question:"The probability of getting a head in a fair coin toss is:",
 options:[
  "0",
  "1/4",
  "1/2",
  "1"
 ],
 correctAnswer:2,
 category:"Engineering Mathematics",
 difficulty:"Easy"
},

{
 question:"A train travels 240 km in 4 hours. Its speed is:",
 options:[
  "40 km/hr",
  "50 km/hr",
  "60 km/hr",
  "80 km/hr"
 ],
 correctAnswer:2,
 category:"Aptitude",
 difficulty:"Easy"
},

{
 question:"If 20% of a number is 50, the number is:",
 options:[
  "100",
  "200",
  "250",
  "500"
 ],
 correctAnswer:2,
 category:"Aptitude",
 difficulty:"Medium"
},

{
 question:"The average of 10,20 and 30 is:",
 options:[
  "10",
  "20",
  "30",
  "40"
 ],
 correctAnswer:1,
 category:"Aptitude",
 difficulty:"Easy"
},

{
 question:"A man buys an item for ₹500 and sells it for ₹600. Profit percentage is:",
 options:[
  "10%",
  "15%",
  "20%",
  "25%"
 ],
 correctAnswer:2,
 category:"Aptitude",
 difficulty:"Medium"
},

{
 question:"Simple interest formula is:",
 options:[
  "P+R+T",
  "PRT/100",
  "P/R/T",
  "P×T"
 ],
 correctAnswer:1,
 category:"Aptitude",
 difficulty:"Easy"
},

{
 question:"Find the odd one out:",
 options:[
  "Apple",
  "Mango",
  "Carrot",
  "Banana"
 ],
 correctAnswer:2,
 category:"Reasoning",
 difficulty:"Easy"
},

{
 question:"If CAT is coded as DBU, then DOG is coded as:",
 options:[
  "EPH",
  "EOG",
  "DPH",
  "FOH"
 ],
 correctAnswer:0,
 category:"Reasoning",
 difficulty:"Medium"
},

{
 question:"Complete the series: 2, 4, 8, 16, ?",
 options:[
  "24",
  "32",
  "36",
  "64"
 ],
 correctAnswer:1,
 category:"Reasoning",
 difficulty:"Easy"
},

{
 question:"If all roses are flowers and some flowers are red, then:",
 options:[
  "All roses are red",
  "Some roses may be red",
  "No roses are red",
  "All flowers are roses"
 ],
 correctAnswer:1,
 category:"Reasoning",
 difficulty:"Hard"
},

{
 question:"Find the missing number: 5,10,20,40,?",
 options:[
  "60",
  "70",
  "80",
  "100"
 ],
 correctAnswer:2,
 category:"Reasoning",
 difficulty:"Easy"
},

{
 question:"The gain of an ideal voltage amplifier is:",
 options:[
  "Zero",
  "Infinite",
  "One",
  "Negative"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The SI unit of capacitance is:",
 options:[
  "Henry",
  "Ohm",
  "Farad",
  "Tesla"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"A diode allows current flow mainly in:",
 options:[
  "Both directions equally",
  "Forward direction",
  "Reverse direction only",
  "No direction"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The frequency response of an amplifier shows relation between:",
 options:[
  "Gain and frequency",
  "Voltage and current",
  "Power and time",
  "Resistance and capacitance"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The output of a NOT gate is:",
 options:[
  "Same as input",
  "Complement of input",
  "Always HIGH",
  "Always LOW"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},
{
 question:"The impedance of a capacitor in AC circuit is:",
 options:[
  "jωC",
  "1/jωC",
  "jωL",
  "R"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The current through a capacitor is proportional to:",
 options:[
  "Voltage",
  "Rate of change of voltage",
  "Resistance",
  "Power"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"Kirchhoff's Current Law is based on conservation of:",
 options:[
  "Energy",
  "Charge",
  "Momentum",
  "Power"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The Thevenin equivalent circuit consists of:",
 options:[
  "Current source and resistor",
  "Voltage source and resistor",
  "Only resistor",
  "Only voltage source"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The RMS value of a sinusoidal waveform with peak value Vm is:",
 options:[
  "Vm",
  "Vm/2",
  "Vm/√2",
  "√2Vm"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The Laplace transform is mainly used for analysis of:",
 options:[
  "Linear systems",
  "Only digital circuits",
  "Only antennas",
  "Only filters"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"A system is causal if output depends on:",
 options:[
  "Future inputs",
  "Past and present inputs",
  "Only future output",
  "Random input"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The unit impulse signal δ(t) has area:",
 options:[
  "0",
  "1",
  "Infinite",
  "-1"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The bandwidth of an ideal low pass filter is:",
 options:[
  "Zero",
  "Infinite",
  "Finite only",
  "Negative"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"A discrete time signal is represented as:",
 options:[
  "x(t)",
  "x[n]",
  "X(s)",
  "X(jω)"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The propagation delay of a logic gate depends on:",
 options:[
  "Transistor switching speed",
  "Only voltage",
  "Only current",
  "Temperature only"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"A JK flip-flop eliminates the problem of:",
 options:[
  "Propagation delay",
  "Race around condition",
  "Power loss",
  "Noise"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The number of select lines required for 16:1 multiplexer is:",
 options:[
  "2",
  "4",
  "8",
  "16"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"A register is used to store:",
 options:[
  "Single bit only",
  "Multiple bits",
  "Analog signal",
  "Power"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The ADC converts:",
 options:[
  "Digital to analog",
  "Analog to digital",
  "Frequency to voltage",
  "Power to energy"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The carrier signal in AM is:",
 options:[
  "Suppressed always",
  "Modified by message signal",
  "Removed completely",
  "Converted to DC"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"FM is less affected by noise compared to AM because:",
 options:[
  "Amplitude remains constant",
  "Frequency is zero",
  "Power is zero",
  "No carrier exists"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The bandwidth of FM depends on:",
 options:[
  "Frequency deviation and message frequency",
  "Only amplitude",
  "Only carrier",
  "Resistance"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"A control system with feedback is called:",
 options:[
  "Open loop system",
  "Closed loop system",
  "Static system",
  "Passive system"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The characteristic equation of a system is obtained from:",
 options:[
  "Numerator",
  "Denominator of transfer function",
  "Input signal",
  "Output signal"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},
{
 question:"The gain margin and phase margin are used to determine:",
 options:[
  "Speed",
  "Stability",
  "Power",
  "Frequency"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The Bode plot represents:",
 options:[
  "Time response",
  "Frequency response",
  "Power response",
  "Voltage response"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"A pole of a transfer function represents:",
 options:[
  "Zero output",
  "Natural response of system",
  "Input signal",
  "Noise"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The unit of resistance is:",
 options:[
  "Volt",
  "Ampere",
  "Ohm",
  "Watt"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The power factor of a purely resistive circuit is:",
 options:[
  "0",
  "0.5",
  "1",
  "Infinity"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"In a series circuit, the same quantity flows through all elements:",
 options:[
  "Voltage",
  "Current",
  "Power",
  "Resistance"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The voltage across an inductor cannot change:",
 options:[
  "Instantaneously",
  "Slowly",
  "Never",
  "Always"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"A diode used for light emission is:",
 options:[
  "Zener diode",
  "LED",
  "Photodiode",
  "Tunnel diode"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The reverse saturation current of diode increases with:",
 options:[
  "Decrease in temperature",
  "Increase in temperature",
  "Voltage only",
  "Resistance"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The transistor current gain β is:",
 options:[
  "Ic/Ib",
  "Ib/Ic",
  "Ie/Ic",
  "Ic/Ie"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The main function of a rectifier is:",
 options:[
  "DC to AC conversion",
  "AC to DC conversion",
  "Amplification",
  "Filtering only"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"A full wave rectifier has ripple frequency:",
 options:[
  "Same as input",
  "Twice input frequency",
  "Half input frequency",
  "Zero"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The ideal op-amp output resistance is:",
 options:[
  "Zero",
  "Infinite",
  "High",
  "1 kΩ"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The voltage follower has voltage gain:",
 options:[
  "0",
  "1",
  "Infinite",
  "-1"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"A Schmitt trigger is used for:",
 options:[
  "Wave shaping",
  "Power amplification",
  "Memory storage",
  "Modulation"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The maximum frequency component of a signal determines:",
 options:[
  "Sampling rate",
  "Amplitude",
  "Power",
  "Phase"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The z-transform is mainly used for:",
 options:[
  "Continuous signals",
  "Discrete time signals",
  "Analog circuits",
  "Power systems"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The ROC in z-transform determines:",
 options:[
  "Stability and causality",
  "Voltage gain",
  "Power",
  "Resistance"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"A linear system satisfies:",
 options:[
  "Superposition principle",
  "Only multiplication",
  "Only addition",
  "Random behavior"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The energy of a power signal is:",
 options:[
  "Finite",
  "Infinite",
  "Zero",
  "Negative"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The main purpose of modulation is:",
 options:[
  "Reduce frequency",
  "Enable efficient transmission",
  "Remove signal",
  "Increase resistance"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"Antenna size is related to:",
 options:[
  "Wavelength",
  "Resistance",
  "Current only",
  "Power only"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The wavelength of a signal is:",
 options:[
  "c/f",
  "f/c",
  "cf",
  "c+f"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The speed of electromagnetic waves in free space is:",
 options:[
  "3×10^8 m/s",
  "3×10^6 m/s",
  "300 m/s",
  "1500 m/s"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The noise figure of an amplifier indicates:",
 options:[
  "Noise performance",
  "Voltage gain",
  "Bandwidth only",
  "Power output"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"The ideal transformer has:",
 options:[
  "Power loss",
  "No power loss",
  "High resistance",
  "Zero voltage"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
},

{
 question:"The cutoff frequency of RC low pass filter is:",
 options:[
  "1/2πRC",
  "2πRC",
  "RC",
  "1/RC"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The Q factor of a coil increases when:",
 options:[
  "Resistance decreases",
  "Resistance increases",
  "Inductance decreases",
  "Frequency decreases"
 ],
 correctAnswer:0,
 category:"ECE",
 difficulty:"Hard"
},

{
 question:"A logic gate with universal property is:",
 options:[
  "AND",
  "OR",
  "NAND",
  "XOR"
 ],
 correctAnswer:2,
 category:"ECE",
 difficulty:"Medium"
},

{
 question:"The memory element in digital circuits is:",
 options:[
  "Adder",
  "Flip-flop",
  "Multiplexer",
  "Decoder"
 ],
 correctAnswer:1,
 category:"ECE",
 difficulty:"Easy"
}
];  // yaha tumhare 100 questions hain



const seed = async () => {
  try {

    await connectDB();

    await Question.deleteMany();


    console.log("Question count in file:", questions.length);

    await Question.insertMany(questions);

    console.log("✅ Questions inserted successfully");

    mongoose.connection.close();

  } catch (err) {
    console.log(err);
  }
};

seed();

