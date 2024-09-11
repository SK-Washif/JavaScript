const shoppingCart= [
  {name: "shoe", price: 1200},
  {name: "shoe", price: 2200},
  {name: "shoe", price: 3700},
  {name: "shoe", price: 600}
];

function totalCost(products){
  let sum =0;
  for(let i=0; i<products.length; i++){
    const product= products[i];
    sum= sum+product.price;


    
  }
  return sum;

}

const expense= totalCost(shoppingCart);
console.log("Total expense today: ", expense);