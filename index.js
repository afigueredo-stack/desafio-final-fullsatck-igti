import express from 'express';
import cors from 'cors';
import { transactionRouter } from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Vinculando o React ao app
 */
app.use(express.static(path.join((fileURLToPath(import.meta.url)), 'client/build')));

/**
 * Rota raiz
 */
app.get('/api/', (_, response) => {
  response.send({
    message:
      'Bem-vindo à API de lançamentos. Acesse /transaction e siga as orientações',
  });
});

/**
     * Definição de porta e
     * inicialização do app
  */
const APP_PORT = process.env.PORT || 3001;
app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});

/**
 * Rotas principais do app
 */
app.use('/api/transaction', transactionRouter);
