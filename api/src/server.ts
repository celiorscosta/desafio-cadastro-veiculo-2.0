import 'reflect-metadata';
import "./shared/containers"
import express from 'express';
import cors from 'cors';
import routes from './routes/veiculoRoutes';

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(routes);

app.get('/hello', (req, res) => {
    return res.json({ message: 'Ola, Typescript!' });
});
app.listen(process.env.PORT, () => console.log(`Servidor esta rodando na porta ${process.env.PORT}`));


