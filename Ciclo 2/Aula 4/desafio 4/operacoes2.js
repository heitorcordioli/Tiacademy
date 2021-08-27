window.onload = function(){

//produtos
(()=>{

	let mostarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");

	for(let idx in produtos ){
		mostarProdutosCliente.innerHTML += `<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
		
	}


})(produtos)

//compra
const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");

const cestaDoCliente = document.querySelector("ul#cestaDoCliente");

const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

const armazenaItem=[];
var totalPedido = 0;

itemProduto.forEach((item)=>{

	item.addEventListener("click",()=>{
		//alert("lista")
		li = document.createElement("li");
		li.setAttribute("class", "itemProduto");
        li.setAttribute("data-preco", item.dataset.preco);

		if(armazenaItem.indexOf(item.textContent) == -1){

			armazenaItem.push(item.textContent);

			cestaDoCliente.appendChild(li).textContent = item.textContent;

			totalPedido += Number(item.dataset.preco);

			mostraTotalCompra.value = totalPedido.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})

		}else{
			alert(`Esse item ${item.textContent} já está na sua cesta`);
		}			

	})
	
})

//Remover produtos
	const cestaDoCliente1 = document.querySelectorAll("#cestaDoCliente");
	const lista = document.querySelector("ul#cestaDoCliente");

		cestaDoCliente1.forEach((item)=>{
			item.addEventListener("click",(itemDaCesta)=>{
				//alert ("blz");

				var idx = armazenaItem.indexOf(itemDaCesta.target.textContent);
                if (idx > -1) {

                totalPedido -= Number(itemDaCesta.target.dataset.preco);

                cestaDoCliente.removeChild(lista.childNodes[idx]);
                armazenaItem.splice(idx, 1);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }
		})
	})


}//fim