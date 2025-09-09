function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(amount)) {
        resultDiv.innerText = "Please enter a valid amount";
        return;
    }

    // Hardcoded exchange rates (example values)
    const exchangeRates = {
        USD: { USD: 1, EUR: 0.92, GBP: 0.81, INR: 83.33 },
        EUR: { USD: 1.09, EUR: 1, GBP: 0.88, INR: 90.50 },
        GBP: { USD: 1.23, EUR: 1.14, GBP: 1, INR: 102.80 },
        INR: { USD: 0.012, EUR: 0.011, GBP: 0.0097, INR: 1 }
    };

    const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);

    resultDiv.innerText = `${convertedAmount} ${toCurrency}`;
}
