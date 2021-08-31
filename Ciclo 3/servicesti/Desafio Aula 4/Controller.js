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

app.get('/listaservicos', async(req, res)=>{
    await servico.findAll({
        order: [['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});

app.get('/ofertas', async(req, res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json(servicos);
    });
});

app.get('/servico/:id', async(req,res)=>{
    servico.findByPk(req.params.id)
    .then(servico =>{
        return res.json({
            error: false,
            servico
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});
//Exercício 1 - Visualize todos os clientes
app.get('/listaclientes', async(req, res)=>{
    await cliente.findAll({
    }).then(function(clientes){
        res.json({clientes})
    });
});
//Exercício 2 - Visualize os clientes em ordem de antiguidade
app.get('/listaadd', async(req, res)=>{
    await cliente.findAll({
        order: [['createdAt']]
    }).then(function(clientes){
        res.json({clientes})
    });
});
//Exercício 3 - Visualize todos os pedidos
app.get('/listapedidos', async(req, res)=>{
    await pedido.findAll({
    }).then(function(pedidos){
        res.json({pedidos})
    });
});
//Exercício 4 - Visualize o pedido por ordem a partir do maior valor
app.get('/listapedidosordem', async(req, res)=>{
    await pedido.findAll({
        order: [['valor', 'DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});
//Exercício 5 - Informe quantos clientes estão na nossa base de dados
app.get('/qtdeclientes', async(req, res)=>{
    await cliente.count('id')
    .then(function(clientes){
        res.json(clientes);
    });
});
//Exercício 6 - Informe a quantidade de pedidos solicitados.
app.get('/qtdepedidos', async(req, res)=>{
    await pedido.count('ClienteId')
    .then(function(pedidos){
        res.json(pedidos);
    });
});
//Desafio 4
app.get('/cliente/:id', async(req,res)=>{
    await pedido.sum('valor',{where: {ClienteId:req.params.id}})
    .then(function(pedidos){
        return res.json(pedidos);
    });   
});

let port=process.env.PORT || 3000; 

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
}); //Com o node tem que dar um ctrl+c para parar o comando dentro do terminal