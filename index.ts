import express from 'express';
import { getUsuario } from './controllers/usuarioController';

const app = express();

app.use(express.json());

app.get('/usuario', getUsuario);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
