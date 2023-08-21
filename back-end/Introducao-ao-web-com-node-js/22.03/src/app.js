// src/app.js

const express = require('express');
const fs = require('fs').promises;
const app = express();
app.use(express.json());

app.get('/chocolates/total', async (req, res) => {
  const cacauTrybe = await fs.readFile('./src/files/chocolates.json', 'utf-8');
    const totalChocolates = JSON.parse(cacauTrybe);
  res.status(200).json({ totalChocolates: totalChocolates.totalChocolates });
});

module.exports = app;