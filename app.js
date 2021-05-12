/**
 * const express = cria uma função com todos os dados do EXPRESS
 * const app = cria um cópia do EXPRESS (principal do nosso sistema)
 * EXPRESS é um framework orientado a rotas
 */

const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");


// Config
    // Template Engine
    app.engine("handlebars", handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Conexão com o banco de dados Mysql
    const sequelize = new Sequelize('cadastrousuario', 'root', '', {
        host: "localhost",
        dialect: "mysql"
    });

app.listen(8081, function(){
    console.log("Servidor Rodando!")
});
