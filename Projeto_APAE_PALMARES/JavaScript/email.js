function validarEmail(){
    var email = document.getElementById('email').value;
  
    if(email.value == email.value){
      location.href = '../Html/codigo.html';
    }else{
      alert('Usuário não encontrado!')
      document.getElementById('entrar').onclick = function(){return false};
      location.href = '../Html/Login.html';
                      
  }}