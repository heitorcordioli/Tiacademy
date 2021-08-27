/*(Adaptado de ASCENCIO e CAMPOS, 2008) Faça um programa que receba o salário-
base de um funcionário, calcule e mostre o salário a receber, sabendo-se que esse
funcionário tem gratificação de 5% sobre o salário-base e paga imposto de 7% sobre o
salário-base.*/


var sal = parseFloat(prompt("Insira o salário: "));

var porc = parseFloat(0.05);

var imposto = parseFloat(0.07);

aumento = porc*sal;

desconto = imposto*sal;

sal_liq = sal + aumento - desconto;

console.log ("Seu novo salário a receber é R$: ",sal_liq);