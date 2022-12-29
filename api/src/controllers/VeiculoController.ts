import { Request, Response } from "express";
import { container } from "tsyringe";
import { VeiculoUseCase } from "./VeicleUseCase";

const veiculoUseCase = container.resolve(VeiculoUseCase);

export class VeiculoController {
    static async buscarTodos(req: Request, res: Response) {
        try {
            const veiculos = await veiculoUseCase.buscarTodos();
            if (!veiculos)
                return res.status(400).json({ message: 'Oloco bixo, não há veículos na base de dados.' });
            return res.status(201).json(veiculos);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async buscarPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await veiculoUseCase.buscarPorId(Number(id));
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            return res.status(200).json(veiculo);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async cadastraVeiculo(req: Request, res: Response) {
        const { ativo, placa, ano, modelo, marca } = req.body;

        try {
            const novoVeiculoCriado = await veiculoUseCase.cadastraVeiculo(ativo, placa, ano, modelo, marca);
            return res.status(200).json(novoVeiculoCriado);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async atualizaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        const { placa, ano, modelo, marca } = req.body;
        try {
            const veiculo = await veiculoUseCase.atualizaUmVeiculo(Number(id), placa, ano, modelo, marca)

            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            return res.status(200).json({ mensagem: `id ${id} atualizado` });

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async apagaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await veiculoUseCase.apagaUmVeiculo(Number(id));

            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });

            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async inativaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await veiculoUseCase.inativaUmVeiculo(Number(id));
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });

            return res.status(200).json({ mensagem: `id ${id} inativado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async reativaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await veiculoUseCase.reativaUmVeiculo(Number(id));
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });

            return res.status(200).json({ mensagem: `id ${id} reativado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}