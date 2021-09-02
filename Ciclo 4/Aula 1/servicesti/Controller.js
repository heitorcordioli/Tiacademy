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

app.get('/atualizaservico', async(req,res)=>{
    await servico.findByPk(1)
    .then(servico =>{
        servico.nome='HTML/CSS/JS';
        servico.descricao='Páginas estáticas e dinâmicas estilizadas';
        servico.save();
        return res.json({servico});
    });
});

app.put('/editarservico', (req,res)=>{
    servico.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Serviço atualizado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });      
});

app.get('/servicospedidos', async(req,res)=>{
    await servico.findByPk(1, {
        include:[{all:true}]
    }).then(servico =>{
        return res.json({servico})
    });
});

app.put('/editarpedido', (req,res)=>{
    pedido.update(req.body,{
        where: {ServicoId: req.body.ServicoId}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        });
    });
});

//Exercício 1 - Faça a busca por serviços de clientes passando o id do cliente no corpo da requisição
app.get('/listacliente/:id',async(req,res)=>{
    await cliente. findByPk(1)
    .then(function(clientes){
        res.json({clientes})
    });
});
//Exercício 2 - Utilize a rota para consultar clientes e faça a edição de um cliente pelo método put
app.put('/editarcliente', (req,res)=>{
    cliente.update(req.body,{
        where: {id: req.body.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o Cliente."
        });
    });
});
//Exercício 3 - Utilize a rota para consultar pedidos e faça a edição de um pedido pelo método put
app.put('/editarpedido/:id', (req,res)=>{
    pedido.update(req.body,{
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o Pedido."
        });
    });
});

app.get('/excluircliente', async(req, res)=>{
    await cliente.destroy({
        where: {id: 2}
    });
});

app.delete('/apagarcliente/:id',(req,res)=>{
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente foi excluído com sucesso."
        });
    }).catch(function(){
        return res.status(400).json({
            error:true,
            message: "Não foi possível excluir o cliente"
        });
    });
});

let port=process.env.PORT || 3000; 

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
}); //Com o node tem que dar um ctrl+c para parar o comando dentro do terminal