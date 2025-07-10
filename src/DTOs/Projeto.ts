import { z } from 'zod';

export const createProjetoSchema = z.object({
    nome_projeto: z
    .string({
      invalid_type_error: 'O nome_projeto deve ser uma string',
      required_error: 'O nome_projeto é obrigatório',
    }),

    valor_venda: z
    .number({
      invalid_type_error: 'O valor_venda deve ser um número',
      required_error: 'O valor_venda é obrigatório',
    }),

    data_inicio: z
    .string({
      invalid_type_error: 'A data_inicio deve ser uma string',
      required_error: 'A data_inicio é obrigatório',
    }),

    data_fim: z
    .string({
      invalid_type_error: 'A data_inicio deve ser uma string',
      required_error: 'A data_inicio é obrigatório',
    }),

    houve_discovery: z
    .boolean({
      invalid_type_error: 'houve_discovery deve ser um booleano',
      required_error: 'houve_discovery é obrigatório',
    }),

    ha_prototipo: z
    .boolean({
      invalid_type_error: 'ha_prototipo deve ser um booleano',
      required_error: 'ha_prototipo é obrigatório',
    }),

    nome_cliente: z
    .string({
      invalid_type_error: 'O nome_cliente deve ser uma string',
      required_error: 'O nome_cliente é obrigatório',
    })
});

export const updateProjetoSchema = createProjetoSchema.partial();
