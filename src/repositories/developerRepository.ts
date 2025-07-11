import { Prisma, Developer } from "@prisma/client"
import prisma from "@database";

class DeveloperRepository {
    async create(data: Prisma.DeveloperCreateInput) {
        const dev = await prisma.developer.create({ data });
        return dev;
    }

    async findById(id: number) {
        const dev = await prisma.developer.findUnique({
            where: { id },
        });
        return dev;
    }

    async findAll() {
        const devs = await prisma.developer.findMany();
        return devs;
    }

    async update(id: number, data: Prisma.DeveloperUpdateInput) {
        const dev = await prisma.developer.update({
            where: { id }, data
        });
        return dev;
    }

    async delete(id: number) {
        const dev = await prisma.developer.delete({
            where: { id }
        })
        return dev;
    }
}

export default new DeveloperRepository();