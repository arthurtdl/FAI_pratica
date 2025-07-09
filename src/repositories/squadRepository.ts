import { Prisma } from "@prisma/client"
import prisma from "@database";

class SquadRepository {
    async create(data: Prisma.SquadCreateInput) {
        const squad = await prisma.squad.create({ data });
        return squad;
    }

    async findByGerente(login_gerente_squad: string) {
        const squad = await prisma.squad.findUnique({
            where: { login_gerente_squad },
        });
        return squad;
    }

    async findByProjeto(id_projeto_squad: string) {
        const squad = await prisma.squad.findUnique({
            where: { id_projeto_squad },
        });
        return squad;
    }

    async findById(id_squad: string) {
        const squad = await prisma.squad.findUnique({
            where: { id_squad },
        });
        return squad;
    }

    async findAll() {
        const squads = await prisma.squad.findMany();
        return squads;
    }

    async update(id_squad: string, data: Prisma.SquadUpdateInput) {
        const squad = await prisma.squad.update({
            where: { id_squad }, data
        });
        return squad;
    }

    async delete(id_squad: string) {
        const squad = await prisma.squad.delete({
            where: { id_squad }
        })
        return squad;
    }
}

export default new SquadRepository();