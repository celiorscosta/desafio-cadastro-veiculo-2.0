import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669305186722 implements MigrationInterface {
    name = 'default1669305186722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "carros" ("id" SERIAL NOT NULL, "placa" character varying NOT NULL, "ano" integer NOT NULL, "modelo" character varying NOT NULL, "ativo" boolean NOT NULL, "marca" character varying NOT NULL, CONSTRAINT "PK_ba7be410cab15cfd6475fda1b9d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "carros"`);
    }

}
