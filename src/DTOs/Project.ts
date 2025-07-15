import { z } from 'zod';

export const createProjectSchema = z.object({
    name: z
    .string({
      invalid_type_error: 'O name deve ser uma string',
      required_error: 'O name é obrigatório',
    }),

    saleValue: z
    .number({
      invalid_type_error: 'O saleValue deve ser um número',
      required_error: 'O saleValue é obrigatório',
    }),

    startDate: z
    .date({
      invalid_type_error: 'A startDate deve ser um DateTime',
      required_error: 'A startDate é obrigatório',
    }),

    endDate: z
    .date({
      invalid_type_error: 'A endDate deve ser uma DateTime',
      required_error: 'A endDate é obrigatório',
    }),

    hadDiscovery: z
    .boolean({
      invalid_type_error: 'hadDiscovery deve ser um booleano',
      required_error: 'hadDiscovery é obrigatório',
    }),

    havePrototype: z
    .boolean({
      invalid_type_error: 'havePrototype deve ser um booleano',
      required_error: 'havePrototype é obrigatório',
    }),

    clientName: z
    .string({
      invalid_type_error: 'O clientName deve ser uma string',
      required_error: 'O clientName é obrigatório',
    })
});

export const updateProjectSchema = createProjectSchema.partial();
