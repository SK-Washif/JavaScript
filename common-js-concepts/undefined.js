let first;
console.log(first); //output undefined dibe

function third(a, b, c, d){
  const total = a+b+c+d;
  console.log(a, b, c, d);
}
third(2,5); //c, d er man undefined undefined dibe


function noNegative(a, b){
  if(a<0 || b<0){
    return // b er man -5 hole true hoye ekhane return hobe. but return kothai hobe bola nai tai output undefined dibe.
  }
  return a+b;
}
const total = noNegative(2,-5);
console.log(total);
