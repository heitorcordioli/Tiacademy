var nome = prompt("Digite seu nome"); 

var n = 20;

var n1 = prompt(nome +" digite um número para comparar com 'n'");

document.write("1. Seja bem vindo..: " + nome + "<br>");

document.write("2. Você digitou o número..: " +n1 + "<br>");

var vdd = (n == n1);

document.write("3. O retorno da comparação booleana é..: " + vdd + "<br>");

var soma = parseInt(n1) + n;

document.write("4. A soma dos valores é..: " + soma + "<br>");

var subt = parseInt(n1) - n;

document.write("5. A subtração dos valores é..: " + subt + "<br>");

var resto = parseInt(n1) % n;

document.write("6. O resto da divisão é..: " + resto + "<br>");

var base = parseInt(n1);

var exp = Math.pow(base,2); 

document.write("7. O quadrado do número digitado é..: " + exp + "<br>"); 