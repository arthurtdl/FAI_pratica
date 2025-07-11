import z from "zod";

export const createDeveloperSchema = z.object({
        email: z
        .string({
          invalid_type_error: 'O email deve ser uma string',
          required_error: 'O email é obrigatório',
        }),
    
        password: z
        .string({
          invalid_type_error: 'O password deve ser uma string',
          required_error: 'O password é obrigatório',
        }),
    
        name: z.
        string({
            invalid_type_error: 'O name deve ser uma string',
            required_error: 'O name é obrigatório',
        }),
        
        course: z.
        string({
            invalid_type_error: 'O course deve ser uma string',
            required_error: 'O course é obrigatório',
        }),
    
        birthDate: z.
        string({
            invalid_type_error: 'A birthDate deve ser uma string',
            required_error: 'A birthDate é obrigatória',
        }),
    
        semester: z.
        string({
            invalid_type_error: 'O semester deve ser uma string',
            required_error: 'O semester é obrigatório',
        }),
    
        entryDate: z.
        string({
            invalid_type_error: 'A entryDate deve ser uma string',
            required_error: 'A entryDate é obrigatória',
        }),

        squadId: z.
        number({
            invalid_type_error: 'O squadId deve ser um inteiro',
            required_error: 'O squadId é obrigatório',
        })
});

export const updateDeveloperSchema = createDeveloperSchema.partial();