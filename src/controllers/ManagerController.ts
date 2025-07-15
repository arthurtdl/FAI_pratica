import { Request, Response, NextFunction } from 'express';
import { createManagerSchema, updateManagerSchema } from '@DTOs';
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

    async readOne(req: Request, res: Response, next: NextFunction) {
            try {
              const { id } = req.params;
        
              const manager = await ManagerRepository.findById(parseInt(id, 10));
        
              if (!manager) {
                return next({
                  status: 404,
                  message: 'Manager not found',
                });
              }
        
              res.locals = {
                status: 200,
                data: manager,
              };
        
              return next();
            } catch (error) {
              return next(error);
            }
          }

    async readAll(_req: Request, res: Response, next: NextFunction) {
            try {
                const allManagers = await ManagerRepository.findAll();
    
                res.locals = {
                    status: 200,
                    data: allManagers,
                };
    
                return next();
            } catch (error) {
                return next(error);
            }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const managerId = parseInt(req.params.managerId, 10);
            const managerData = updateManagerSchema.parse(req.body);

            const manager = await ManagerRepository.update(managerId, managerData);

            res.locals = {
                status: 200,
                message: 'Gerente updated',
                data: manager
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const managerId = parseInt(req.params.managerId, 10);

            await ManagerRepository.delete(managerId);

            res.locals = {
                status: 200,
                message: 'Gerente deleted',
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

}

export default new ManagerController();