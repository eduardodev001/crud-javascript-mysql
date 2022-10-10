(async () => {
  const database = require("./db");
  const produto = require("./produto");
/*criar tabela caso ela não exista*/
  await database.sync();
  /*Inserindo registros */
  await produto.create({
    nome: "Eduardo Aquiles",
    dataCriacao: Date(),
  });
/*criando metodos crud */
  await produto.create({
    nome: "Ricardo",
    dataCriacao: Date(),
  });

  await produto.create({
    nome: "Elio",
    dataCriacao: Date(),
  });
  /*metodo de alteração no banco */
  const alterarProduto = await produto.findByPk(2); /*editar produto 2*/
  alterarProduto.nome = "Nome Alterado";
  await alterarProduto.save();
  /*detetar registros */
  produto.destroy({ where: { id: 1 } }); /*excluir produto 1 */

  const findProd = await produto.findByPk(3); /*buscar produto 3*/
  console.log(findProd);

  const findAllProd = await produto.findAll(); /*buscar todos*/
  console.log(findAllProd);

})();