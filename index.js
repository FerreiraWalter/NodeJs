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
    // Template Engine (Lembra o Blade do Laravel)
    app.engine("handlebars", handlebars({
        defaultLayout: 'main',
        // Peguei essa parte no StackOverflow
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    }));
    app.set('view engine', 'handlebars');

    // BodyParser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

// Rotas
    app.get('/', function(req, res) {
        // .all() pega todos os dados da tabela
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {
            // Vai passar toda tabela para página home (posts)
            res.render("home", {posts: posts});
        });
    });

    app.get('/cad', function(req, res) {
        // .render carrega uma página HTML criada
        res.render('formulario');
    });

    app.post('/add', function(req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){ // Se der tudo certo volta para página principal
            res.redirect('/');
        }).catch(function(erro){ // Mano deu erro aqui!
            res.send("Ocorreu um erro: " + erro);
        });
    });

    app.get('/deletar/:id', function(req, res) {
        Post.destroy({where: { // Deletando onde o id = ?
            'id': req.params.id
        }}).then(function() {
            res.send("Postagem deletada com sucesso!");
        }).catch(function(erro) {
            res.send("Esta postagem não existe!");
        });
    });

// Iniciando o servidor na porta 8081
app.listen(8081, function(){
    console.log("Servidor Rodando!");
});
