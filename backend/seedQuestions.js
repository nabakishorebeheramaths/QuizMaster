import dotenv from "dotenv";

dotenv.config({
  path: "./backend/.env",
});

import mongoose from "mongoose";
import connectDB from "./config/db.js";
import DailyQuestion from "./models/DailyQuestion.js";

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
// ================= GATE ECE PART 1 (Q1-Q100) =================

{
question:"For an ideal operational amplifier, the input impedance is:",
options:[
"Zero",
"Infinite",
"Very low",
"1 Ohm"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The output resistance of an ideal op-amp is:",
options:[
"Infinite",
"Zero",
"Very high",
"1 kΩ"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The voltage gain of an ideal voltage follower is:",
options:[
"0",
"1",
"Infinite",
"-1"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The cut-in voltage of a silicon diode is approximately:",
options:[
"0.1 V",
"0.3 V",
"0.7 V",
"1.2 V"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A transistor operates as an amplifier in which region?",
options:[
"Cut-off region",
"Active region",
"Saturation region",
"Breakdown region"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The current gain β of a BJT is defined as:",
options:[
"Ic/Ib",
"Ib/Ic",
"Ie/Ic",
"Ic/Ie"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A MOSFET is a:",
options:[
"Current controlled device",
"Voltage controlled device",
"Power device only",
"Passive device"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The SI unit of capacitance is:",
options:[
"Henry",
"Farad",
"Ohm",
"Tesla"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The impedance of an inductor is:",
options:[
"1/jωL",
"jωL",
"R/L",
"ωL"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The impedance of a capacitor is:",
options:[
"jωC",
"1/jωC",
"jωL",
"R"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"In a series RLC circuit at resonance, impedance is:",
options:[
"Maximum",
"Minimum",
"Infinite",
"Zero always"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The resonance frequency of an LC circuit is:",
options:[
"1/(2π√LC)",
"2π√LC",
"√LC",
"LC"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Kirchhoff's Current Law is based on conservation of:",
options:[
"Energy",
"Charge",
"Power",
"Momentum"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Kirchhoff's Voltage Law is based on conservation of:",
options:[
"Charge",
"Energy",
"Mass",
"Current"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Thevenin equivalent circuit contains:",
options:[
"Voltage source and resistance",
"Current source and resistance",
"Only resistance",
"Only voltage source"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Norton equivalent circuit contains:",
options:[
"Voltage source",
"Current source and resistance",
"Only current",
"Only resistance"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
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
category:"GATE ECE",
difficulty:"Medium"
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
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Laplace transform of unit step function is:",
options:[
"1/s",
"s",
"1",
"s²"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Fourier transform converts:",
options:[
"Time domain to frequency domain",
"Analog to digital",
"Digital to analog",
"Frequency to voltage"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The sampling theorem requires sampling frequency:",
options:[
"Equal to maximum frequency",
"At least twice maximum frequency",
"Half maximum frequency",
"Zero"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A system is called causal if output depends on:",
options:[
"Future input",
"Past and present input",
"Only future output",
"Random input"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"For a stable continuous time system, poles should lie in:",
options:[
"Right half plane",
"Left half plane",
"Origin",
"Imaginary axis only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The convolution theorem states that convolution in time domain corresponds to:",
options:[
"Addition in frequency domain",
"Multiplication in frequency domain",
"Differentiation",
"Division"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
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
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The energy of a power signal is generally:",
options:[
"Finite",
"Infinite",
"Zero",
"Negative"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A linear system satisfies:",
options:[
"Superposition principle",
"Multiplication only",
"Random operation",
"None"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The z-transform is mainly used for:",
options:[
"Continuous signals",
"Discrete signals",
"Power circuits",
"Analog filters"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The ROC of z-transform determines:",
options:[
"Voltage gain",
"Stability and causality",
"Power",
"Resistance"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A NOT gate produces:",
options:[
"Same output",
"Complement output",
"Always HIGH",
"Always LOW"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A NAND gate is called universal because:",
options:[
"It stores data",
"It can implement any Boolean function",
"It increases power",
"It reduces voltage"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The number of flip-flops required for MOD-16 counter is:",
options:[
"2",
"4",
"8",
"16"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A multiplexer is used to:",
options:[
"Store information",
"Select one input",
"Amplify signal",
"Generate power"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A 16:1 multiplexer requires select lines:",
options:[
"2",
"4",
"8",
"16"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The output of AND gate is HIGH when:",
options:[
"Any input HIGH",
"All inputs HIGH",
"All inputs LOW",
"Inputs different"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The output of OR gate is LOW when:",
options:[
"All inputs LOW",
"Any input HIGH",
"All inputs HIGH",
"Never"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A JK flip-flop removes:",
options:[
"Race around condition",
"Noise",
"Power loss",
"Propagation delay"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The ADC converts:",
options:[
"Analog to digital",
"Digital to analog",
"DC to AC",
"AC to DC"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The DAC converts:",
options:[
"Analog to digital",
"Digital to analog",
"AC to DC",
"Frequency to voltage"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The bandwidth of AM signal is:",
options:[
"fm",
"2fm",
"fc",
"2fc"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"In FM, carrier amplitude:",
options:[
"Varies",
"Remains constant",
"Becomes zero",
"Doubles"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"FM is less affected by noise because:",
options:[
"Amplitude remains constant",
"Frequency is zero",
"No carrier exists",
"Power is zero"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The purpose of modulation is:",
options:[
"Efficient transmission",
"Reduce signal",
"Increase resistance",
"Remove information"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The speed of electromagnetic wave in free space is:",
options:[
"3×10⁸ m/s",
"3×10⁶ m/s",
"300 m/s",
"1500 m/s"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Wavelength of electromagnetic wave is:",
options:[
"c/f",
"f/c",
"cf",
"c+f"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Bode plot represents:",
options:[
"Time response",
"Frequency response",
"Power response",
"Current response"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Gain margin and phase margin indicate:",
options:[
"Stability",
"Power",
"Speed",
"Resistance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A closed loop system uses:",
options:[
"Feedback",
"No input",
"Only output",
"Random signal"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},
// ================= GATE ECE PART 1 (Q51-Q100) =================

{
question:"The characteristic equation of a control system is obtained from:",
options:[
"Numerator of transfer function",
"Denominator of transfer function",
"Input signal",
"Output signal"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The transfer function is defined as:",
options:[
"Output/Input under zero initial conditions",
"Input/Output",
"Input × Output",
"Output only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A control system is stable when:",
options:[
"All poles lie in left half plane",
"All poles lie in right half plane",
"Zeros are zero",
"Gain is infinite"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The time constant of an RC circuit is:",
options:[
"RC",
"R/C",
"1/RC",
"R+C"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The cutoff frequency of an RC low pass filter is:",
options:[
"1/(2πRC)",
"2πRC",
"RC",
"1/R"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The quality factor Q of a resonant circuit indicates:",
options:[
"Power loss",
"Sharpness of resonance",
"Resistance only",
"Capacitance only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A diode is mainly used for:",
options:[
"Rectification",
"Amplification only",
"Oscillation only",
"Storage"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A Zener diode is used for:",
options:[
"Voltage regulation",
"Amplification",
"Switching only",
"Oscillation"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The reverse saturation current of a diode increases with:",
options:[
"Decrease in temperature",
"Increase in temperature",
"Decrease in voltage",
"Resistance"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"LED works on the principle of:",
options:[
"Photoelectric effect",
"Electroluminescence",
"Thermal emission",
"Magnetic effect"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A photodiode is generally operated in:",
options:[
"Forward bias",
"Reverse bias",
"Zero bias only",
"Breakdown always"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The ideal op-amp open loop gain is:",
options:[
"Zero",
"One",
"Infinite",
"-1"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The virtual short concept applies to:",
options:[
"Ideal op-amp with negative feedback",
"Diode circuit",
"Transformer",
"Oscillator"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The slew rate of an op-amp determines:",
options:[
"Maximum rate of output voltage change",
"Input resistance",
"Output resistance",
"Gain"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The bandwidth of an ideal op-amp is:",
options:[
"Zero",
"Infinite",
"Very small",
"1 Hz"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The transistor used as a switch operates between:",
options:[
"Active and cutoff",
"Active and breakdown",
"Cutoff and saturation",
"Only active"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The emitter current of a transistor is:",
options:[
"Ic-Ib",
"Ic+Ib",
"Ib-Ic",
"Ic/Ib"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The input impedance of a common collector amplifier is:",
options:[
"Low",
"High",
"Zero",
"Infinite"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A common emitter amplifier provides:",
options:[
"Current gain only",
"Voltage gain",
"No gain",
"Power loss"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The propagation delay of a digital gate depends on:",
options:[
"Switching speed of transistor",
"Only voltage",
"Only current",
"Resistance only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Boolean expression A + AB simplifies to:",
options:[
"A",
"AB",
"B",
"A+B"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Boolean expression A(A+B) simplifies to:",
options:[
"A",
"B",
"A+B",
"AB"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The complement of A+A'B is:",
options:[
"A+B",
"A'B",
"A'",
"AB"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A register is used for:",
options:[
"Data storage",
"Power amplification",
"Frequency conversion",
"Filtering"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A counter is a sequential circuit used for:",
options:[
"Counting pulses",
"Amplification",
"Voltage regulation",
"Filtering"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The number of states in MOD-N counter is:",
options:[
"N",
"N+1",
"2N",
"N/2"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A flip-flop stores:",
options:[
"One bit",
"One byte",
"One word",
"Analog value"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The excitation table is associated with:",
options:[
"Flip-flops",
"Resistors",
"Diodes",
"Transformers"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Nyquist rate for a signal of bandwidth 10 kHz is:",
options:[
"5 kHz",
"10 kHz",
"20 kHz",
"40 kHz"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Aliasing occurs when:",
options:[
"Sampling frequency is too low",
"Sampling frequency is very high",
"Signal is DC",
"Noise is zero"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Fourier transform of a time shifted signal introduces:",
options:[
"Phase shift",
"Amplitude increase",
"Frequency change",
"Power increase"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The derivative property is associated with:",
options:[
"Fourier transform",
"Logic gates",
"Transistor biasing",
"Power factor"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The unit of frequency is:",
options:[
"Hertz",
"Volt",
"Ampere",
"Watt"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The unit of inductance is:",
options:[
"Farad",
"Henry",
"Ohm",
"Tesla"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The unit of resistance is:",
options:[
"Volt",
"Ohm",
"Henry",
"Watt"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The average power of a pure inductor in AC circuit is:",
options:[
"Zero",
"Maximum",
"Infinite",
"Negative"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The average power of a pure resistor is:",
options:[
"Zero",
"Positive",
"Negative",
"Undefined"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A transformer works on:",
options:[
"Mutual induction",
"Self induction",
"Resistance",
"Capacitance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"An ideal transformer has:",
options:[
"Power loss",
"No power loss",
"High resistance",
"Zero voltage"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The characteristic impedance of a transmission line depends on:",
options:[
"L and C",
"Only voltage",
"Only current",
"Frequency only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The reflection coefficient of a matched transmission line is:",
options:[
"1",
"0",
"-1",
"Infinity"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"VSWR for a perfectly matched line is:",
options:[
"0",
"1",
"Infinity",
"2"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The antenna gain is related to:",
options:[
"Radiation efficiency and directivity",
"Resistance only",
"Voltage only",
"Current only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The electric field unit is:",
options:[
"Volt/meter",
"Ampere",
"Ohm",
"Watt"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Maxwell equations describe:",
options:[
"Electromagnetic fields",
"Digital circuits",
"Power electronics",
"Control systems"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The skin effect increases with:",
options:[
"Frequency",
"Resistance decrease",
"Temperature only",
"Voltage"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The noise power spectral density is measured in:",
options:[
"W/Hz",
"Volt",
"Ohm",
"Hertz"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},
{
question:"The rank of a matrix is equal to:",
options:[
"Number of rows",
"Number of columns",
"Number of non-zero eigenvalues",
"Number of non-zero rows in echelon form"
],
correctAnswer:3,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The determinant of a triangular matrix is equal to:",
options:[
"Sum of diagonal elements",
"Product of diagonal elements",
"Zero always",
"One always"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The inverse of a matrix exists if:",
options:[
"Determinant is zero",
"Determinant is non-zero",
"Matrix is rectangular",
"Rank is zero"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The eigenvalues of a Hermitian matrix are:",
options:[
"Always zero",
"Always real",
"Always imaginary",
"Always negative"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The trace of a matrix is:",
options:[
"Product of eigenvalues",
"Sum of diagonal elements",
"Determinant",
"Rank"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The convolution theorem is used in:",
options:[
"Signal processing",
"Digital logic only",
"Power electronics only",
"Communication only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Fourier transform of an impulse signal is:",
options:[
"Zero",
"Impulse",
"Constant",
"Sine wave"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A signal is called energy signal when:",
options:[
"Energy is finite",
"Power is finite",
"Energy is infinite",
"Power is zero"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The unit step signal is represented as:",
options:[
"u(t)",
"δ(t)",
"r(t)",
"x(t)"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The derivative of unit step signal is:",
options:[
"Ramp",
"Impulse",
"Constant",
"Sinusoid"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The stability of continuous time system depends on:",
options:[
"Zeros only",
"Poles location",
"Gain only",
"Input signal"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A system is time invariant if:",
options:[
"Output changes with time",
"Delay in input causes same delay in output",
"Gain is zero",
"Input is constant"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Laplace transform region of convergence cannot contain:",
options:[
"Poles",
"Zeros",
"Origin",
"Infinity"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The z-transform is equivalent to:",
options:[
"Fourier transform of continuous signal",
"Laplace transform of discrete signal",
"DFT only",
"Analog modulation"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The sampling theorem was proposed by:",
options:[
"Nyquist",
"Shannon",
"Fourier",
"Laplace"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Aliasing occurs when sampling frequency is:",
options:[
"Greater than Nyquist rate",
"Equal to zero",
"Less than Nyquist rate",
"Infinite"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The frequency response of a system is obtained by putting:",
options:[
"s=0",
"s=jω",
"s=1",
"s=∞"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The impulse response completely characterizes:",
options:[
"Nonlinear system",
"LTI system",
"Random system",
"Digital system"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The transfer function is defined for:",
options:[
"Zero initial conditions",
"Non-zero initial conditions",
"Only unstable systems",
"Only nonlinear systems"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The output of an LTI system is obtained using:",
options:[
"Addition",
"Convolution",
"Division",
"Subtraction"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The current through an inductor depends on:",
options:[
"Voltage derivative",
"Integral of voltage",
"Resistance",
"Frequency only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The voltage across capacitor depends on:",
options:[
"Derivative of current",
"Integral of current",
"Resistance",
"Power"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"In DC steady state capacitor behaves as:",
options:[
"Short circuit",
"Open circuit",
"Resistor",
"Inductor"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"In DC steady state inductor behaves as:",
options:[
"Open circuit",
"Short circuit",
"Capacitor",
"Resistance"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Maximum power transfer occurs when:",
options:[
"RL=0",
"RL=Rth",
"RL=infinite",
"RL=2Rth"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The RMS value of square wave of amplitude A is:",
options:[
"A",
"A/2",
"A/√2",
"2A"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The bandwidth of a signal is measured in:",
options:[
"Volt",
"Hertz",
"Ampere",
"Ohm"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The power factor of inductive load is:",
options:[
"Leading",
"Lagging",
"Unity always",
"Zero always"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A transformer works on:",
options:[
"DC principle",
"Mutual induction",
"Electrostatic effect",
"Hall effect"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The efficiency of ideal transformer is:",
options:[
"50%",
"75%",
"100%",
"0%"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Easy"
},
{
question:"A flip-flop is a:",
options:[
"Combinational circuit",
"Memory element",
"Amplifier",
"Oscillator"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The race around condition occurs in:",
options:[
"SR flip-flop",
"JK flip-flop",
"D flip-flop",
"T flip-flop"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The characteristic equation of JK flip-flop is:",
options:[
"Q(next)=JQ'+K'Q",
"Q(next)=D",
"Q(next)=T⊕Q",
"Q(next)=Q'"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A latch is a:",
options:[
"Edge triggered device",
"Level sensitive device",
"Analog device",
"Power device"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A synchronous counter uses:",
options:[
"Independent clocks",
"Common clock signal",
"No clock",
"Analog input"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The minimum number of flip-flops required for MOD-10 counter is:",
options:[
"2",
"3",
"4",
"10"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A decoder converts:",
options:[
"Analog to digital",
"n inputs to 2ⁿ outputs",
"Digital to analog",
"Serial to parallel"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"An encoder performs:",
options:[
"2ⁿ inputs to n outputs",
"n inputs to 2ⁿ outputs",
"Analog conversion",
"Amplification"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A half adder adds:",
options:[
"Two bits",
"Three bits",
"Four bits",
"Decimal numbers"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A full adder has:",
options:[
"One input",
"Two inputs",
"Three inputs",
"Four inputs"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The universal gates are:",
options:[
"AND and OR",
"NAND and NOR",
"XOR and XNOR",
"NOT and AND"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Karnaugh map is used for:",
options:[
"Signal sampling",
"Logic minimization",
"Amplifier design",
"Frequency analysis"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The output of XOR gate is HIGH when inputs are:",
options:[
"Same",
"Different",
"Both zero",
"Both one"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The propagation delay of a gate is measured in:",
options:[
"Volt",
"Second",
"Hertz",
"Watt"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Fan-out of a logic gate represents:",
options:[
"Output voltage",
"Number of inputs driven",
"Power consumption",
"Delay time"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"BJT is a:",
options:[
"Voltage controlled device",
"Current controlled device",
"Passive device",
"Optical device"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"In a BJT, emitter is heavily doped because:",
options:[
"To reduce current",
"To inject carriers",
"To increase resistance",
"To block voltage"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The input resistance of common emitter amplifier is:",
options:[
"Very low",
"Moderate",
"Infinite",
"Zero"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The phase shift of common emitter amplifier is:",
options:[
"0°",
"90°",
"180°",
"360°"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"MOSFET has:",
options:[
"Three terminals",
"Two terminals",
"Four terminals only",
"One terminal"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The gate current of an ideal MOSFET is:",
options:[
"High",
"Zero",
"Maximum",
"Variable"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"MOSFET operates in saturation region for:",
options:[
"Amplification",
"Cut-off",
"Open circuit",
"Short circuit"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The threshold voltage is associated with:",
options:[
"BJT",
"MOSFET",
"Diode",
"Transformer"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"An ideal op-amp has CMRR:",
options:[
"Zero",
"One",
"Infinite",
"Negative"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The slew rate of op-amp indicates:",
options:[
"Maximum rate of output voltage change",
"Input resistance",
"Gain",
"Bandwidth"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"An integrator circuit uses:",
options:[
"Capacitor in feedback path",
"Inductor only",
"Diode only",
"Transformer"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A differentiator circuit produces output proportional to:",
options:[
"Input signal",
"Derivative of input",
"Integral of input",
"Constant"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The ideal op-amp input current is:",
options:[
"Zero",
"Infinite",
"1A",
"Variable"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The virtual ground concept is used in:",
options:[
"Op-amp circuits",
"Transformers",
"Antennas",
"Oscillators only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A comparator compares:",
options:[
"Two voltages",
"Two currents",
"Two resistances",
"Two frequencies"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"An oscillator converts:",
options:[
"DC power to AC signal",
"AC to DC",
"Heat to electricity",
"Digital to analog"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Barkhausen criterion is related to:",
options:[
"Oscillation",
"Sampling",
"Filtering",
"Modulation"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The condition for oscillation is:",
options:[
"Loop gain = 1",
"Loop gain = 0",
"Gain negative",
"Resistance zero"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"AM modulation changes:",
options:[
"Carrier amplitude",
"Carrier frequency",
"Carrier phase only",
"Resistance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"FM modulation changes:",
options:[
"Amplitude",
"Frequency",
"Power",
"Bandwidth only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Phase modulation changes:",
options:[
"Phase of carrier",
"Amplitude of carrier",
"Frequency only",
"Power"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Superheterodyne receiver uses:",
options:[
"Mixing process",
"Sampling",
"Rectification only",
"Amplification only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The intermediate frequency is used in:",
options:[
"Receiver circuits",
"Power supply",
"Digital counter",
"Oscillator only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Antenna gain is measured in:",
options:[
"Decibel",
"Hertz",
"Ohm",
"Volt"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The radiation resistance of antenna represents:",
options:[
"Radiated power",
"Mechanical loss",
"Temperature",
"Capacitance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The characteristic impedance of transmission line is:",
options:[
"Voltage/current ratio",
"Power/frequency ratio",
"Resistance only",
"Capacitance only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"VSWR value for perfect matching is:",
options:[
"0",
"1",
"∞",
"10"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"Smith chart is used for:",
options:[
"Transmission line analysis",
"Logic design",
"Amplifier biasing",
"Sampling"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Control system open loop does not use:",
options:[
"Feedback",
"Input",
"Output",
"Controller"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The order of a system is determined by:",
options:[
"Number of poles",
"Number of zeros",
"Gain",
"Input"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Root locus shows movement of:",
options:[
"Poles",
"Zeros",
"Input",
"Frequency"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A PID controller contains:",
options:[
"Proportional integral derivative terms",
"Only proportional term",
"Only integral term",
"Only derivative term"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},
{
question:"The gain of an amplifier in decibel is calculated as:",
options:[
"20 log(Vout/Vin)",
"10 log(Vout/Vin)",
"Vout-Vin",
"Vin/Vout"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The bandwidth of an amplifier is the range between:",
options:[
"Maximum and minimum frequencies",
"Input and output voltage",
"Power and current",
"Resistance and capacitance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The lower cutoff frequency of an amplifier is caused by:",
options:[
"Coupling and bypass capacitors",
"Transistors only",
"Power supply",
"Resistors only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The upper cutoff frequency is mainly affected by:",
options:[
"Parasitic capacitance",
"Resistance only",
"Inductance only",
"DC supply"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The biasing of transistor is done to:",
options:[
"Set proper operating point",
"Increase noise",
"Reduce frequency",
"Stop amplification"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The operating point of transistor is called:",
options:[
"Q-point",
"P-point",
"R-point",
"S-point"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The maximum efficiency of class A amplifier is:",
options:[
"25%",
"50%",
"78.5%",
"100%"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The maximum efficiency of class B amplifier is:",
options:[
"25%",
"50%",
"78.5%",
"90%"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"Crossover distortion occurs in:",
options:[
"Class B amplifier",
"Class A amplifier",
"Transformer",
"Oscillator"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A differential amplifier amplifies:",
options:[
"Difference between two inputs",
"Sum of inputs",
"Only DC",
"Only noise"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"CMRR is defined as:",
options:[
"Ad/Ac",
"Ac/Ad",
"Ad+Ac",
"Ad-Ac"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"An ideal differential amplifier rejects:",
options:[
"Common mode signal",
"Differential signal",
"Input signal",
"Output signal"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The depletion region in diode contains:",
options:[
"Fixed ions",
"Free electrons only",
"Holes only",
"Neutral atoms only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A diode breakdown occurs due to:",
options:[
"High reverse voltage",
"Forward voltage",
"Low current",
"Low temperature"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Zener diode operates in:",
options:[
"Reverse breakdown region",
"Forward region only",
"Cutoff region",
"Active region"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The capacitance of a PN junction depends on:",
options:[
"Reverse bias voltage",
"Forward current only",
"Power supply",
"Temperature only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A photodiode is normally operated in:",
options:[
"Reverse bias",
"Forward bias",
"Zero bias only",
"Breakdown always"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"An LED works based on:",
options:[
"Electroluminescence",
"Photoelectric effect",
"Thermal effect",
"Magnetic effect"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The intrinsic semiconductor has:",
options:[
"Equal electrons and holes",
"Only electrons",
"Only holes",
"No carriers"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The conductivity of semiconductor increases with:",
options:[
"Temperature increase",
"Temperature decrease",
"Resistance increase",
"Voltage decrease"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A semiconductor with pentavalent impurity is:",
options:[
"N-type",
"P-type",
"Intrinsic",
"Insulator"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A semiconductor with trivalent impurity is:",
options:[
"P-type",
"N-type",
"Metal",
"Insulator"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Majority carriers in N-type semiconductor are:",
options:[
"Electrons",
"Holes",
"Ions",
"Photons"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Majority carriers in P-type semiconductor are:",
options:[
"Holes",
"Electrons",
"Neutrons",
"Ions"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Hall effect is used to measure:",
options:[
"Carrier concentration",
"Resistance only",
"Temperature",
"Power"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The mobility of charge carriers depends on:",
options:[
"Material properties",
"Voltage only",
"Current only",
"Power only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The drift current in semiconductor is due to:",
options:[
"Electric field",
"Magnetic field only",
"Temperature only",
"Pressure"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Diffusion current is caused by:",
options:[
"Carrier concentration gradient",
"Electric field only",
"Resistance",
"Power supply"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The ideal diode has forward resistance:",
options:[
"Zero",
"Infinite",
"High",
"Variable"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The ideal diode has reverse resistance:",
options:[
"Infinite",
"Zero",
"One ohm",
"Low"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Boolean algebra was developed by:",
options:[
"George Boole",
"Newton",
"Einstein",
"Shannon"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"De Morgan's first theorem states:",
options:[
"(A+B)'=A'B'",
"(AB)'=AB",
"A+B=AB",
"A'=A"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A binary number system has base:",
options:[
"2",
"8",
"10",
"16"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Hexadecimal number system has base:",
options:[
"16",
"2",
"8",
"10"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The 2's complement is used for:",
options:[
"Negative number representation",
"Multiplication only",
"Division only",
"Logic gates"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A register that shifts data is called:",
options:[
"Shift register",
"Counter",
"Decoder",
"Encoder"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"SISO stands for:",
options:[
"Serial In Serial Out",
"Single Input Single Output",
"Serial Input System Output",
"None"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"RAM is a:",
options:[
"Volatile memory",
"Permanent memory",
"Mechanical memory",
"Analog memory"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"ROM is:",
options:[
"Non-volatile memory",
"Volatile memory",
"Temporary memory",
"Dynamic memory"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The speed of digital circuit is measured by:",
options:[
"Propagation delay",
"Resistance",
"Capacitance",
"Power"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The noise margin indicates:",
options:[
"Noise immunity",
"Power consumption",
"Speed",
"Frequency"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"TTL logic family uses:",
options:[
"BJT",
"MOSFET only",
"Vacuum tube",
"Diode only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"CMOS technology uses:",
options:[
"MOS transistors",
"BJT only",
"Transformers",
"Relays"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The power consumption of CMOS is:",
options:[
"Low",
"Very high",
"Zero always",
"Maximum"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},
{
question:"Kirchhoff's Voltage Law is based on conservation of:",
options:[
"Charge",
"Energy",
"Mass",
"Momentum"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The equivalent resistance of resistors connected in series is:",
options:[
"Product of resistances",
"Sum of resistances",
"Reciprocal sum",
"Always zero"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The equivalent resistance of parallel resistors is:",
options:[
"Greater than maximum resistance",
"Less than smallest resistance",
"Equal to largest resistance",
"Always infinite"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Superposition theorem is applicable to:",
options:[
"Linear circuits",
"Nonlinear circuits",
"Only digital circuits",
"Magnetic circuits"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Thevenin theorem replaces a network by:",
options:[
"Voltage source and series resistance",
"Current source and parallel resistance",
"Only voltage source",
"Only resistance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Norton equivalent circuit consists of:",
options:[
"Current source and parallel resistance",
"Voltage source and series resistance",
"Only current source",
"Only resistance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The impedance of resistor is:",
options:[
"R",
"jωL",
"1/jωC",
"ωL"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The impedance of capacitor decreases with:",
options:[
"Increase in frequency",
"Decrease in frequency",
"Increase in resistance",
"Zero voltage"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The impedance of inductor increases with:",
options:[
"Increase in frequency",
"Decrease in frequency",
"Zero frequency",
"Resistance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"At resonance in series RLC circuit:",
options:[
"XL = XC",
"XL > XC",
"XL < XC",
"R = 0"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The resonant frequency of RLC circuit depends on:",
options:[
"L and C",
"Only R",
"Only voltage",
"Only current"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Quality factor of resonant circuit indicates:",
options:[
"Selectivity",
"Power supply",
"Resistance only",
"Voltage only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A bilateral network behaves same in:",
options:[
"Both directions",
"One direction only",
"DC only",
"AC only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A unilateral element is:",
options:[
"Diode",
"Resistor",
"Inductor",
"Capacitor"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A passive network cannot:",
options:[
"Generate power",
"Store energy",
"Dissipate energy",
"Transmit signal"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A capacitor stores energy in:",
options:[
"Electric field",
"Magnetic field",
"Heat",
"Mechanical form"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"An inductor stores energy in:",
options:[
"Magnetic field",
"Electric field",
"Heat",
"Radiation"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The unit of inductance is:",
options:[
"Henry",
"Farad",
"Ohm",
"Tesla"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The unit of magnetic flux is:",
options:[
"Weber",
"Tesla",
"Henry",
"Volt"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The impedance matching is done for:",
options:[
"Maximum power transfer",
"Minimum voltage",
"Maximum resistance",
"Zero current"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A causal system depends on:",
options:[
"Present and past inputs",
"Future inputs",
"Future output",
"Random values"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A memoryless system depends on:",
options:[
"Present input only",
"Past input",
"Future input",
"All inputs"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A linear system satisfies:",
options:[
"Additivity and homogeneity",
"Only multiplication",
"Only division",
"Randomness"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Fourier series is used for:",
options:[
"Periodic signals",
"Only random signals",
"DC circuits",
"Logic circuits"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Fourier transform exists for:",
options:[
"Aperiodic signals",
"Only periodic signals",
"Digital circuits only",
"Power supplies"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Laplace transform variable is:",
options:[
"s",
"jω only",
"t",
"n"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Fourier transform variable is:",
options:[
"ω",
"s",
"t",
"n"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Time shifting property of Fourier transform involves:",
options:[
"Phase shift",
"Amplitude increase",
"Frequency change",
"Power change"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"Differentiation in time domain corresponds to:",
options:[
"Multiplication by jω",
"Division by jω",
"Addition",
"Subtraction"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The ROC of Laplace transform determines:",
options:[
"Stability and causality",
"Gain",
"Bandwidth",
"Power"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The sampling frequency is measured in:",
options:[
"Hertz",
"Volt",
"Ampere",
"Ohm"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"Quantization occurs in:",
options:[
"ADC",
"DAC",
"Amplifier",
"Oscillator"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"DAC converts:",
options:[
"Digital to analog",
"Analog to digital",
"Frequency to voltage",
"Power to signal"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The resolution of ADC depends on:",
options:[
"Number of bits",
"Resistance",
"Frequency only",
"Power only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A 4-bit ADC has number of levels:",
options:[
"8",
"16",
"32",
"4"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The quantization error is reduced by:",
options:[
"Increasing number of bits",
"Reducing sampling rate",
"Reducing voltage",
"Adding resistance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"AM receiver detects:",
options:[
"Envelope of signal",
"Frequency only",
"Phase only",
"Resistance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The modulation index of FM can be:",
options:[
"Greater than 1",
"Always zero",
"Only one",
"Negative"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"Carson's rule is used to calculate:",
options:[
"FM bandwidth",
"AM power",
"Noise",
"Gain"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The SNR represents:",
options:[
"Signal quality",
"Resistance",
"Frequency",
"Voltage gain"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"White noise has:",
options:[
"Constant power spectral density",
"Zero power",
"Only low frequency",
"Only high frequency"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"Control system feedback generally improves:",
options:[
"Accuracy",
"Noise always",
"Power consumption",
"Complexity only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Negative feedback reduces:",
options:[
"Gain",
"Bandwidth",
"Stability",
"Accuracy"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The steady state error is reduced by:",
options:[
"Integral controller",
"Derivative controller",
"Gain reduction",
"Removing feedback"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"Derivative control improves:",
options:[
"Damping",
"Steady state error",
"Gain only",
"Noise"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The unit step response is used to study:",
options:[
"System behavior",
"Only frequency",
"Noise",
"Power"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},
{
question:"The maximum power transfer theorem states that maximum power is transferred when:",
options:[
"Load resistance is zero",
"Load resistance equals source resistance",
"Load resistance is infinite",
"Source resistance is zero"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The current through an ideal voltage source is:",
options:[
"Always zero",
"Always infinite",
"Depends on circuit",
"Always constant"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The bandwidth of a resonant circuit increases when:",
options:[
"Quality factor increases",
"Quality factor decreases",
"Resistance increases always",
"Inductance becomes zero"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The input impedance of an ideal current source is:",
options:[
"Zero",
"Infinite",
"One",
"Negative"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"In a PN junction diode, depletion region contains:",
options:[
"Only electrons",
"Only holes",
"Immobile ions",
"Free carriers"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The intrinsic semiconductor at absolute zero temperature behaves as:",
options:[
"Conductor",
"Insulator",
"Superconductor",
"Resistor"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The mobility of charge carriers decreases with increase in:",
options:[
"Electric field",
"Temperature",
"Doping concentration",
"Voltage"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The collector current in a transistor is mainly controlled by:",
options:[
"Base current",
"Collector voltage only",
"Emitter resistance",
"Temperature only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"For a transistor operating in cutoff region:",
options:[
"Both junctions forward biased",
"Both junctions reverse biased",
"Emitter junction forward biased",
"Collector junction forward biased"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Early effect in BJT causes variation in:",
options:[
"Base width",
"Collector current",
"Emitter current",
"Voltage gain only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The threshold voltage of MOSFET depends on:",
options:[
"Gate oxide thickness",
"Channel length only",
"Drain current only",
"Frequency only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A CMOS inverter ideally consumes power mainly during:",
options:[
"Logic steady state",
"Switching transition",
"Input low state",
"Input high state"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The propagation delay of a digital circuit is measured between:",
options:[
"Two inputs",
"Input transition and output transition",
"Two outputs",
"Clock signals only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Boolean expression A.A' is equal to:",
options:[
"A",
"A'",
"0",
"1"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The number of states in a 4-bit binary counter is:",
options:[
"4",
"8",
"16",
"32"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The race condition occurs in JK flip-flop when:",
options:[
"J=0,K=0",
"J=1,K=1",
"Clock is absent",
"Output is zero"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The minimum number of bits required to represent decimal number 255 is:",
options:[
"4",
"6",
"8",
"16"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The difference between analog and digital signals is mainly based on:",
options:[
"Frequency",
"Continuity",
"Amplitude only",
"Power"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The Fourier series is applicable for:",
options:[
"Periodic signals",
"Only random signals",
"Only DC signals",
"Non periodic signals only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The impulse response of an LTI system completely characterizes:",
options:[
"Only nonlinear systems",
"Only unstable systems",
"The system behavior",
"Input signal"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Hard"
},
{
question:"The Thevenin voltage is equal to:",
options:[
"Open circuit voltage",
"Short circuit current",
"Load voltage",
"Source resistance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Norton equivalent circuit consists of:",
options:[
"Voltage source and resistance",
"Current source and resistance",
"Only resistance",
"Only current source"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Superposition theorem is applicable only to:",
options:[
"Linear circuits",
"Nonlinear circuits",
"Digital circuits only",
"Magnetic circuits only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The impedance of a capacitor decreases when:",
options:[
"Frequency increases",
"Frequency decreases",
"Resistance increases",
"Voltage increases"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The power factor of an inductive circuit is:",
options:[
"Leading",
"Lagging",
"Unity always",
"Zero always"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The maximum efficiency of a transformer occurs when:",
options:[
"Copper loss equals iron loss",
"Copper loss is zero",
"Iron loss is zero",
"Voltage is maximum"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"In a series RLC circuit, resonance occurs when:",
options:[
"XL > XC",
"XL < XC",
"XL = XC",
"R = 0"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Laplace transform converts differential equations into:",
options:[
"Algebraic equations",
"Trigonometric equations",
"Boolean equations",
"Matrix equations"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The final value theorem is applicable when:",
options:[
"System is unstable",
"All poles are in left half plane except possible pole at origin",
"All poles are on right half plane",
"Input is sinusoidal only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The impulse response of an ideal integrator is:",
options:[
"Step function",
"Impulse function",
"Ramp function",
"Constant"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A system is time invariant if:",
options:[
"Output changes with time shift",
"Input shift causes same output shift",
"Output is always zero",
"Input is constant"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The ROC of a right-sided signal in z-transform is:",
options:[
"Inside innermost pole",
"Outside outermost pole",
"Entire z-plane",
"Only origin"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The sampling theorem prevents:",
options:[
"Amplification",
"Aliasing",
"Modulation",
"Filtering"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"An anti-aliasing filter is generally:",
options:[
"High pass filter",
"Low pass filter",
"Band stop filter",
"Notch filter"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The DFT converts:",
options:[
"Continuous time signal to analog",
"Discrete time signal into frequency samples",
"Digital signal into continuous signal",
"Frequency into time only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The FFT algorithm reduces the computation of DFT from:",
options:[
"O(N²) to O(NlogN)",
"O(N) to O(N²)",
"O(logN) to O(N)",
"O(N³) to O(N²)"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The bandwidth of a signal is measured in:",
options:[
"Volt",
"Hertz",
"Watt",
"Joule"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"In AM modulation, the carrier frequency is:",
options:[
"Always zero",
"Much higher than message frequency",
"Equal to message frequency",
"Lower than message frequency"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The FM modulation index is defined as:",
options:[
"Carrier frequency/message frequency",
"Frequency deviation/message frequency",
"Amplitude ratio",
"Power ratio"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The antenna gain represents:",
options:[
"Power handling capacity",
"Directivity and efficiency",
"Resistance",
"Frequency stability"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},
{
question:"The intrinsic carrier concentration of semiconductor increases with:",
options:[
"Decrease in temperature",
"Increase in temperature",
"Decrease in doping",
"Decrease in voltage"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The conductivity of a semiconductor depends on:",
options:[
"Carrier concentration and mobility",
"Only voltage",
"Only resistance",
"Only temperature"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The majority carriers in an N-type semiconductor are:",
options:[
"Holes",
"Electrons",
"Protons",
"Ions"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The majority carriers in a P-type semiconductor are:",
options:[
"Electrons",
"Holes",
"Neutrons",
"Atoms"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A photodiode normally operates in:",
options:[
"Forward bias",
"Reverse bias",
"Zero bias only",
"Breakdown region"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The main advantage of MOSFET over BJT is:",
options:[
"Low input impedance",
"High input impedance",
"High power loss",
"Low switching speed"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"CMOS technology mainly uses:",
options:[
"BJT only",
"NMOS and PMOS",
"JFET only",
"Diodes only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The drain current in MOSFET is controlled by:",
options:[
"Gate voltage",
"Source resistance",
"Drain resistance",
"Temperature only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The region of MOSFET operation used for amplification is:",
options:[
"Cutoff region",
"Triode region",
"Saturation region",
"Breakdown region"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The fan-out of a logic gate indicates:",
options:[
"Number of inputs driven by output",
"Power consumption",
"Propagation delay",
"Voltage level"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The noise margin of a digital circuit indicates:",
options:[
"Noise immunity",
"Speed only",
"Power only",
"Frequency only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A decoder converts:",
options:[
"Many inputs to one output",
"Binary input to one active output",
"Analog signal to digital",
"Digital to analog"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"An encoder converts:",
options:[
"One input to many outputs",
"Active input into coded output",
"Analog to digital",
"Frequency to voltage"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The race around condition can be avoided by using:",
options:[
"Master-slave flip flop",
"AND gate",
"Decoder",
"Multiplexer"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The setup time of a flip-flop is the time required:",
options:[
"After clock edge",
"Before clock edge",
"During reset only",
"After power off"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The hold time of a flip-flop is the time required:",
options:[
"Input remains stable after clock edge",
"Input changes before clock",
"Clock remains high",
"Power supply remains constant"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The minimum number of flip-flops required for MOD-10 counter is:",
options:[
"2",
"3",
"4",
"10"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The purpose of a PLL in communication systems is:",
options:[
"Frequency synchronization",
"Power amplification",
"Signal filtering only",
"Voltage regulation"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The bandwidth of an FM signal is calculated using:",
options:[
"Nyquist theorem",
"Carson's rule",
"Ohm's law",
"Kirchhoff law"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The signal-to-noise ratio is defined as:",
options:[
"Noise power / Signal power",
"Signal power / Noise power",
"Voltage / Current",
"Power / Resistance"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},
{
question:"The impedance of a resistor in AC circuit is:",
options:[
"R",
"jωL",
"1/jωC",
"Zero"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The phase difference between voltage and current in a pure capacitor is:",
options:[
"0°",
"45°",
"90° leading",
"90° lagging"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The phase difference between voltage and current in a pure inductor is:",
options:[
"90° leading",
"90° lagging",
"0°",
"180°"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The impedance of a parallel circuit is always:",
options:[
"Greater than individual impedance",
"Less than individual impedance",
"Equal to resistance always",
"Infinite"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Kirchhoff's Voltage Law is based on conservation of:",
options:[
"Charge",
"Energy",
"Mass",
"Current"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The reciprocity theorem is valid for:",
options:[
"Linear bilateral networks",
"Nonlinear networks",
"Only active devices",
"Digital circuits"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The bandwidth of a bandpass filter is:",
options:[
"fH - fL",
"fH + fL",
"fH/fL",
"fL - fH always"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The quality factor of a resonant circuit is:",
options:[
"Bandwidth/Frequency",
"Resonant frequency/Bandwidth",
"Resistance/Inductance",
"Power/Voltage"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The output voltage of an ideal op-amp is limited by:",
options:[
"Input resistance",
"Power supply voltage",
"Feedback resistor",
"Frequency"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A differential amplifier amplifies:",
options:[
"Common signals",
"Difference between inputs",
"Only DC signals",
"Noise only"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"CMRR of an ideal differential amplifier is:",
options:[
"Zero",
"One",
"Infinite",
"Negative"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The slew rate of an op-amp limits:",
options:[
"Maximum rate of output voltage change",
"Input resistance",
"DC gain",
"Power supply"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The bandwidth of an ideal op-amp is:",
options:[
"Zero",
"Finite",
"Infinite",
"1 Hz"
],
correctAnswer:2,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"A comparator is used for:",
options:[
"Comparison of two voltages",
"Amplification only",
"Filtering",
"Oscillation"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"An oscillator requires:",
options:[
"Positive feedback",
"Negative feedback only",
"No feedback",
"Only resistor"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"Barkhausen criterion requires loop gain:",
options:[
"Zero",
"One with phase shift 0°",
"Infinite",
"Negative"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The Nyquist plot is used to analyze:",
options:[
"Stability of control systems",
"Power loss",
"Resistance",
"Capacitance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The steady state error in a type-1 system for step input is:",
options:[
"Zero",
"Finite",
"Infinite",
"Undefined"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The damping ratio of a critically damped system is:",
options:[
"0",
"1",
"Greater than 1",
"Negative"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The natural frequency of a second order system determines:",
options:[
"Speed of response",
"Input signal",
"Output power",
"Noise level"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},
{
question:"The open loop transfer function of a system does not include:",
options:[
"Feedback path",
"Forward path",
"Controller",
"Plant"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The root locus shows the variation of:",
options:[
"System poles with gain",
"Frequency with time",
"Voltage with current",
"Input with output"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A system with all poles in left half of s-plane is:",
options:[
"Unstable",
"Stable",
"Marginally stable",
"Non-causal"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The phase margin indicates:",
options:[
"Relative stability",
"Power consumption",
"Bandwidth only",
"Gain only"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The gain crossover frequency is the frequency where:",
options:[
"Phase becomes zero",
"Gain magnitude becomes unity",
"Output becomes zero",
"Input becomes maximum"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A lead compensator improves:",
options:[
"Transient response",
"Steady state error only",
"Noise only",
"Power factor"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"A lag compensator improves:",
options:[
"Steady state accuracy",
"Bandwidth only",
"Rise time only",
"Oscillation"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The Laplace transform of derivative of x(t) is:",
options:[
"sX(s)-x(0)",
"X(s)/s",
"sX(s)",
"X(s)+s"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The Fourier transform of an impulse signal is:",
options:[
"Zero",
"Unity",
"Impulse",
"Infinity"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The convolution property of Fourier transform converts convolution into:",
options:[
"Multiplication",
"Division",
"Addition",
"Differentiation"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The energy signal has:",
options:[
"Finite energy",
"Infinite energy",
"Zero power",
"Infinite frequency"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The power signal has:",
options:[
"Finite energy",
"Finite average power",
"Zero power",
"Only DC component"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The autocorrelation function of a signal is maximum at:",
options:[
"Zero lag",
"Infinite lag",
"Negative lag",
"Random lag"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The PSD of a signal is related to:",
options:[
"Autocorrelation",
"Voltage gain",
"Resistance",
"Capacitance"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The probability density function describes:",
options:[
"Random variable distribution",
"Frequency response",
"Power loss",
"Voltage variation"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"The mean value of a zero mean random variable is:",
options:[
"1",
"0",
"Infinity",
"Undefined"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Easy"
},

{
question:"The variance of a random variable represents:",
options:[
"Average value",
"Spread around mean",
"Frequency",
"Power factor"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Medium"
},

{
question:"A stationary random process has statistical properties:",
options:[
"Changing with time",
"Independent of time",
"Always zero",
"Always periodic"
],
correctAnswer:1,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The matched filter is used for:",
options:[
"Maximum SNR detection",
"Frequency generation",
"Power amplification",
"Voltage regulation"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
},

{
question:"The Shannon channel capacity depends on:",
options:[
"Bandwidth and SNR",
"Only resistance",
"Only frequency",
"Only voltage"
],
correctAnswer:0,
category:"GATE ECE",
difficulty:"Hard"
}

];

const seed = async () => {
  try {
    await connectDB();

    console.log("📚 Daily Quiz Question Count:", questions.length);

    // ==========================================
    // CLEAR ONLY DAILY QUIZ QUESTIONS
    // ==========================================
    await DailyQuestion.deleteMany({});

    console.log("🗑️ Old Daily Quiz questions deleted");

    // ==========================================
    // CLEAN QUESTIONS
    // ==========================================
    const cleanQuestions = questions.map((q) => ({
      question: q.question,
      options: q.options,
      correctAnswer: Number(q.correctAnswer),
      category: q.category || "General Knowledge",
      difficulty: q.difficulty || "Medium",
    }));

    // ==========================================
    // INSERT ONLY INTO DAILY QUESTION COLLECTION
    // ==========================================
    await DailyQuestion.insertMany(cleanQuestions);

    console.log(
      `✅ ${cleanQuestions.length} Daily Quiz questions inserted successfully`
    );

    console.log(
      "🎯 Daily Quiz questions are completely separate from courses."
    );

    console.log(
      "🔄 No-repeat cycle will be handled by Daily Quiz API."
    );

    await mongoose.connection.close();

    console.log("🔌 MongoDB connection closed");
  } catch (err) {
    console.error("❌ Daily Quiz seed error:", err);

    await mongoose.connection.close();
  }
};

seed();