const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //importando rotas de routes.js

const app = express();

app.use(cors());

app.use(express.json()); //transformando o codigo em algo entendível pela a aplicação

app.use(routes);

app.listen(3333);