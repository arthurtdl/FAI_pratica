/*
  Warnings:

  - A unique constraint covering the columns `[nome_projeto]` on the table `Projeto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Projeto_nome_projeto_key" ON "Projeto"("nome_projeto");
