/*

	var / let / const

*/

//variavés dentro de funções são variáveis locais
/*var nome="Heitor"; //var global
let sobreNome = "Cordioli";


if(true){
	console.log("Var nome= "+nome);
	var nm = nome;
	console.log("Chamando o sobreNome "+sobreNome);
	let sn = "Rodrigues";   // se eu criar uma varíavel dentro de um escopo, só serve para aquele escopo irá dar erro se chamar ela fora do escopo
	console.log(sobreNome);
}

console.log("Meu nome é "+nm+" "+sn+" "+sobreNome)
console.log("Var nome= "+nm);*/

var Pessoa = {
		nome: "Heitor",
		rua: "Rua lá",
		ncasa: "777",
		dados: function(){
			document.write(
				"Nome...: "+this.nome+ "<br>"+
				"Rua...: "+this.rua+ "<br>"+
				"N. casa...: "+this.ncasa+ "<br>"
			)
	}
}

Pessoa.dados();

/*console.log("Nome "+Pessoa.nome+ 
		    " Endereço "+Pessoa.rua+ " N."+Pessoa.ncasa);*/




