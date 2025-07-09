import z from "zod";

export const createDesenvolvedorSchema = z.object({
    nome_dev: z.
    string({
        invalid_type_error: 'O nome_dev deve ser uma string',
        required_error: 'O nome_dev é obrigatório',
    })
    .regex(/^[a-zA-Z\s]+$/, { message: 'O nome_dev deve conter apenas letras' }),
    
    curso: z.
    string({
        invalid_type_error: 'O curso deve ser uma string',
        required_error: 'O curso é obrigatório',
    })
    .regex(/^[a-zA-Z\s]+$/, { message: 'O curso deve conter apenas letras' }),

    data_nascimento: z.
    string({
        invalid_type_error: 'A data_nascimento deve ser uma string',
        required_error: 'A data_nascimento é obrigatória',
    }),

    periodo: z.
    string({
        invalid_type_error: 'O periodo deve ser uma string',
        required_error: 'O periodo é obrigatório',
    }),

    data_entrada: z.
    string({
        invalid_type_error: 'A data_entrada deve ser uma string',
        required_error: 'A data_entrada é obrigatória',
    }),
});

export const updateDesenvolvedorSchema = createDesenvolvedorSchema.partial();