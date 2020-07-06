//variables
const exchangeRate = 23208;
let amount = prompt("How much?");
let fcurrency = prompt("From currency:");
let tcurrency = prompt("To currency");

//functions
function exchange(amount) {
    if (fcurrency === 'VND') {
        result = Math.round((amount / exchangeRate + Number.EPSILON) * 100) / 100;
        return result
    }
    result = amount * exchangeRate;
    return result
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
    const result = exchange(amount);
    console.log(
        "Exchange from", fcurrency, result
    )
};
console.log(formatCurrency(tcurrency, result));