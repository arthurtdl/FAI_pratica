-- AlterTable
ALTER TABLE "Desenvolvedor" ALTER COLUMN "data_nascimento" SET DATA TYPE TEXT,
ALTER COLUMN "data_entrada" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Gerente" ALTER COLUMN "data_nascimento" SET DATA TYPE TEXT,
ALTER COLUMN "data_entrada" SET DATA TYPE TEXT,
ALTER COLUMN "data_ondas" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Projeto" ALTER COLUMN "data_inicio" SET DATA TYPE TEXT,
ALTER COLUMN "data_fim" SET DATA TYPE TEXT;
