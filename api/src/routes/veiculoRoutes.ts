import { VeiculoController } from "@controllers/VeiculoController";
import { Router } from "express";

const routes = Router();
routes
    .get("/", VeiculoController.buscarTodos)
    .get("/carros", VeiculoController.buscarTodos)
    .get("/carros/:id", VeiculoController.buscarPorId)

    .post("/carros/novo", VeiculoController.cadastraVeiculo)

    .put('/carros/:id/atualiza', VeiculoController.atualizaUmVeiculo)
    .put('/carros/:id/inativa', VeiculoController.inativaUmVeiculo)
    .put('/carros/:id/reativa', VeiculoController.reativaUmVeiculo)

    .delete('/carros/:id/deleta', VeiculoController.apagaUmVeiculo);

export default routes;