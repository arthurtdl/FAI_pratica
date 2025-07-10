import z from "zod";

export const createSquadSchema = z.object({
    login_gerente_squad: z.
    string({
        invalid_type_error: 'O login_gerente_squad deve ser uma string',
        required_error: 'O login_gerente_squad é obrigatório',
    })
    .uuid({ message: "O login do gerente deve ser um UUID válido." }),
    
    id_projeto_squad: z.
    string({
        invalid_type_error: 'O id_projeto deve ser uma string',
        required_error: 'O id_projeto é obrigatório',
    })
    .uuid({ message: "O ID do projeto deve ser um UUID válido." }),
});

export const updateSquadSchema = createSquadSchema.partial();