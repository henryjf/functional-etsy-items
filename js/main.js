// Show me how to calculate the average price of all items.
// The average price is $23.63

var allPrices = items.map( function (item) {
  return item.price;
});

function addUpItemPrices (prev, curr) {
  return prev + curr;
}

var priceSum = allPrices.reduce(addUpItemPrices);

var avg = priceSum/items.length;
var final =(avg).toFixed(2);

var answer1= "The average price is $" + final;

var answer1Area = document.querySelector('#answer1');

answer1Area.innerHTML = answer1;

// 2
// Show me how to get an array of items that cost between $14.00 and $18.00 USD




// 3
// Which item has a "GBP" currency code? Display it's name and price.




// 4
// Display a list of all items who are made of wood.


// 5
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.




// 6
// How many items were made by their sellers?
