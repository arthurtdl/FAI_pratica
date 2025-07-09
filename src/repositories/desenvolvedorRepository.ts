import { Prisma } from "@prisma/client"
import prisma from "@database";

class DesenvolvedorRepository {
    async create(data: Prisma.DesenvolvedorCreateInput) {
        const dev = await prisma.desenvolvedor.create({ data });
        return dev;
    }

    async findByLogin(login_dev: string) {
        const dev = await prisma.desenvolvedor.findUnique({
            where: { login_dev },
        });
        return dev;
    }

    async findAll() {
        const devs = await prisma.desenvolvedor.findMany();
        return devs;
    }

    async update(login_dev: string, data: Prisma.DesenvolvedorUpdateInput) {
        const dev = await prisma.desenvolvedor.update({
            where: { login_dev }, data
        });
        return dev;
    }

    async delete(login_dev: string) {
        const dev = await prisma.desenvolvedor.delete({
            where: { login_dev }
        })
        return dev;
    }
}

export default new DesenvolvedorRepository();