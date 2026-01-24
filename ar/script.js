let nomeLimpo = true;
let renda = 1500;
let temFiador = true;

if (nomeLimpo && (renda > 2000 || temFiador)){
    console.log("Empréstimo aprovado!");
}else{
    console.log("Empréstimo Negado.");  
}

let num1 = 6;
let num2 = 7;

soma = Number(num1) + Number(num2);
console.log(soma);

if((5 - 3) && (5 - ' ') && (5 - 3)){
    console.log("True");
}else{
    console.log("False")
}


let idadeMax = 28;
let idadeSarah = 32;

if(idadeSarah > idadeMax){
    console.log("É maior");
}else if(idadeSarah < idadeMax){
    console.log("É menor");
}else{
    console.log("É igual");
}

var nome = 'Maxwilliam'
var idade = 28;
var possuiPremio = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(Boolean(nome));
console.log(Boolean(idade));
console.log(Boolean(possuiPremio));
console.log(Boolean(empregoFuturo));

console.log(Boolean(dinheiroNaConta));

let diaDaSemana;
let nomeDia;

diaDaSemana = prompt("Qual é o dia da semana em numero:", "numero");

switch(diaDaSemana){
    case '1':
        nomeDia = "Domingo";
        break
    
    case '2':
        nomeDia = "Segunda";
        break;

    case '3':
        nomeDia = "Terça";
        break;

    case '4':
        nomeDia = "Quarta";
        break;

    case '5':
        nomeDia = "Quinta";
        break;

    case '6':
        nomeDia = "Sexta";
        break;

    case '7':
        nomeDia = "Sabado";
        break;

    default:
        nomeDia = "Dia invalido";
        break;
}

console.log(nomeDia);
