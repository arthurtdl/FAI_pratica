import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { createDeveloperSchema } from '@DTOs';
import { DeveloperRepository } from '@repositories';

class DeveloperController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const devData = createDeveloperSchema.parse(req.body);

      const exists = await DeveloperRepository.findByEmail(
        devData.email
      );
      if (exists) {
        return next({
          status: 409,
          message: 'Já existe um desenvolvedor com esse email',
        });
      }

      const dataForPrisma: Prisma.DeveloperCreateInput = {
        email: devData.email,
        password: devData.password,
        name: devData.name,
        course: devData.course,
        birthDate: devData.birthDate,
        semester: devData.semester,
        entryDate: devData.entryDate,

        squad: {
          connect: { id: devData.squadId },
        },
      };

      const dev = await DeveloperRepository.create(dataForPrisma);

      res.locals = {
        status: 201,
        message: 'Developer adicionado com sucesso!',
        data: dev,
      };
      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new DeveloperController();
