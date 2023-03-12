// Shopping list
let bread = 10.00;
let milk = 10.00;
let cheese = 10.00;
let soap = 10.00;
let soda = 20.00;
let meat = 18.50;

// Multiples
let coupon = 0.25;
let taxRate = 0.0775;

// Calculations
let sum = bread + milk + cheese + soap + soda + meat;
let priceAfterDiscount = sum * (1-coupon);
let taxes = priceAfterDiscount * taxRate;
let finalPrice = priceAfterDiscount + taxes;

// Print
console.log("Subtotal: $" + sum.toFixed(2));
console.log("Discounted Price: $" + priceAfterDiscount.toFixed(2));
console.log("Taxes: $" + taxes.toFixed(2));
console.log("Grand Total: $" + finalPrice.toFixed(2));