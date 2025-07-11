import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { createSquadSchema } from '@DTOs';
import { SquadRepository } from '@repositories';

class SquadController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const squadData = createSquadSchema.parse(req.body);

            const managerInUse = await SquadRepository.findByManager(squadData.managerId);
            if (managerInUse) {

                return next({
                    status: 409,
                    message: "Este manager já está alocado em uma squad."
                });
            }

            const projectInUse = await SquadRepository.findByProject(squadData.projectId);
            if (projectInUse) {
                return next({
                    status: 409,
                    message: "Este project já pertence a uma squad."
                });
            }

            const dataForPrisma: Prisma.SquadCreateInput = {
                manager: {
                    connect: {
                        id: squadData.managerId
                    }
                },
                project: {
                    connect: {
                        id: squadData.projectId
                    }
                }
            };

            const squad = await SquadRepository.create(dataForPrisma);

            res.locals = {
                status: 201,
                message: "Squad criada com sucesso!",
                data: squad
            };

            return next();

        } catch (error) {
            return next(error);
        }
    }

}

export default new SquadController();