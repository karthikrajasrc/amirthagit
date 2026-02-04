const promptSync = require("prompt-sync")(); 

const printname = (price: number, quantity: number, taxRate: number): number | string => {
    if (price <= 0 || quantity <= 0 || taxRate <= 0) {
        return "Enter a correct inputs!!";
    } else {
        let totalPrice = (price * quantity) + (price * quantity * taxRate) / 100;
        return totalPrice;
    }
}

const price = Number(promptSync("Enter the price of the item: "));
const quantity = Number(promptSync("Enter the Quantity's: "));
const taxRate = Number(promptSync("Enter the tax rate in % : "));

console.log(printname(price, quantity, taxRate));
 