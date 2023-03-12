/**
 * Determine if item is able to be afforded for purchase.
 * @param {String} _itemName - Name of item being purchased
 * @param {Number} _balance - Bank balance
 * @param {Number} _itemPrice - Cost of item being purchased
 */
function makePurchase(_itemName, _balance, _itemPrice) {
    let itemName = _itemName;
    let balance = _balance;
    let itemPrice = _itemPrice;

    if (itemPrice <= balance) {
        let newBalance = balance - itemPrice;
        console.log("Purchasing " + itemName + " for $" + itemPrice + ".");
        console.log("New balance is $" + newBalance);
    } else {
        let difference = itemPrice - balance;
        console.log("You are broke and cannot afford this item. You need an additional $" + Math.abs(difference) + " to buy it!");
    }
}

makePurchase("jeans", 100, 50.99);
makePurchase("Halo", 100, 59.99);
makePurchase("house", 50000, 200000);
makePurchase("computer", 10000, 500);
makePurchase("car", 1000, 19999.99);
makePurchase("shirt", 100, 49.99);
makePurchase("eggs", 100, 9.99);
makePurchase("fridge", 1000, 499.99);
makePurchase("sushi", 100, 15.99);
makePurchase("burrito", 100, 10.99);