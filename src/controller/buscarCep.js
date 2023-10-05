const { buscarEndereco } = require("utils-playground");
const fs = require("fs/promises");

const buscarCep = async (req, res) => {
  try {
    const { cep } = req.params;
    const enderecoApi = await buscarEndereco(cep);

    const dados = await fs.readFile("./src/enderecos.json");
    const dadosJs = JSON.parse(dados);
    dadosJs.push(enderecoApi);
    await fs.writeFile("./src/enderecos.json", JSON.stringify(dadosJs));

    return res.status(200).json(enderecoApi);
  } catch (error) {
    return res.status(500).json("erro no servidor");
  }
};

module.exports = {
  buscarCep,
};
