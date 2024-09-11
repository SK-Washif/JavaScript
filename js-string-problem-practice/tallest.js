function maxInArray(number){
  let largest= number[0];
  for(let i=0; i<=number.length; i++){
    const element= number[i];
    if(element > largest){
      largest= element;
    }
  }
  return largest;
}

const heights= [167, 190, 120, 165, 137, 200];
const largest= maxInArray(heights);
console.log(largest);