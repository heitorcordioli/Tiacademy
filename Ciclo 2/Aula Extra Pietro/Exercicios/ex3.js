/*(Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba três notas e
seus respectivos pesos, calcule e mostre a média ponderada dessas notas.*/
var n1 = parseFloat(prompt("Insira a primeira nota"));
var p1 = parseInt(1);

var n2 = parseFloat(prompt("Insira a segunda nota"));
var p2 = parseInt(2);


var n3 = parseFloat(prompt("Insira a terceira nota"));
var p3 = parseInt(3);


media_Pond = ((n1*p1)+(n2*p2)+(n3*p3))/(p1+p2+p3);

console.log ("A média ponderada é: ", media_Pond .toFixed(2));

