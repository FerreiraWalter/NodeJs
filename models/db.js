/**
 *  Arquivo específico para se conectar com o Banco de Dados
 */

const Sequelize = require("sequelize");

// Conexão com o banco de dados Mysql
const sequelize = new Sequelize('postapp', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
