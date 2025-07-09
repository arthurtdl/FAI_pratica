import z from "zod";

export const createSquadSchema = z.object({
    login_gerente_squad: z.
    string({
        invalid_type_error: 'O login_gerente_squad deve ser uma string',
        required_error: 'O login_gerente_squad é obrigatório',
    })
    .regex(/^[a-zA-Z\s]+$/, { message: 'O login_gerente_squad deve conter apenas letras' }),
    
    id_projeto_squad: z.
    string({
        invalid_type_error: 'O id_projeto deve ser uma string',
        required_error: 'O id_projeto é obrigatório',
    })
    .regex(/^[a-zA-Z\s]+$/, { message: 'O id_projeto deve conter apenas letras' }),
});

export const updateSquadSchema = createSquadSchema.partial();