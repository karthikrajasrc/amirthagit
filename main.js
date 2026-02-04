var promptSync = require("prompt-sync")();
var printname = function (price, quantity, taxRate) {
    if (price <= 0 || quantity <= 0 || taxRate <= 0) {
        return "Enter a correct inputs!!";
    }
    else {
        var totalPrice = (price * quantity) + (price * quantity * taxRate) / 100;
        return totalPrice;
    }
};
var price = Number(promptSync("Enter the price of the item: "));
var quantity = Number(promptSync("Enter the Quantity's: "));
var taxRate = Number(promptSync("Enter the tax rate in % : "));
console.log(printname(price, quantity, taxRate));
