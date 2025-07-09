import { Prisma } from "@prisma/client"
import prisma from "@database";

class GerenteRepository {
    async create(data: Prisma.GerenteCreateInput) {
        const gerente = await prisma.gerente.create({ data });
        return gerente;
    }

    async findByLogin(login_gerente: string) {
        const gerente = await prisma.gerente.findUnique({
            where: { login_gerente },
        });
        return gerente;
    }

    async findAll() {
        const gerentes = await prisma.gerente.findMany();
        return gerentes;
    }

    async update(login_gerente: string, data: Prisma.GerenteUpdateInput) {
        const gerente = await prisma.gerente.update({
            where: { login_gerente }, data
        });
        return gerente;
    }

    async delete(login_gerente: string) {
        const gerente = await prisma.gerente.delete({
            where: { login_gerente }
        })
        return gerente;
    }
}

export default new GerenteRepository();