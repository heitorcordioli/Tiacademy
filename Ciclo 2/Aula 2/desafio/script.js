var nome = prompt("Digite seu nome"); 

var n = 20;

var n1 = prompt(nome +" digite um número para comparar com 'n'");

if(n===n1){
	alert("Não é uma string");
}else{
		alert("Uma string foi enviada");
	}

alert("A string será convertida para um número");

parseInt(n1);

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

var fruta = prompt("Digite um número de 1 a 4 para escolher uma das quatro frutas: "+"\n"+
					"(1) = Laranja"+"\n"+"(2) = Uva"+"\n"+"(3) = Pera"+"\n"+"(4) = Manga");

switch(fruta){
	case '1':
		document.write("Você escolheu a fruta Laranja");
	break;

	case '2':
		document.write("Você escolheu a fruta Uva");
	break;

	case '3':
		document.write("Você escolheu a fruta Pera");
	break;

	case '4':
		document.write("Você escolheu a fruta Manga");
	break;

	default:
		document.write("Não consta na lista essa fruta");
	break;
}






