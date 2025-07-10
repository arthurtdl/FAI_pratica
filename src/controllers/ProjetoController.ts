import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { createProjetoSchema } from '@DTOs';
import { SquadRepository } from '@repositories';

class SquadController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const projetoData = createProjetoSchema.parse(req.body);

            const gerenteInUse = await SquadRepository.findById(projetoData.id_projeto);
            if (gerenteInUse) {

                return next({
                    status: 409,
                    message: "Este gerente já está alocado em uma squad."
                });
            }

            const projetoInUse = await SquadRepository.findByProjeto(squadData.id_projeto_squad);
            if (projetoInUse) {
                return next({
                    status: 409,
                    message: "Este projeto já pertence a uma squad."
                });
            }

            const dataForPrisma: Prisma.SquadCreateInput = {
                gerente: {
                    connect: {
                        login_gerente: squadData.login_gerente_squad
                    }
                },
                projeto: {
                    connect: {
                        id_projeto: squadData.id_projeto_squad
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