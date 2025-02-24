import Joi from "joi";

export const EventsSchema = Joi.object({
    text: Joi.string()
        .min(3)
        .max(500)
        .pattern(/.+/)
        .required()
        .messages({
            'string.base': 'O texto deve ser uma string.',
            'string.empty': 'O texto não pode estar vazio.',
            'string.min': 'O texto deve ter pelo menos 3 caracteres.',
            'string.max': 'O texto deve ter no máximo 500 caracteres.',
            'string.pattern.base': 'O texto deve conter apenas letras e espaços.',
            'any.required': 'O campo texto é obrigatório.',
        })
});