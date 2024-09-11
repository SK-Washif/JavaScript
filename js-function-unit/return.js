function add(numb1, numb2){
  console.log(numb1, numb2);
  var sum = numb1 + numb2;
  return sum;

}

var total=add(20, 30);
console.log("total:", total);


// amar tk te koita singra kinte parbo seta dekhabe
function bringSingra(money){
  var singraPrice= 10;
  var quantity = money/singraPrice;
  return quantity;
}

var singras = bringSingra(200);
console.log("can buy singras=", singras);


// tin bar call korbe and 3 bar value niye jeye finnaly return korbe
function add(num1, num2){
  const sum= num1+num2;
  return sum;
}

const result1= add(10, 20);
const result2= add(10, 10);
const finalResult= add(result1, result2);
console.log("final reult is= ", finalResult);