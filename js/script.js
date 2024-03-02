let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

currencyCodes.forEach((currency) => {
    [fromDropDown, toDropDown].forEach((dropdown) => {
        const option = document.createElement("option");
        option.value = currency;
        option.text = currency;
        dropdown.add(option);
    });
});

fromDropDown.value = "USD";
toDropDown.value = "UAH";

let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if(amount) {
        fetch(api)
        .then(resp => resp.json())
        .then(data => {
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        });
    } else {
        alert("Please enter the amount");
    }
};

document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);