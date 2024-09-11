//console.log(this);
const kodomAli = {
  name: 'Washif',
  money: 5000,
  study: 'Math',
  subject: ['calculus', 'algebra', 'STAT'],
  exam: function(){
    console.log(this);
    return this.name + ' is participate';
  },

  examArrow: () =>{

    console.log(this);

  },

  examNested: () =>{
    const arrow = () =>{
      console.log(this);
    }
    arrow();
  },

  improveExam: function(subject){
    this.exam();
    return `${this.name} is taking improve exam on ${subject}`
  },
  treatDey: function(amount, tips){
    this.money = this.money - amount - tips;
    return this.money;
  }
}
//kodomAli.exam();

const badamAli = {
  name: 'kacha badam Ali',
  money: 8000
}

badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandler(){
  console.log('inside click handelar', this);
}

document.getElementById('btn-click2').addEventListener('click',function(){
  console.log(this);
})