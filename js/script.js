const temperatureForm = document.getElementById('temperatureForm');
const resultDiv = document.getElementById('result');

temperatureForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const celsiusInput = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsiusInput)) {
        resultDiv.innerHTML = '<p>Input harus berupa angka.</p>';
    } else {
        const fahrenheit = (celsiusInput * 9/5) + 32;
        const resultText = `Suhu dalam derajat Celsius: ${celsiusInput}<br>Suhu dalam derajat Fahrenheit: ${fahrenheit}`;
        resultDiv.innerHTML = resultText;
    }
});