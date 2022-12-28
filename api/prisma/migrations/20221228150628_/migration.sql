-- CreateTable
CREATE TABLE "carros" (
    "id" SERIAL NOT NULL,
    "placa" VARCHAR NOT NULL,
    "ano" INTEGER NOT NULL,
    "modelo" VARCHAR NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "marca" VARCHAR NOT NULL,

    CONSTRAINT "PK_ba7be410cab15cfd6475fda1b9d" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" SERIAL NOT NULL,
    "timestamp" BIGINT NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id")
);
