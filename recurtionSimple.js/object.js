const student= {
  name: 'sakib khan',
  id: 121,
  address: 'movie cinema',
  friends: ['Apu', 'Raaz', 'salman', 'aamir'],
  movies: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2018}],

  act: function(){
    console.log('acting like salman khan')
  },
  car: {
    brand: 'tesla',
    price: 500000,
    made: 2025,
    manufacturer: {
      name: 'tesla',
      ceo: 'elon Mask',
      country: 'USA'
    }
  }
}
//console.log(student);
student.act();
console.log(student.act);
