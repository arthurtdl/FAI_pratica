import { Prisma } from "@prisma/client"
import prisma from "@database";

class ProjetoRepository {
    async create(data: Prisma.ProjetoCreateInput) {
        const projeto = await prisma.projeto.create({ data });
        return projeto;
    }

    async findById(id_projeto: string) {
        const projeto = await prisma.projeto.findUnique({
            where: { id_projeto },
        });
        return projeto;
    }

    async findAll() {
        const projetos = await prisma.projeto.findMany();
        return projetos;
    }

    async findByName(nome_projeto: string) {
    return prisma.projeto.findUnique({ where: { nome_projeto } });
    }

    async update(id_projeto: string, data: Prisma.ProjetoUpdateInput) {
        const projeto = await prisma.projeto.update({
            where: { id_projeto }, data
        });
        return projeto;
    }

    async delete(id_projeto: string) {
        const projeto = await prisma.projeto.delete({
            where: { id_projeto }
        })
        return projeto;
    }
}

export default new ProjetoRepository();