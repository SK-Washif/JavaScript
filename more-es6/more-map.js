const products=[
  {id: 1, name: 'laptop', price: 450000},
  {id: 1, name: 'mobile', price: 800000},
  {id: 1, name: 'watch', price: 350000},
  {id: 1, name: 'tablet', price: 250000}
];

const items= products.map(product => product.name);
console.log(items);