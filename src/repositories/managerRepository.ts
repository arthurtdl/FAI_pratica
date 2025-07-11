import { Prisma, Manager } from "@prisma/client"
import prisma from "@database";

class ManagerRepository {
    async create(data: Prisma.ManagerCreateInput): Promise<Manager> {
        const gerente = await prisma.manager.create({ data });
        return gerente;
    }

    async findById(id: number): Promise<Manager | null> {
        const gerente = await prisma.manager.findUnique({
            where: { id },
        });
        return gerente;
    }

    async findByEmail(email: string): Promise<Manager | null> {
        const gerente = await prisma.manager.findUnique({
            where: { email },
        });
        return gerente;
    }

    async findAll(): Promise<Manager[]> {
        const gerentes = await prisma.manager.findMany();
        return gerentes;
    }

    async update(id: number, data: Prisma.ManagerUpdateInput): Promise<Manager> {
        const gerente = await prisma.manager.update({
            where: { id }, data
        });
        return gerente;
    }

    async delete(id: number): Promise<Manager> {
        const gerente = await prisma.manager.delete({
            where: { id }
        })
        return gerente;
    }
}

export default new ManagerRepository();