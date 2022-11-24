import { Carro } from "@models/Carro";
import { AppDataSource } from "src/data-source";

export const veiculoRepository = AppDataSource.getRepository(Carro);