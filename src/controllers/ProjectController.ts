import { Request, Response, NextFunction } from 'express';
import { createProjectSchema, updateProjectSchema } from '@DTOs';
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

    async readAll(_req: Request, res: Response, next: NextFunction) {
        try {
            const allProjects = await ProjectRepository.findAll();

            res.locals = {
                status: 200,
                data: allProjects,
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const projectId = parseInt(req.params.projectId, 10);
            const projectData = updateProjectSchema.parse(req.body);

            const project = await ProjectRepository.update(projectId, projectData);

            res.locals = {
                status: 200,
                data: project,
                message: 'Project updated',
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const projectId = parseInt(req.params.projectId, 10);

            await ProjectRepository.delete(projectId);

            res.locals = {
                status: 200,
                message: 'Project deleted ',
            };

            return next();
        } catch (error) {
            return next(error);
        }
    }

}

export default new ProjectController();