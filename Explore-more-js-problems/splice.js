const friends= [12, 34, 56, 78, 90, 22, 44, 55];
const partial= friends.splice(2,5, 111, 222, 333, 444);
console.log(partial);
console.log(friends);