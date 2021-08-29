const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());


let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;


app.get('/', function(req,res){
    res.send('Olá Mundo');
});

app.post('/clientes', async(req,res)=>{
    let create=await cliente.create(
        req.body
    );
    res.send('Clientes foi inserido!');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

app.post('/pedidos', async(req,res)=>{
    let create=await pedido.create(
        req.body
    );
    res.send('Pedidos foi inserido');
});

let port=process.env.PORT || 3000; 

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
}); //Com o node tem que dar um ctrl+c para parar o comando dentro do terminal