// Show me how to calculate the average price of all items.

// Get all prices with the map method
var allPrices = items.map( function (item) {
  return item.price;
});
// add up prices
function addUpItemPrices (prev, current) {
  return prev + current;
}
// Get sum using the reduce method
var priceSum = allPrices.reduce(addUpItemPrices);

// Get average price by dividing sum by number of all items
var avg = priceSum/items.length;

//round answer
var final =(avg).toFixed(2);

var answer1= "The average price is $" + final;

var answer1Area = document.querySelector('#answer1');

answer1Area.innerHTML = answer1;



// 2
// Show me how to get an array of items that cost between $14.00 and $18.00 USD

// Use a filter method to get products costing between 14.00 and 18.00
var priceSearch = items.filter(function(item) {
if  (item.price > 14 && item.price < 18) {
  return item.price
}
});
// console.log(priceSearch);
var answer2Area = document.querySelector('#answer2');

// Use forEach to identify each title from individual product
priceSearch.forEach(function(singleProduct){

//moving each title into html form( or DOM node) via document.createElement().
//First we create an empty p element
  var para = document.createElement('p');

// Second we get the singleProduct info and push it into the DOM node
  var textNode = document.createTextNode(singleProduct.title);

// Third we append (or add on) each singleProduct into the created 'p' tags so that all of them are displayed
  para.appendChild(textNode);

// Lastly we add the filled 'p' tags to the answer2Area in the html so they display on the page
  answer2Area.appendChild(para);
});


// 3
// Which item has a "GBP" currency code? Display it's name and price.

//Use the filter method to find just the GBP code
var currency = items.filter(function(item){
  return item.currency_code ==="GBP";
});

// use forEach method to find the title of item w GBP
currency.forEach (function (pound){
var answer3= pound.title + "  costs £18.";

var answer3Area = document.querySelector('#answer3');

answer3Area.innerHTML = answer3;
});


// 4
// Display a list of all items that are made of wood.

//'wood' is a string inside the materials array.  Materials is an array inside
//the items array.
// I need to access the 'wood' string and then get the title of each product
//that contains the 'wood' string.

var products = items.map(function(woodProduct){
  return woodProduct.materials;

// console.log(products);
var woodProduct = items.materials;
var product = woodProduct.indexOf('wood');

// console.log(woodProduct);
});



 // woodProduct.indexOf('wood')
 // console.log(woodProduct);
 //  });


// var materials = items.materials;
//
// products.forEach(function (item){
// console.log(materials)
// });
// materials.forEach(function(prod){
//   console.log(prod.wood)
// });
// });


// 5
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var materialSearch = items.filter(function(item){
  if (item.materials.length > 7)
  return item.materials.length;
});

// Use forEach to identify each title from individual product
materialSearch.forEach (function(itemNum) {
  (itemNum.title, itemNum.materials.length, itemNum.materials);

  var answer5Area = document.querySelector('#answer5');

//moving each title into html form( or DOM node) via document.createElement().

  var answer = document.createElement('p');

  //Attempting to add title, number of materials, and list of materials
  var textNode = document.createTextNode(itemNum.title,itemNum.materials.length, itemNum.materials);

  // add all the titles to the html page
  answer.appendChild(textNode);

// Lastly we add the filled 'p' tags to the answer2Area in the html so they display on the page
  answer5Area.appendChild(answer);
});


// 6
// How many items were made by their sellers?

//Find items.who_made with the answer "i_did".

var product = items.filter(function(item) {
  return item.who_made === "i_did";
});

//get number of product by using product.length

var answer6 = product.length + " were made by their seller";

var answer6Area = document.querySelector('#answer6');
answer6Area.innerHTML = answer6;
