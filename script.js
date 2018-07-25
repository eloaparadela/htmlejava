let nome = document.querySelector('#idname');
 //let entradas = document.querySelectorAll('input');
 let sobrenome = document.querySelector('#idsobrenome');
 let email = document.querySelector('#idemail');
 let botao = document.querySelector("#botao");
 // let paragrafo = document.querySelectorAll('p');


botao.addEventListener('click', enviar); 


function enviar(){ 
    if(nome.value == "" || nome.value == null ){
     alert('Favor preencher o nome');
       }
    else if(sobrenome.value == "" || sobrenome.value == null ){
        alert('Favor preencher o sobrenome');
       }
    else if (email.value == "" || email.value == null ){
        alert('Favor preencher o email');
       }
    else{
        alert('Obrigado(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
       }
    }