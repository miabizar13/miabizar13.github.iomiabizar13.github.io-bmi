document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert to meters

    // Calculate BMI
    const bmi = weight / (height * height);
    
    // Determine the BMI status
    let status;
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Berat badan ideal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Obesitas';
    }

    // Display the result
    document.getElementById('bmi-value').textContent = `BMI Anda: ${bmi.toFixed(1)}`;
    document.getElementById('bmi-status').textContent = `Status: ${status}`;
    document.getElementById('result').style.display = 'block';
});
