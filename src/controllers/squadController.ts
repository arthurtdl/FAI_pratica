import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { createSquadSchema, updateSquadSchema } from '@DTOs';
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

    async readAll(_req: Request, res: Response, next: NextFunction) {
        try {
            const allSquads = await SquadRepository.findAll();

            res.locals = {
                status: 200,
                data: allSquads,
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const squadId = parseInt(req.params.squadId, 10);
            const squadData = updateSquadSchema.parse(req.body);

            const dataForPrisma: Prisma.SquadUpdateInput = {};

            if (squadData.managerId !== undefined) {
                dataForPrisma.manager = {
                    connect: {
                        id: squadData.managerId,
                    }
                };
            }

            if (squadData.projectId !== undefined) {
                dataForPrisma.project = {
                    connect: {
                        id: squadData.projectId,
                    }
                };
            }

            const squad = await SquadRepository.update(squadId, dataForPrisma);

            res.locals = {
                status: 200,
                data: squad,
                message: 'Squad updated',
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const squadId = parseInt(req.params.squadId, 10);

            await SquadRepository.delete(squadId);

            res.locals = {
                status: 200,
                message: 'Squad deleted',
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

}

export default new SquadController();