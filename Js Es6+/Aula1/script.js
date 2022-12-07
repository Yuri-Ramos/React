// while = enquanto
 var x=0;
while(x<10){

    document.write("</br> ovalor do x é :"+ x);
    console.log(x);

    x++;
}

document.write("</br></br></br></br></br> ovalor do x é :"+x);

// for = para
for (a=0; a<x; a++){

    document.write("</br> ovalor do y é :"+ a);
    console.log(x);
}
document.write("</br></br> O que deseja pedir? 1 cachorro 2 humburguer 0 sair"); //
function pedir(){
    x= prompt (" o que deseja pedir? ")
    switch(x){
        case "0":
            alert("0 x vale 0! :)");
            break;
        case "1":
            alert("1 x vale 1! :)");
            break;
        case "2":
            alert("2 x vale 3! :)");
            break;
        default:
        alert("digite um numero valido!");
        pedir();
        break;

        

    }}

    function acao(){
        document.write(" esperando...   <br> ");
    }

    // só é parado um setInterval com uma variavel
    //var timer = setInterval(acao,2000);
setTimeout(acao,2000);
