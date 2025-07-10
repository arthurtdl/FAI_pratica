import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { createDesenvolvedorSchema } from '@DTOs';
import { desenvolvedorRepository } from '@repositories';

class DesenvolvedorController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const devData = createDesenvolvedorSchema.parse(req.body);

      const exists = await desenvolvedorRepository.findByLogin(
        devData.login_dev
      );
      if (exists) {
        return next({
          status: 409,
          message: 'Já existe um desenvolvedor com esse login',
        });
      }

      const dataForPrisma: Prisma.DesenvolvedorCreateInput = {
        login_dev: devData.login_dev,
        nome_dev: devData.nome_dev,
        curso: devData.curso,
        data_nascimento: devData.data_nascimento,
        periodo: devData.periodo,
        data_entrada: devData.data_entrada,

        squad: {
          connect: { id_squad: devData.id_squad_dev },
        },
      };

      const dev = await desenvolvedorRepository.create(dataForPrisma);

      res.locals = {
        status: 201,
        message: 'Desenvolvedor adicionado com sucesso!',
        data: dev,
      };
      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new DesenvolvedorController();
