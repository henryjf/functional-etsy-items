// Show me how to calculate the average price of all items.
// The average price is $23.63

var allPrices = items.map( function (item) {
  return item.price;
});
// console.log(allPrices);

function addUpItemPrices (prev, current) {
  return prev + current;
}
// console.log(prev + current);
var priceSum = allPrices.reduce(addUpItemPrices);
// console.log(priceSum);
var avg = priceSum/items.length;
var final =(avg).toFixed(2);

var answer1= "The average price is $" + final;

var answer1Area = document.querySelector('#answer1');

answer1Area.innerHTML = answer1;



// 2
// Show me how to get an array of items that cost between $14.00 and $18.00 USD

// Use an array filter to get products costing between 14.00 and 18.00
var priceSearch = items.filter(function(item) {
if  (item.price > 14 && item.price < 18) {
  return item.price
}
});
console.log(priceSearch);

// Use forEach to identify each title from individual product
priceSearch.forEach(function(singleProduct){
  console.log(singleProduct.title);
})

// var answer2 = title3
var answer2Area = document.querySelector('#answer2')

answer2Area.innerHTML = answer2;


// 3
// Which item has a "GBP" currency code? Display it's name and price.

var currency = items.filter(function(item){
  if (item.currency_code === "GBP");
  return item.currency_code
})

console.log(currency);
// 4
// Display a list of all items who are made of wood.


// 5
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.




// 6
// How many items were made by their sellers?
