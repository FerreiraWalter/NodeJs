/**
 * Se conectando a um banco de dados usando SEQUELIZE
 */

const Sequelize = require("sequelize");
const sequelize = new Sequelize('cadastrousuario', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

/*
sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!");
}).catch(function(erro) {
    console.log("Falha ao se conectar: " + erro);
});
*/

/**
 *  Criação de MODEL para postagem
 */

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

/**
 *  Sincroniza o MODEL com o MYSQL
 *  Inserindo a parada do Bando de dados
 */

//Postagem.sync({force: true});
/*
Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "dsanfudisnfasiudbnfiuasbfoasi"
});
 */

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// Sincroniza o MODEL com o MYSQL
//Usuario.sync({force: true});

/*
Usuario.create({
    nome: "Walter",
    sobrenome: "Júnior",
    idade: 19,
    email: "email@teste.com"
});
*/