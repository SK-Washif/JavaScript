const numbers= [2, 8, 4, 6, 3]
// const output= [];

// for(const number of numbers){
//   const doubled= number*2;
//   output.push(doubled);
// }

// console.log(output);

//-----------------------------------

// function getDoubled(numbers){
//    const output= [];

//    for(const number of numbers){
//    const doubled= number*2;
//    output.push(doubled);
//   }
//   return output;
// }
// const result= getDoubled(numbers);
// console.log(result);

//------------------------------------



// function getDoubled(numbers){
//   const output= [];

//   for(const number of numbers){
//   const doubled= doubleIt(number);
//   output.push(doubled);
//  }
//  return output;
// }

// function doubleIt(number){
//   return number*2;
// }


// const result= getDoubled(numbers);
// console.log(result);


//-----------------------------------------


// function getDoubled(numbers){
//   const output= [];

//   for(const number of numbers){
//   const doubled= doubleIt(number);
//   output.push(doubled);
//  }
//  return output;
// }

// function doubleIt(number){
//   return number*2;
// }
//or,
// const doubleIt= num => num*2;

// const makeDouble= numbers.map(doubleIt);


// const result= getDoubled(numbers);
// console.log(result);
// console.log(makeDouble);

//--------------------------------------------


const makeDoubleDirect= numbers.map(num => num*2);
console.log(makeDoubleDirect);

const fiveTimes= [1, 2, 3, 4, 5].map(x => x*5);
console.log(fiveTimes);
