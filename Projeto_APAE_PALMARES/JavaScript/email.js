function validarEmail(){
    var email = document.getElementById('email').value;
  
    if(email.value == email.value){
      location.href = '/home/usuario/Projeto_APAE_PALMARES/Html/codigo.html';
    }else{
      alert('Usuário não encontrado!')
      document.getElementById('entrar').onclick = function(){return false};
      location.href = '/home/usuario/Projeto_APAE_PALMARES/Html/Login.html';
                      
  }}