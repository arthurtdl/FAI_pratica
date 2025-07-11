import { Request, Response, NextFunction } from 'express';
import { createProjectSchema } from '@DTOs';
import { ProjectRepository } from '@repositories';

class ProjectController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const projectData = createProjectSchema.parse(req.body);

            const existing  = await ProjectRepository.findByName(projectData.name);
            if (existing) {

                return next({
                    status: 409,
                    message: 'Já existe um project com esse nome'
                });
            }

            const project = await ProjectRepository.create(projectData)

            res.locals = {
                status: 201,
                message: "Project criado com sucesso!",
                data: project
            };

            return next();

        } catch (error) {
            return next(error);
        }
    }

}

export default new ProjectController();