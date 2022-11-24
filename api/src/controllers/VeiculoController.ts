import { Request, Response } from "express";
import { veiculoRepository } from "src/repositories/veiculoRepository";

export class VeiculoController {
    static async buscarTodos(req: Request, res: Response) {
        try {
            const veiculos = await veiculoRepository.find();
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
            const veiculo = await veiculoRepository.findOneBy({ id: Number(id) });
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            return res.status(200).json(veiculo);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async cadastraVeiculo(req: Request, res: Response) {
        const novoVeiculo = req.body;
        try {
            const novoVeiculoCriado = await veiculoRepository.create(novoVeiculo);
            await veiculoRepository.save(novoVeiculoCriado);
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
            const veiculo = await veiculoRepository.findOneBy({ id: Number(id) });
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            await veiculoRepository.update(id, { placa: placa, ano: ano, modelo: modelo, marca: marca });
            return res.status(200).json({ mensagem: `id ${id} atualizado` });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async apagaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await veiculoRepository.findOneBy({ id: Number(id) });
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            await veiculoRepository.delete(Number(id));
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async inativaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await veiculoRepository.findOneBy({ id: Number(id) });
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            await veiculoRepository.update(id, { ativo: false });
            return res.status(200).json({ mensagem: `id ${id} inativado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async reativaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await veiculoRepository.findOneBy({ id: Number(id) });
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            await veiculoRepository.update(id, { ativo: true });
            return res.status(200).json({ mensagem: `id ${id} reativado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}