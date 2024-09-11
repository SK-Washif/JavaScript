console.log('This is separate js file');

//red color
function makeRed(){
  document.body.style.backgroundColor='red';
}

//blue color
const makeBlueButton= document.getElementById('make-blue');
makeBlueButton.onclick= makeBlue;

function makeBlue(){
  document.body.style.backgroundColor='blue';
}

//purple
const purpleButton= document.getElementById('make-purple');
purpleButton.onclick= function makePurple(){
  document.body.style.backgroundColor= 'purple';
}

//pink
const pinkButton= document.getElementById('make-pink');
    pinkButton.addEventListener('click', makePink);

    function makePink(){
      document.body.style.backgroundColor='pink';
    }

    //green
    const makeGreenButton= document.getElementById('make-green');
    makeGreenButton.addEventListener('click', function makeGreen(){
      document.body.style.backgroundColor='green';
    });


    //goldenrod,, aita sort and final niyom
    document.getElementById('make-goldenrod').addEventListener('click', function(){
      document.body.style.backgroundColor='goldenrod';
    })