// 1*2*3*4*5*6*7*8*9
function multiplicationOfNumbers(number){
  let result= 1;
  for(let i=1; i<=number; i++){
    result = result*i;
  }
  return result;
}

const result= multiplicationOfNumbers(9);
console.log(result);


//factorial!!!!!!!!!!!!
function factorial(number){
  let res= 1;
  for(let i=1; i<=number; i++){
    res = res*i;
  }
  return res;
}

const resu= factorial(8);
console.log(resu);