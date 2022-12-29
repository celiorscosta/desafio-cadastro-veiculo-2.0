import { IVeiculoRepository } from "src/repositories/prismaRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class VeiculoUseCase {

    constructor(
        @inject("VeiculoRepository") private veiculoRepository: IVeiculoRepository
    ) { }

    async buscarTodos() {
        return await this.veiculoRepository.buscarTodos();
    }

    async buscarPorId(id: number) {
        return await this.veiculoRepository.buscarPorId(id);
    }

    async cadastraVeiculo(ativo: boolean, placa: string, ano: number, modelo: string, marca: string) {
        return await this.veiculoRepository.cadastraVeiculo(ativo, placa, ano, modelo, marca);
    }

    async atualizaUmVeiculo(id: number, placa: string, ano: number, modelo: string, marca: string) {
        return await this.veiculoRepository.atualizaUmVeiculo(id, placa, ano, modelo, marca);
    }

    async apagaUmVeiculo(id: number) {
        return await this.veiculoRepository.apagaUmVeiculo(id);
    }

    async inativaUmVeiculo(id: number) {
        return await this.veiculoRepository.inativaUmVeiculo(id);

    }

    async reativaUmVeiculo(id: number) {
        return await this.veiculoRepository.reativaUmVeiculo(id);
    }
}