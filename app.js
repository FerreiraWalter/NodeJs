/**
 * const express = cria uma função com todos os dados do EXPRESS
 * const app = cria um cópia do EXPRESS (principal do nosso sistema)
 * EXPRESS é um framework orientado a rotas
 */

const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("Olá, " + req.params.nome + ", você é " + req.params.cargo);
});


app.listen(8081, function(){
    console.log("Servidor Rodando!")
});
