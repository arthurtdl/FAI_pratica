import z from "zod";

export const createSquadSchema = z.object({
    managerId: z.
    number({
        invalid_type_error: 'O managerId deve ser um número',
        required_error: 'O managerId é obrigatório',
    }),
    
    projectId: z.
    number({
        invalid_type_error: 'O projectId deve ser uma número',
        required_error: 'O projectId é obrigatório',
    })
});

export const updateSquadSchema = createSquadSchema.partial();