console.log('append');
//salbon er section a li add
const placesList= document.getElementById('places-list');

const li= document.createElement('li');
li.innerText= 'pahartoli pon';

placesList.appendChild(li);

//main er modde kaj
const mainContainer= document.getElementById('main-container');
// console.log(mainContainer)
const section= document.createElement("section");
const h1= document.createElement('h1');
h1.innerText= 'My Food List';
section.appendChild(h1);

const ul= document.createElement('ul');
const li1= document.createElement('li');
li1.innerText= 'briyani';
ul.appendChild(li1);

const li2= document.createElement('li');
li2.innerText= 'borhano';
ul.appendChild(li2);

const li3= document.createElement('li');
li3.innerText= 'sorbot';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);




//oporer kaj gula kom koste niche korlam
const sectionDress= document.createElement('section');
sectionDress.innerHTML= `
<h1>My Dress Section</h1>
<ul>
     <li>T-shirt</li>
     <li>T-shirt</li>
     <li>T-shirt</li>
</ul>
`
mainContainer.appendChild(sectionDress);





