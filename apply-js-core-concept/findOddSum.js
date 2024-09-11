function getSumOfArray(numbers){
  let sum= 0;
  for(let i=0; i < numbers.length; i++){
    const index= i;
    const element= numbers[index];
    sum= sum + element;
    //console.log(index, element, sum);
  }
  return sum;
}

function getOddNumberOfArray(numbers){
  const oddNumbers= [];
  for(let i=0; i<numbers.length; i++){
    const index= i;
    const element= numbers[index];
    if(element%2 !== 0){
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumber= [2, 3, 4, 5, 77, 88, 99];
const oddNumbers= getOddNumberOfArray(myNumber);
console.log(oddNumbers);

 const oddNuberSum = getSumOfArray(myNumber);
 console.log("odd number of sum=", oddNuberSum);