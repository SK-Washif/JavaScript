const student = {
  name: 'Washif',
  money: 5000,
  study: 'Math',
  subject: ['calculus', 'algebra', 'STAT'],
  exam: function(){
    return this.name + ' is participate';
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

const output = student.exam();
console.log(output);

const reExam = student.improveExam('algebra');
console.log(reExam);

const remaining = student.treatDey(900, 100);
console.log(remaining);