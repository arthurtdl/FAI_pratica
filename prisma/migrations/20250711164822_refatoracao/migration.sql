/*
  Warnings:

  - The primary key for the `Squad` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_projeto_squad` on the `Squad` table. All the data in the column will be lost.
  - You are about to drop the column `id_squad` on the `Squad` table. All the data in the column will be lost.
  - You are about to drop the column `login_gerente_squad` on the `Squad` table. All the data in the column will be lost.
  - You are about to drop the `Desenvolvedor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gerente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Projeto` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[managerId]` on the table `Squad` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[projectId]` on the table `Squad` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `managerId` to the `Squad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Squad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Desenvolvedor" DROP CONSTRAINT "Desenvolvedor_id_squad_dev_fkey";

-- DropForeignKey
ALTER TABLE "Squad" DROP CONSTRAINT "Squad_id_projeto_squad_fkey";

-- DropForeignKey
ALTER TABLE "Squad" DROP CONSTRAINT "Squad_login_gerente_squad_fkey";

-- DropIndex
DROP INDEX "Squad_id_projeto_squad_key";

-- DropIndex
DROP INDEX "Squad_login_gerente_squad_key";

-- AlterTable
ALTER TABLE "Squad" DROP CONSTRAINT "Squad_pkey",
DROP COLUMN "id_projeto_squad",
DROP COLUMN "id_squad",
DROP COLUMN "login_gerente_squad",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "managerId" INTEGER NOT NULL,
ADD COLUMN     "projectId" INTEGER NOT NULL,
ADD CONSTRAINT "Squad_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Desenvolvedor";

-- DropTable
DROP TABLE "Gerente";

-- DropTable
DROP TABLE "Projeto";

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "saleValue" DOUBLE PRECISION NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "hadDiscovery" BOOLEAN NOT NULL,
    "havePrototype" BOOLEAN NOT NULL,
    "clientName" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "semester" TEXT NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "leadershipEntry" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Developer" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "semester" TEXT NOT NULL,
    "entryDate" TIMESTAMP(3) NOT NULL,
    "squadId" INTEGER NOT NULL,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_email_key" ON "Manager"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Developer_email_key" ON "Developer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Squad_managerId_key" ON "Squad"("managerId");

-- CreateIndex
CREATE UNIQUE INDEX "Squad_projectId_key" ON "Squad"("projectId");

-- AddForeignKey
ALTER TABLE "Squad" ADD CONSTRAINT "Squad_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Squad" ADD CONSTRAINT "Squad_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Developer" ADD CONSTRAINT "Developer_squadId_fkey" FOREIGN KEY ("squadId") REFERENCES "Squad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
