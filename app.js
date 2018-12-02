const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000 || 8080;
const app = express();

app.use(express.static('view'));
app.use(express.static('arquivos-css'));
app.use(express.static('img'));
app.use(express.static('fontes'));
app.use(express.static('arquivos-js'));



http.createServer(app)
    .listen(port, () => console.log(`Servidor rodando na porta ${port}`));