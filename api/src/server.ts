import express from 'express';
import cors from 'cors';
import routes from './routes/veiculoRoutes';

import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(cors({ origin: '*' }));
    app.use(express.json());
    app.use(routes);

    app.get('/hello', (req, res) => {
        return res.json({ message: 'Ola, Typescript!' });
    });
    return app.listen(process.env.PORT, () => console.log(`Servidor esta rodando na porta ${process.env.PORT}`));
});

