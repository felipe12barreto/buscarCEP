const express = require("express");
const app = express();
app.use(express.json());
const { buscarCep } = require("./controller/buscarCep");
const { buscarCepBd } = require("./intermediario");

app.get("/enderecos/:cep", buscarCepBd, buscarCep);

app.listen(3000);
