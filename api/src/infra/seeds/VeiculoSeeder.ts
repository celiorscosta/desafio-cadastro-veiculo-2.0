import { Carro } from '../../models/Carro';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class VeiculoSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const veiculoRepository = dataSource.getRepository(Carro);
        const veiculoData = [
            {
                placa: 'AAA1111',
                ano: 2020,
                modelo: 'Versa SL',
                ativo: true,
                marca: 'Nissan',
            },
            {
                placa: 'BBB2222',
                ano: 2020,
                modelo: 'Prisma',
                ativo: true,
                marca: 'Chevrolet'
            },
            {
                placa: 'CCC3333',
                ano: 2020,
                modelo: 'Fusca',
                ativo: true,
                marca: 'Volkswagen'
            }, {
                placa: 'DDD4444',
                ano: 2020,
                modelo: 'Uno',
                ativo: true,
                marca: 'Fiat'
            }
        ];

        for (let index = 0; index < veiculoData.length; index++) {
            let veic = await veiculoRepository.findOneBy({ placa: veiculoData[index].placa });
            console.log(veic);
            if (!veic) {
                const newVeiculo = veiculoRepository.create(veiculoData);
                await veiculoRepository.save(newVeiculo);
            }
        }
    }

}