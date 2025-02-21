import Joi from "joi";

export const RegisterSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(50)
        .pattern(/^[a-zA-Z\s]+$/)
        .required()
        .messages({
            'string.base': 'O nome deve ser uma string.',
            'string.empty': 'O nome não pode estar vazio.',
            'string.min': 'O nome deve ter pelo menos 3 caracteres.',
            'string.max': 'O nome deve ter no máximo 50 caracteres.',
            'string.pattern.base': 'O nome deve conter apenas letras e espaços.',
            'any.required': 'O campo nome é obrigatório.',
        }),

    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.email': 'O email deve ser um endereço de email válido.',
            'string.empty': 'O email não pode estar vazio.',
            'any.required': 'O campo email é obrigatório.',
        }),

    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
        .required()
        .messages({
            'string.empty': 'A senha não pode estar vazia.',
            'string.min': 'A senha deve ter pelo menos 8 caracteres.',
            'string.max': 'A senha deve ter no máximo 30 caracteres.',
            'string.pattern.base': 'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.',
            'any.required': 'O campo senha é obrigatório.',
        }),

    cpf: Joi.string()
        .pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
        .required()
        .messages({
            'string.pattern.base': 'O CPF deve estar no formato 123.456.789-01.',
            'any.required': 'O campo CPF é obrigatório.',
        }),
});