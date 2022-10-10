const sequelize = require("sequelize");

const componenteSequelize = new sequelize("dbProduto", "root", "123456", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = componenteSequelize;