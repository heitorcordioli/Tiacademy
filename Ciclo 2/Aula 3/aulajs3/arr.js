/* concat() Junta os elementos de dois ou mais arrays e retorna uma cópia com os elementos juntos*/

var frutas = ["Uva", "Banana", "Amora", "Melão"]; //var frutas = Array()
console.log(`Qtde do array: ${frutas.length} fruta: ${frutas[0]}`);

var frutas2 = ["Maçã", "Pera", "Laranja"];

var todasAsFrutas = frutas.concat(frutas2);
console.log(frutas);
console.log(todasAsFrutas);

/* indexOf() Procura por um elemento específico no array e retorna a sua posição */
var retornoIndexOf = todasAsFrutas.indexOf("Amora");
console.log(retornoIndexOf); //2 


/* join() Junta todos os elementos de um array em uma string  */
var stringDeArray = todasAsFrutas.join();
console.log(stringDeArray);



/* push() Insere um novo elemento no final do array */
var outraLista = ["Bola", "Peteca"];
var novaLista = outraLista.push("Boneca", "Qualquer brinquedo");

console.log(novaLista);
console.log(outraLista);
console.log(outraLista[3]);

/* pop() Remove o último elemento do array */
console.log(outraLista.pop());
console.log(outraLista);

/*reverse() Inverte a ordem dos elementos do array */
console.log(outraLista.reverse());


/*shift() Remove o primeiro elemento do array */
var removerPrimeiro = ["fusca", "variante"];
removerPrimeiro.shift();
console.log(removerPrimeiro);

/*sort() Ordena os elementos do array em ordem crescente*/
var alfa = [4,6,9,2];
alfa.sort();
console.log(alfa);

/* toString() Converte um array em string e retorna essa string */
//faz mesma coisa que o join

/* unshift() Insere um novo elemento no início do array*/
alfa.unshift(10);
console.log(alfa);


/*splice() Corta o array em um ponto indicado dois parâmetros índice e quantos elementos quer remover a partir da posição  */
var f = ["Uva", "Banana", "Amora", "Melão"]; 
console.log(f.splice(0,1));


//arrays de objetos

var dados = [
             {nome: "Marcelo"},
             {nome: "Raphael"}

             ]

//console.log(dados[0].nome);
//console.log(dados[1].nome);

function Pessoa2(nome, sobrenome, idade, doc=[]){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg : doc[0],
		cpf : doc[1]
	}
}

var pessoa2 = new Pessoa2("Rapahel","","",["22","555"]);
//console.log("Nome: "+ pessoa2.nome+ " "+ pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - CPF ${pessoa2.doc.cpf}`); 