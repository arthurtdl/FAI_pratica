import { Request, Response, NextFunction } from 'express';
import { createProjetoSchema } from '@DTOs';
import { projetoRepository } from '@repositories';

class ProjetoController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const projetoData = createProjetoSchema.parse(req.body);

            const existing  = await projetoRepository.findByName(projetoData.nome_projeto);
            if (existing) {

                return next({
                    status: 409,
                    message: 'Já existe um projeto com esse nome'
                });
            }

            const projeto = await projetoRepository.create(projetoData)

            res.locals = {
                status: 201,
                message: "Projeto criado com sucesso!",
                data: projeto
            };

            return next();

        } catch (error) {
            return next(error);
        }
    }

}

export default new ProjetoController();