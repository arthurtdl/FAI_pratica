import { Request, Response, NextFunction } from 'express';
import { createManagerSchema } from '@DTOs';
import { ManagerRepository } from '@repositories';

class ManagerController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const managerData = createManagerSchema.parse(req.body);

            const existing  = await ManagerRepository.findByEmail(managerData.email);
            if (existing) {

                return next({
                    status: 409,
                    message: 'Já existe um gerente com esse email'
                });
            }

            const manager = await ManagerRepository.create(managerData)

            res.locals = {
                status: 201,
                message: "Gerente adicionado com sucesso!",
                data: manager
            };

            return next();

        } catch (error) {
            return next(error);
        }
    }

}

export default new ManagerController();