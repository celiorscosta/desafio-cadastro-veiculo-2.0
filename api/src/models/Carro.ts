import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('carros')
export class Carro {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    ano: number;
    @Column()
    modelo: string;
    @Column()
    ativo: boolean;
    @Column()
    marca: string;
}