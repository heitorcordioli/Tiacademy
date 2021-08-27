function soma(){
	var x=1;
	var y=2;
	console.log(x+y);
}

//soma();

function somaPar(x, y){
	var r = x+y;
	console.log(r);
}

//somaPar(4, 9);

function mult(n, o){
	var resultado = (n*o);  //variavés dentro de funções são variáveis locais
	console.log(resultado);
}

function pot(n, o){
	var resultado = Math.pow(n,o);
	console.log(resultado);
}

mult(3,4);
pot(7,2);

/*(function respostaF(){
	var nome="Heitor";
	alert(nome);
	return nome;
})();                      -- utilizada para executar a função sem chamar ela*/

/*var f = function(){
	alert("Função sem nome");
}

f();                       --Funções anônimas*/



//var d = respostaF();


//var ar = ()=>{alert("ArFunc")}
//ar();


//( ()=>{alert("ArFunc")} )();