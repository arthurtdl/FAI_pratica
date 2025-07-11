import { Prisma, Developer } from "@prisma/client"
import prisma from "@database";

class DeveloperRepository {
    async create(data: Prisma.DeveloperCreateInput): Promise<Developer> {
        const dev = await prisma.developer.create({ data });
        return dev;
    }

    async findById(id: number): Promise<Developer | null> {
        const dev = await prisma.developer.findUnique({
            where: { id },
        });
        return dev;
    }

    async findByEmail(email: string): Promise<Developer | null> {
        const dev = await prisma.developer.findUnique({
            where: { email },
        });
        return dev;
    }

    async findAll(): Promise<Developer[]> {
        const devs = await prisma.developer.findMany();
        return devs;
    }

    async update(id: number, data: Prisma.DeveloperUpdateInput): Promise<Developer> {
        const dev = await prisma.developer.update({
            where: { id }, data
        });
        return dev;
    }

    async delete(id: number): Promise<Developer> {
        const dev = await prisma.developer.delete({
            where: { id }
        })
        return dev;
    }
}

export default new DeveloperRepository();