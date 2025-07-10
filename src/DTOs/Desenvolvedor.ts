import z from "zod";

export const createDesenvolvedorSchema = z.object({
    login_dev: z
    .string({
      invalid_type_error: 'O login_dev deve ser uma string',
      required_error: 'O login_dev é obrigatório',
    })
    .uuid({ message: 'O login_dev deve ser um UUID válido' }),

    nome_dev: z.
    string({
        invalid_type_error: 'O nome_dev deve ser uma string',
        required_error: 'O nome_dev é obrigatório',
    }),
    
    curso: z.
    string({
        invalid_type_error: 'O curso deve ser uma string',
        required_error: 'O curso é obrigatório',
    }),

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

    id_squad_dev: z
    .string({ invalid_type_error: 'id_squad_dev deve ser string' })
    .uuid({ message: 'id_squad_dev deve ser UUID' }),
});

export const updateDesenvolvedorSchema = createDesenvolvedorSchema.partial();