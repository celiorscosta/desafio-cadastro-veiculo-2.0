import { Carros, PrismaClient } from '@prisma/client';
import { injectable } from 'tsyringe';

const prisma = new PrismaClient();

export interface IVeiculoRepository {
    buscarTodos(): Promise<Carros[]>;
    buscarPorId(id: number): Promise<Carros>;
    cadastraVeiculo(ativo: boolean, placa: string, ano: number, modelo: string, marca: string): Promise<Carros>;
    atualizaUmVeiculo(id: number, placa: string, ano: number, modelo: string, marca: string): Promise<Boolean>;
    apagaUmVeiculo(id: number): Promise<Boolean>;
    inativaUmVeiculo(id: number): Promise<Boolean>;
    reativaUmVeiculo(id: number): Promise<Boolean>;
}

@injectable()
export class VeiculoRepository implements IVeiculoRepository {
    constructor() { }

    async buscarTodos(): Promise<Carros[]> {
        return await prisma.carros.findMany({ where: { ativo: true } });
    }

    async buscarPorId(id: number): Promise<Carros> {
        return await prisma.carros.findUnique({ where: { id: id } });
    }

    async cadastraVeiculo(ativo: boolean, placa: string, ano: number, modelo: string, marca: string): Promise<Carros> {
        return await prisma.carros.create({
            data: {
                ativo: ativo,
                placa: placa,
                ano: ano,
                modelo: modelo,
                marca: marca
            }
        });
    }

    async atualizaUmVeiculo(id: number, placa: string, ano: number, modelo: string, marca: string): Promise<Boolean> {
        const veiculo = await prisma.carros.findUnique({ where: { id: Number(id) } });
        if (!veiculo)
            return false;

        await prisma.carros.update({
            where: { id: Number(id) },
            data: {
                placa: placa,
                ano: ano,
                modelo: modelo,
                marca: marca
            }
        });

        return true;
    }

    async apagaUmVeiculo(id: number): Promise<Boolean> {
        const veiculo = await prisma.carros.findUnique({ where: { id: id } });
        if (!veiculo)
            return false;

        await prisma.carros.delete({ where: { id: Number(id) } });
        return true;
    }

    async inativaUmVeiculo(id: number): Promise<Boolean> {
        const veiculo = await prisma.carros.findUnique({ where: { id: id } });
        if (!veiculo)
            return false;
        await prisma.carros.update({

            where: { id: Number(id) },
            data: { ativo: false }
        });

        return true;
    }

    async reativaUmVeiculo(id: number): Promise<Boolean> {
        const veiculo = await prisma.carros.findUnique({ where: { id: id } });
        if (!veiculo)
            return false;
        await prisma.carros.update({

            where: { id: Number(id) },
            data: { ativo: true }
        });

        return true;
    }

} 