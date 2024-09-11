const country= "Bangladesh";
const age= 52;
const IsIndependent= true;
const student= {id: 121, class: 11, name: "Agun"};
const friends= [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
  return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof IsIndependent);
console.log(typeof student);
//typeof diye arry check kora jai na
console.log(Array.isArray(friends));
console.log(typeof add);

//array er modde element ache kina
console.log(friends.includes(19));
console.log(friends.includes(20));

//-1 mane index a nai, seta check dewnar niyom
if(friends.indexOf(252) !== -1){

}

//ebar dita array jora dibo
const newFriendsAge= [12, 13, 11, 13];
const allFriends= newFriendsAge.concat(friends);
console.log(allFriends);