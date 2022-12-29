import { IVeiculoRepository, VeiculoRepository } from "src/repositories/prismaRepository";
import { container } from "tsyringe";

container.registerSingleton<IVeiculoRepository>(
    "VeiculoRepository",
    VeiculoRepository
);