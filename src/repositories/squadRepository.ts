import { Prisma, Squad } from '@prisma/client';
import prisma from '@database';

class SquadRepository {
  async create(data: Prisma.SquadCreateInput): Promise<Squad> {
    const squad = await prisma.squad.create({ data });
    return squad;
  }

  async findByManager(managerId: number): Promise<Squad | null> {
    const squad = await prisma.squad.findUnique({
      where: { managerId },
    });
    return squad;
  }

  async findByProjeto(projectId: number): Promise<Squad | null> {
    const squad = await prisma.squad.findUnique({
      where: { projectId },
    });
    return squad;
  }

  async findById(id: number): Promise<Squad | null> {
    const squad = await prisma.squad.findUnique({
      where: { id },
    });
    return squad;
  }

  async findAll(): Promise<Squad[]> {
    const squads = await prisma.squad.findMany();
    return squads;
  }

  async update(id: number, data: Prisma.SquadUpdateInput): Promise<Squad> {
    const squad = await prisma.squad.update({
      where: { id },
      data,
    });
    return squad;
  }

  async delete(id: number): Promise<Squad> {
    const squad = await prisma.squad.delete({
      where: { id },
    });
    return squad;
  }
}

export default new SquadRepository();
