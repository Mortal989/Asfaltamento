const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());


app.post('/api/cliques', (req, res) => {
    const { cliques } = req.body;
    fs.appendFileSync('contagem.txt', `Cliques: ${cliques}\n`);
    res.status(200).send('Contagem registrada!');
});


app.post('/api/dados', (req, res) => {
    const { nome, endereco, anoNascimento } = req.body;
    const dados = `Nome: ${nome}, Endereço: ${endereco}, Ano de Nascimento: ${anoNascimento}\n`;
    
    fs.appendFileSync('dados.txt', dados);
    res.status(200).send('Dados recebidos com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
