import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { createDeveloperSchema, updateDeveloperSchema } from '@DTOs';
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

  async readAll(_req: Request, res: Response, next: NextFunction) {
          try {
              const allDevelopers = await DeveloperRepository.findAll();
  
              res.locals = {
                  status: 200,
                  data: allDevelopers,
              };
  
              return next();
          } catch (error) {
              return next(error);
          }
      }

  async update(req: Request, res: Response, next: NextFunction) {
  try {
    const developerId = parseInt(req.params.developerId, 10);
    const devData = updateDeveloperSchema.parse(req.body);

    const dataForPrisma: Prisma.DeveloperUpdateInput = {};

    if (devData.email) dataForPrisma.email = devData.email;
    if (devData.password) dataForPrisma.password = devData.password;
    if (devData.name) dataForPrisma.name = devData.name;
    if (devData.course) dataForPrisma.course = devData.course;
    if (devData.birthDate) dataForPrisma.birthDate = devData.birthDate;
    if (devData.semester) dataForPrisma.semester = devData.semester;
    if (devData.entryDate) dataForPrisma.entryDate = devData.entryDate;

    if (devData.squadId !== undefined) {
      dataForPrisma.squad = {
        connect: { id: devData.squadId },
      };
    }

    const developer = await DeveloperRepository.update(developerId, dataForPrisma);

    res.locals = {
      status: 200,
      message: 'Developer update',
      data: developer,
    };

    return next();
  } catch (error) {
    return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
  try {
    const developerId = parseInt(req.params.developerId, 10);

    await DeveloperRepository.delete(developerId);

    res.locals = {
      status: 200,
      message: 'Developer deleted',
    };

    return next();
  } catch (error) {
    return next(error);
    }
  }


}

export default new DeveloperController();
