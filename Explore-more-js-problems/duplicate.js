function removeDuplicate(names){
  const unique= [];
  for(let i=0; i<names.length; i++){
    const name= names[i];
    if(unique.includes(name) === false){
      unique.push(name);
    }

    


  }

  return unique;
}

const names= ["qq", "ee","gg", "ee", "qq"];
const shoe= removeDuplicate(names);
console.log(shoe);