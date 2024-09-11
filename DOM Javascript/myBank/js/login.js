document.getElementById('btn-submit').addEventListener('click', function(){

  const emailField= document.getElementById('user-email');
  const email= emailField.value;

  const passwordField= document.getElementById('user-password');
  const password=passwordField.value;

  if(email=== 'washiffishal@gmail.com' && password=== '#fishal0151'){
    //console.log('valid user');
    window.location.href='bank.html';
  }
  else{
    alert('wrong password');
  }

})