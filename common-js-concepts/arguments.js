function sum(a, b, c){

  console.log(arguments);

  const args = [...arguments];
  console.log(args);

  const result = a+b+c;
  return result;
}

const total = sum(23, 34, 45, 33, 34,67);
console.log(total);