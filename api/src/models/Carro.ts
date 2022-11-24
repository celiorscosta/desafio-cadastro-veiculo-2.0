import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('carros')
export class Carro {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    placa: string;
    @Column()
    ano: number;
    @Column()
    modelo: string;
    @Column()
    ativo: boolean;
    @Column()
    marca: string;
}