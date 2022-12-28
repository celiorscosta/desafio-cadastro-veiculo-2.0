import { Carro } from "@models/Carro";


export interface IVeiculoRepository {
    getAll();
    getById();
}


export class VeiculoRepository implements IVeiculoRepository {
    getAll() {
        throw new Error("Method not implemented.");
    }
    getById() {
        throw new Error("Method not implemented.");
    }

}
