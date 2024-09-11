const numbers= [45, 65, 23, 98, 19];

for(let i=0; i<numbers.length; i++){
  const number= numbers[i];
  console.log(number);
}

console.log("for of loop");

for(const number of numbers){
  console.log(number);
}

//---------------------------

const products= [
  {id: 1, name: 'xiami phone', price: 19080},
  {id: 2, name: 'xiami', price: 19080},
  {id: 3, name: 'xiami phone', price: 19080},
  {id: 4, name: 'xiami phone', price: 19080},
  {id: 5, name: 'xiami', price: 19080},
  {id: 6, name: 'xiami phone', price: 19080},
  {id: 7, name: 'xiami', price: 19080},
  {id: 8, name: 'xiami phone', price: 19080},
];
for(const product of products){
  console.log(product);
}

//----------------------------------------
function matchedProducts(products, search){
  const matched= [];
  for(const product of products){
    if(product.name.toLowerCase().includes(search.toLowerCase())){
      matched.push(product);
    }
  }
  return matched;

}

const result= matchedProducts(products, 'phone');
console.log(result);

