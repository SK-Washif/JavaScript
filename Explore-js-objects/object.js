//create object using object literals (imp)
const player = {};
player.name = 'small Nirab';
player.specialty = 'batsman';

player.bat = function(){
  console.log('swim your bat');
}

console.log(player);
player.bat();



const student = {
       name: 'raz',
       job: 'engineer',
       ball: function(){
        console.log('throw the ball')
       },
       salary: 100000
}


//obj constructor
const person = new Object();
console.log(person);


//object create method
const item = Object.create(null);
console.log(item);

const call = Object.create(student);
console.log(call.name);


//class(imp)
class Person{
  name = 'washif';
  address = 'uttar badda';
  constructor(age){
    this.age = age;
  }
}

const person1 = new Person(56);
console.log(person1);


