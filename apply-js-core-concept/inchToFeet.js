const inches = 60;
const feet = inches/12;
console.log("Feet= ", feet);



function inchToFeet(inches){
  const feet= inches/12;
  return feet;

}

const dadaInches= 144;
const dadaFeet= inchToFeet(dadaInches);
console.log(dadaFeet);

const dadiInches= 168;
const dadiFeet= inchToFeet(dadiInches);
console.log(dadiFeet);

