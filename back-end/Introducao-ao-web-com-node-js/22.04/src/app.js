// src/app.js
const express = require('express');
const valiNome = require('./middlewares/validacaoNome');
const vpreco = require('./middlewares/validacaoPreco');
const vdata = require('./middlewares/valiData');
const vdescrip = require('./middlewares/valiDescricao');
const vdifi = require('./middlewares/valiDifi');
const vnota = require('./middlewares/valiNota');
const vinfo = require('./middlewares/valiInfo');
const vToken = require('./middlewares/valiToken');
const app = express();
app.use(express.json());

const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post('/signup', vinfo, (_req, res) => {
  const token = generateToken();
    res.status(201).json({ message: token });
  });

app.post('/activities', vToken, valiNome, vpreco, vdata, vdescrip, vdifi, vnota, (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!' });
  });

module.exports = app;