import z from "zod";

export const createGerenteSchema = z.object({
    login_gerente: z
    .string({
      invalid_type_error: 'O login_gerente deve ser uma string',
      required_error: 'O login_gerente é obrigatório',
    })
    .uuid({ message: 'O login_gerente deve ser um UUID válido' }),

    nome_gerente: z.
    string({
        invalid_type_error: 'O nome_gerente deve ser uma string',
        required_error: 'O nome_gerente é obrigatório',
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

    data_ondas: z.
    string({
        invalid_type_error: 'A data_ondas deve ser uma string',
        required_error: 'A data_ondas é obrigatória',
    }),
});

export const updateGerenteSchema = createGerenteSchema.partial();