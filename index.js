/**
 * const express = cria uma função com todos os dados do EXPRESS
 * const app = cria um cópia do EXPRESS (principal do nosso sistema)
 * EXPRESS é um framework orientado a rotas
 */

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");

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
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.send("Post criado com sucesso!")
        }).catch(function(erro){
            res.send("Ocorreu um erro: " + erro)
        });
    });

// Iniciando o servidor na porta 8081
app.listen(8081, function(){
    console.log("Servidor Rodando!");
});
