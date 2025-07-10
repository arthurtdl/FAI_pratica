import { Request, Response, NextFunction } from 'express';
import { createGerenteSchema } from '@DTOs';
import { gerenteRepository } from '@repositories';

class GerenteController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const gerenteData = createGerenteSchema.parse(req.body);

            const existing  = await gerenteRepository.findByLogin(gerenteData.login_gerente);
            if (existing) {

                return next({
                    status: 409,
                    message: 'Já existe um gerente com esse login'
                });
            }

            const gerente = await gerenteRepository.create(gerenteData)

            res.locals = {
                status: 201,
                message: "Gerente adicionado com sucesso!",
                data: gerente
            };

            return next();

        } catch (error) {
            return next(error);
        }
    }

}

export default new GerenteController();