window.onload = function (){	
	const v1 = document.querySelector("#v1");
	const v2 = document.querySelector("#v2");
	const resultado = document.querySelector("#result");
	const btnconfirmar = document.querySelector("#confirmar");
	btnconfirmar.addEventListener('click',()=>{
		var caixa1 = v1.value;
		var caixa2 = v2.value;
		var r = Number(caixa1) + Number(caixa2);
		var rr = Number(resultado.value);	
		if(r === rr){
			alert("Parabéns você acertou !");
		}
		else{
			alert("Você errou !");
		}
	});

}