import { z } from "zod";

const REGISTER = z.object({
    name: z.string().min(1, "Nome obrigatório"),
    email: z.email("Email inválido").min(1, "Email obrigatório"),
    password: z
        .string()
        .min(6, "A senha deve conter no mínimo 6 caracteres")
        .max(20, "A senha deve conter no máximo 20 caracteres")
        .refine((password) => /[A-Z]/.test(password), "A senha deve conter pelo menos uma letra maiúscula")
        .refine((password) => /[a-z]/.test(password), "A senha deve conter pelo menos uma letra minúscula")
        .refine((password) => /[0-9]/.test(password), "A senha deve conter pelo menos um número")
        .refine(
            (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
            "A senha deve conter pelo menos um caractere especial",
        ),
});

export const USER_SCHEMAS = {
    REGISTER,
};
