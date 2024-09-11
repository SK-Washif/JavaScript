for(var i=0; i<=20; i++){
  console.log(i);
  if(i>10){
    break;
  }
}

var items = ['dd', 'ff', 'ee', 'yy', 'kk', 'l'];

for(var i=0; i<items.length; i++){
  var item = items[i];

  if(item == 'yy'){
    break;
  }
  console.log(item);
}

