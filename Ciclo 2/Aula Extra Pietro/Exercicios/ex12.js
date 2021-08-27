/*Desenvolva um algoritmo que emule um caixa eletrônico. O usuário deve inserir o
valor total a ser sacado da máquina e o algoritmo deve informar quantas notas de 100,
50, 20, 10, 5 ou 2 reais serão entregues. Deve-se escolher as notas para que o usuário
receba o menor número de notas possível.*/

var saque = parseInt(prompt("Insira a quantidade a sacar em R$: "));
var cem;
var cinq;
var vinte;
var dez;
var cinco;
var dois;

cem = saque / 100;
saque = saque % 100;
cinq = saque / 50;
saque = saque % 50;
vinte = saque / 20;
saque = saque % 20;
dez = saque / 10;
saque = saque % 10;
cinco = saque / 5;
saque = saque % 5;
dois = saque / 2;

console.log ("nº notas R$ 100,00: ", Math.trunc(cem));
console.log ("nº notas R$ 50,00: ", Math.trunc(cinq));
console.log ("nº notas R$ 20,00: ", Math.trunc(vinte));
console.log ("nº notas R$ 10,00: ", Math.trunc(dez));
console.log ("nº notas R$ 5,00: ", Math.trunc(cinco));
console.log ("nº notas R$ 2,00: ", Math.trunc(dois));

