import { Prisma, Project } from "@prisma/client"
import prisma from "@database";

class ProjectRepository {
    async create(data: Prisma.ProjectCreateInput): Promise<Project> {
        const projeto = await prisma.project.create({ data });
        return projeto;
    }

    async findById(id: number): Promise<Project | null> {
        const projeto = await prisma.project.findUnique({
            where: { id },
        });
        return projeto;
    }

    async findAll(): Promise<Project[]> {
        const projetos = await prisma.project.findMany();
        return projetos;
    }

    async findByName(name: string): Promise<Project | null> {
    return prisma.project.findUnique({ where: { name } });
    }

    async update(id: number, data: Prisma.ProjectUpdateInput): Promise<Project> {
        const projeto = await prisma.project.update({
            where: { id }, data
        });
        return projeto;
    }

    async delete(id: number): Promise<Project> {
        const projeto = await prisma.project.delete({
            where: { id }
        })
        return projeto;
    }
}

export default new ProjectRepository();