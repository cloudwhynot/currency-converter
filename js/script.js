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