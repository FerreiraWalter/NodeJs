/**
 * const express = cria uma função com todos os dados do EXPRESS
 * const app = cria um cópia do EXPRESS (principal do nosso sistema)
 * EXPRESS é um framework orientado a rotas
 */

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

// Config
    // Template Engine
    app.engine("handlebars", handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // BodyParser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

// Rotas
    app.get('/cad', function(req, res) {
        res.render('formulario');
    });

    app.post('/add', function(req, res) {
        res.send('Texto: ' + req.body.titulo + " Conteudo: " + req.body.conteudo);
    });

// Iniciando o servidor na porta 8081
app.listen(8081, function(){
    console.log("Servidor Rodando!");
});
