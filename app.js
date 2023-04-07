const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
/*
app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'OK, Deu certo'
    });
});

module.exports = app;
/*
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev')); // middleware morgan do pacote "morgan"
app.use(bodyParser.urlencoded({ extended: false }));   // O middleware bodyParser é usado para analisar os corpos das solicitações HTTP e disponibilizar os dados como propriedades do objeto req.body para uso posterior
app.use(bodyParser.json()); // configurado para analisar dados em formato JSON no corpo das solicitações HTTP.

app.use((req, res, next) => {
    // permitir o acesso de qualquer origem ('*'), definindo os cabeçalhos permitidos e os métodos HTTP permitidos
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

// Quando não encontra rota, entra aqui:
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});
*/
module.exports = app;