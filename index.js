// JavaScript functions for ChatBot, Disease Prediction, and BMI Calculator

function startChat() {
    alert("Starting the AI-powered Health Assistant Chatbot...");
    // Integration with chatbot API or logic goes here
}

function predictDisease() {
    alert("Disease prediction process started...");
    // Integration with disease prediction logic goes here
}

function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid values.");
        return;
    }

    height = height / 100; // Convert height to meters
    let bmi = weight / (height * height);
    let resultText = `Your BMI is ${bmi.toFixed(2)}.`;

    // Interpret BMI result
    if (bmi < 18.5) {
        resultText += " You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText += " You have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText += " You are overweight.";
    } else {
        resultText += " You are obese.";
    }

    document.getElementById('bmi-result').innerText = resultText;
}
