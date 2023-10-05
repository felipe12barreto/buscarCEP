const fs = require("fs/promises");

const buscarCepBd = async (req, res, next) => {
  const { cep } = req.params;

  try {
    const dados = await fs.readFile("./src/enderecos.json");
    const dadosJs = JSON.parse(dados);

    const cepBuscado = dadosJs.find((endereco) => {
      return endereco.cep.replace(/[\.!-]/g, "") === cep;
    });

    if (cepBuscado) {
      return res.status(200).json(cepBuscado);
    }
    next();
  } catch (error) {
    return res.status(500).json("erro no servidor");
  }
};
module.exports = {
  buscarCepBd,
};
