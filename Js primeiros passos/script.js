// var nome = "Yuri"
// var idade = prompt("digite sua idade");
// document estamos nos referindo ao conteudo da janela 
// Window estamos nos referindo a janela

document.write("<img src='http://www.google.com/google.jpg'/>");

function entrar() {
    var area = document.getElementById ('area');
    var texto = prompt('Digite um texto');
    if (texto === ''){
        alert('digite seu nome');
        area.innerHTML ='bem vindo ..';
    }
    
    area.innerHTML ='bem vindo  '+ texto;
}

function entrar2(nome){
    var area = document.getElementById ('area2');
    var texto = prompt('Digite sobrenome');
   
    area.innerHTML = nome+ "  " + texto;
}

lis