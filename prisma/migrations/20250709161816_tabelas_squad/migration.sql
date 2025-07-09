/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Squad" (
    "id_squad" TEXT NOT NULL,
    "login_gerente_squad" TEXT NOT NULL,
    "id_projeto_squad" TEXT NOT NULL,

    CONSTRAINT "Squad_pkey" PRIMARY KEY ("id_squad")
);

-- CreateTable
CREATE TABLE "Projeto" (
    "id_projeto" TEXT NOT NULL,
    "nome_projeto" TEXT NOT NULL,
    "valor_venda" DOUBLE PRECISION NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "houve_discovery" BOOLEAN NOT NULL,
    "ha_prototipo" BOOLEAN NOT NULL,
    "nome_cliente" TEXT NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id_projeto")
);

-- CreateTable
CREATE TABLE "Gerente" (
    "login_gerente" TEXT NOT NULL,
    "nome_gerente" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "periodo" TEXT NOT NULL,
    "data_entrada" TIMESTAMP(3) NOT NULL,
    "data_ondas" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gerente_pkey" PRIMARY KEY ("login_gerente")
);

-- CreateTable
CREATE TABLE "Desenvolvedor" (
    "login_dev" TEXT NOT NULL,
    "nome_dev" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "periodo" TEXT NOT NULL,
    "data_entrada" TIMESTAMP(3) NOT NULL,
    "id_squad_dev" TEXT NOT NULL,

    CONSTRAINT "Desenvolvedor_pkey" PRIMARY KEY ("login_dev")
);

-- CreateIndex
CREATE UNIQUE INDEX "Squad_login_gerente_squad_key" ON "Squad"("login_gerente_squad");

-- CreateIndex
CREATE UNIQUE INDEX "Squad_id_projeto_squad_key" ON "Squad"("id_projeto_squad");

-- AddForeignKey
ALTER TABLE "Squad" ADD CONSTRAINT "Squad_login_gerente_squad_fkey" FOREIGN KEY ("login_gerente_squad") REFERENCES "Gerente"("login_gerente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Squad" ADD CONSTRAINT "Squad_id_projeto_squad_fkey" FOREIGN KEY ("id_projeto_squad") REFERENCES "Projeto"("id_projeto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Desenvolvedor" ADD CONSTRAINT "Desenvolvedor_id_squad_dev_fkey" FOREIGN KEY ("id_squad_dev") REFERENCES "Squad"("id_squad") ON DELETE RESTRICT ON UPDATE CASCADE;
