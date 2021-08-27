/* objetos */

function Pessoa(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}

var ps1 = new Pessoa("Heitor", "Cordioli", 25); //construtor
console.log("Pessoa 1 -Nome "+ ps1.nome + " "+ ps1.sobrenome + " idade: "+ps1.idade);

var ps2 = new Pessoa("Maria");
console.log("Pessoa 2 - Nome "+ ps2.nome + ps2.sobrenome);


/* Segunda forma de criar objeto */
var objPessoa = { rg : "7767", cpf : "8989"}
console.log( "RG: "+ objPessoa.rg );

//console.log(typeof(objPessoa));

/* Terceira forma de criar objeto */
function Pessoa2(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
	this.doc = {
		rg : "777",
		cpf : "8989"
	}
}

var pessoa2 = new Pessoa2("Rapahel");
//console.log("Nome: "+ pessoa2.nome+ " "+ pessoa2.doc.rg);
console.log(`Nome ${pessoa2.nome} - RG ${pessoa2.doc.rg}`); //forma de concatenar para colocar as strings para visualização

