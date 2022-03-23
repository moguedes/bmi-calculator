const calculate = document.getElementById("calculate");

function bmi() {
  const userName = document.getElementById("userName").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (userName !== "" && height !== "" && weight !== "") {
    const bmiValue = (weight / (height * height)).toFixed(1);

    let classification = "";

    if (bmiValue < 18.5) {
      classification = "underweight.";
    } else if (bmiValue < 25) {
      classification = "healthy weight. Well done!";
    } else if (bmiValue < 30) {
      classification = "overweight.";
    } else if (bmiValue < 35) {
      classification = "obese.";
    } else if (bmiValue < 40) {
      classification = "extremely obese.";
    } else {
      classification = "extremely obese.";
    }
    result.textContent = `${userName} your BMI is ${bmiValue}. You are ${classification}`;
  } else {
    result.textContent = "Please fill in all required fields!";
  }
}

calculate.addEventListener("click", bmi);
