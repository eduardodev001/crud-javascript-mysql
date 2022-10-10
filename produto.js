const sequelize = require("sequelize");

const database = require("./db");
/*criando objeto */
const produto = database.define("Produto", {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: sequelize.STRING,
    allowNull: false,
  },
  dataCriacao: {
    type: sequelize.DATE,
    allowNull: false,
  },
});

module.exports = produto;

