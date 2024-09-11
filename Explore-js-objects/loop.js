//for of
const numbers = [12, 23, 33, 3, 4];
for(const number of numbers){
  console.log(number);
}

 //for of , how to use in objects
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
for(const key of keys){
  console.log(key);
}

for(const key of keys){
  console.log(key, bottle[key]);
}

//object er jonno for in loop use kora hoi(imp)
for(const key in bottle){
  console.log(key, bottle[key]);
}

//advanced system
const pair = Object.entries(bottle);
console.log(pair);

for(const [key, value] of Object.entries(bottle)){
  console.log(key, value);
}