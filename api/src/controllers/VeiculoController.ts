import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class VeiculoController {

    static async buscarTodos(req: Request, res: Response) {
        try {
            const veiculos = await prisma.carros.findMany();
            if (!veiculos)
                return res.status(400).json({ message: 'Oloco bixo, não há veículos na base de dados.' });
            return res.status(201).json(veiculos);
        } catch (error) {
            console.log("ERRO>:::::::::::::")
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async buscarPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await prisma.carros.findUnique({ where: { id: Number(id) } });
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
            const novoVeiculoCriado = await prisma.carros.create(novoVeiculo);
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
            const veiculo = await prisma.carros.findUnique({ where: { id: Number(id) } });
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            await prisma.carros.update({
                where: { id: Number(id) },
                data: {
                    placa: placa,
                    ano: ano,
                    modelo: modelo,
                    marca: marca
                }
            });

            return res.status(200).json({ mensagem: `id ${id} atualizado` });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async apagaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await prisma.carros.findUnique({ where: { id: Number(id) } });
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            await prisma.carros.delete({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Vish, deu erro "Internal Server Error".' });
        }
    }

    static async inativaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await prisma.carros.findUnique({ where: { id: Number(id) } });
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            await prisma.carros.update({

                where: { id: Number(id) },
                data: { ativo: false }
            });
            return res.status(200).json({ mensagem: `id ${id} inativado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async reativaUmVeiculo(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const veiculo = await prisma.carros.findUnique({ where: { id: Number(id) } });
            if (!veiculo)
                return res.status(404).json({ message: 'Oloco bixo, esse veículo não existe.' });
            await prisma.carros.update({
                where: { id: Number(id) },
                data: { ativo: true }
            });
            return res.status(200).json({ mensagem: `id ${id} reativado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}