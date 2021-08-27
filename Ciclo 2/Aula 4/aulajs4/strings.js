/*var nome = "Heitor";
console.log(nome.length);
console.log(nome[0]);*/

/*match()
O método match procura uma palava em uma string.
Existem alguns parâmetros de pesquisa que permite uma maior precisão conforme a numeração
flags g/i/m
*/

//var palavras = "Maçã doce";
//console.log(palavras.match(/D/gi));


/*search()
O método search()procura pela ocorrência e retornando a posição na 
cadeia da string, a posição é em relação ao primeiro caractere da ocorrência.
*/

/*var palavras = "Maçã doce";
console.log(palavras.search(/d/gi))*/

/*replace()
Este método substitui uma string por outra, simples assim, 
ele pesquisa a string informada, como no método "match" e a 
substitui por outra string nas aspas informada como segundo parâmetro
*/

/*var str = "Lorem ipsum dolor sit amet consectetur, adipisicing elit."+
 "Fuga architecto aspernatur quo? Illo, exercitationem iure odit."

var mudaStr = str.replace(/odit/gi,"Xxxxx");
console.log(mudaStr);*/

/*localeCompara ()
O método localeCompare compara efetua a comparação entre duas strings,
se estas forem iguais o retorno será "0" zero. o valores -1 e 1 podem ser 
esperados caso elas não sejam iguais.*/

/*var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();*/

//console.log(`Este é o c1: ${c1} Este é o c2: ${c2}`);


/*var comparacao = c1.localeCompare(c2);
console.log(comparacao);*/

/*trim()
Faz a remoção de espaços antes e depois da string específicada.replace
*/

var p = "   fpalavra+ ";

var r = p.trim();
console.log(r);
var s = r.replace(/f/gi, "");
console.log(s);
var sub_a = s.replace("+","");
console.log(`Removido: ${sub_a}`);

//console.log(p.replace(/f/gi, ""));
//console.log(p);


// toLocaleString - Para formatar moedas

var valor = 1.357 // no Brasil usa 1,35;
var formatarMoeda = valor.toLocaleString("pt-BR",{
	style: "currency",
	currency: "BRL"
})

console.log(formatarMoeda);