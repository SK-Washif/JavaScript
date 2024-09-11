// 1) 1 to 50 print dite Hobe
// 2) 3 diye vag jai sehulate foo print dibe
// 3) 5 diye vag jai se gulate bar print dite hobe
// 4) 3 and 5 diye vag jai segulate foobar print dite hobe

for(let i=1; i<=50; i++){
  if(i%3 === 0 && i%5 === 0){
    console.log("foobar");
  }
  else if(i%3 === 0){
    console.log("foo");
  }
  else if(i%5 === 0){
    console.log("bar");
  }
  else{
    console.log(i);
  }
}