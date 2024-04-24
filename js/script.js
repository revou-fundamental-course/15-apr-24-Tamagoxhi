const temperatureForm = document.getElementById('temperatureForm');
const resultDiv = document.getElementById('result');
const inputTable = document.getElementById('inputTable');
const calculationTable = document.getElementById('calculationTable');
const resultTable = document.getElementById('resultTable');

function convertTemperature(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return {
        celsius: celsius,
        fahrenheit: fahrenheit
    };
}

function displayResult(result) {
    const inputRow = `<tr><td>${result.celsius}</td></tr>`;
    inputTable.innerHTML += inputRow;

    const calculationRow = `<tr><td>${result.celsius}</td><td>${result.fahrenheit}</td></tr>`;
    calculationTable.innerHTML += calculationRow;

    const resultRow = `<tr><td>${result.fahrenheit}</td></tr>`;
    resultTable.innerHTML += resultRow;
}

temperatureForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const celsiusInput = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsiusInput) || celsiusInput < 0) {
        resultDiv.innerHTML = '<p>Input harus berupa angka positif.</p>';
    } else {
        const temperatureResult = convertTemperature(celsiusInput);
        displayResult(temperatureResult);
        resultDiv.innerHTML = ''; // Hapus pesan error jika ada
    }
});
