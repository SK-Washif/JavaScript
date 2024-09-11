const first = {a:5, b:2, c:5};
const second = {a:5, c:5, b:2};
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
console.log(firstString, secondString);

if(firstString === secondString){
  console.log('same');
}
else{
  console.log('different');
}