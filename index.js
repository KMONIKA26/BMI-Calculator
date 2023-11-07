document.getElementById('calculate').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height)) {
      document.getElementById('result').textContent = 'Please enter valid weight and height';
      return;
    }
  
    const bmi = weight / (height * height);
    let resultText = 'Your BMI is ' + bmi.toFixed(1) + ' which means ';
  
    if (bmi <= 18.4) {
      resultText += 'You are Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      resultText += 'You have a Normal Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      resultText += 'You are Overweight';
    } else {
      resultText += 'You are Obese';
    }
  
    document.getElementById('result').textContent = resultText;
  });
  