const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
console.log(keys);

const values = Object.values(bottle);
console.log(values);

const pair = Object.entries(bottle);
console.log(pair);

console.log(bottle);
delete bottle.isCleaned;
console.log(bottle);

console.log(bottle);
Object.seal(bottle);
delete bottle.isCleaned;
console.log(bottle);