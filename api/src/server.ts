import express from 'express';
import cors from 'cors';

import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
    const app = express();
    const port = 3000;
    app.use(cors({ origin: '*' }));
    app.get('/', (req, res) => {
        return res.json({ message: 'Ola, Typescript!' });
    });
    return app.listen(port, () => console.log(`Servidor esta rodando na porta ${port}`));
});

