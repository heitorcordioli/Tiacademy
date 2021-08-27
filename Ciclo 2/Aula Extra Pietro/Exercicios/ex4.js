/*(Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba o salário de
um funcionário, calcule e mostre o novo salário, sabendo-se que este sofreu um
aumento de 25%.*/

var sal = parseFloat(prompt("Insira o salário: "));

sal_liq = (0.25*sal) + sal;

console.log ("Seu novo salário é R$: ",sal_liq);