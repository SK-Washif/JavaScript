var numbers = [22, 33, 55, 1, 66, 44, 90, 7, 59];

for(var i=0; i<numbers.length; i++){
  var number = numbers[i];
  if(number > 50){
    continue;
  }
  console.log(number);

}