import Joi from "joi";

export const EventsUpdateSchema = Joi.object({
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
        }),
    startTime: Joi.string()
        .required()
        .messages({
            'string.base': 'O hora inicial deve ser uma string.',
            'any.required': 'O campo hora inicial é obrigatório.',
        }),
    endTime: Joi.string()
        .required()
        .messages({
            'string.base': 'O hora final deve ser uma string.',
            'any.required': 'O campo hora final é obrigatório.',
        }),
});