/*(Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba o salário de
um funcionário e o percentual de aumento, calcule e mostre o valor do aumento e o
novo salário.*/

var sal = parseFloat(prompt("Insira o salário: "));

var porc = parseFloat(prompt("Insira a porcentagem de aumento: "));

aumento = (porc/100)*sal;

sal_liq = aumento + sal;

console.log ("Seu aumento é R$: ",aumento);

console.log ("Seu novo salário é R$: ",sal_liq);