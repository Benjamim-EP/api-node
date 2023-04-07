const http = require('http');
const app = require('../app');
const port = process.env.PORT || 3000; // caso a porta n esteja definida, usar a porta 3000
const server = http.createServer(app);
server.listen(port);

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'OK, Deu certo'
    });
});