//variables
let amount = prompt("How much?");
let fcurrency = prompt("From currency:").toUpperCase();
let tcurrency = prompt("To currency").toUpperCase();
//exchange dictionary
const exchangeRate = {
        USD: 23208,
        AUD: 15964,
        CAD: 16915,
        CHF: 24399,
        EUR: 25950,
        GBP: 28600,
        JPY: 213.45,
        SGD: 16455,
        VND: 1
    }
    //always change to VND
function exchange(amount, fcurrency, tcurrency) {
    amountVnd = amount * exchangeRate[fcurrency];
    return Math.round(((amountVnd / exchangeRate[tcurrency]) + Number.EPSILON) * 100) / 100;
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}
//operation
if (isNaN(parseInt(amount)) === true) {
    console.log("Error: number only");
} else {
    result = exchange(amount, fcurrency, tcurrency);
    console.log(
        "Exchange", (formatCurrency(fcurrency, amount)), "to", (formatCurrency(tcurrency, result)),
    );
};