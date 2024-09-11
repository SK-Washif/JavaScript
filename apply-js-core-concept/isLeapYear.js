function isLeapYear(year){
  const leapYear= year%4;
  if(leapYear === 0){
    return true;
  }
  else{
    return false;
  }

}

const isMyLeapYear= isLeapYear(1933);
console.log("my Year=", isMyLeapYear);

const isHerLeapYear= isLeapYear(1960);
console.log("my Year=", isHerLeapYear);