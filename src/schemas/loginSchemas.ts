import Joi, { Schema } from 'joi';

export const LoginSchema: Schema = Joi.alternatives().try(
    Joi.object({
        mode: Joi.string().email().required(),
        password: Joi.string().required(),
    }),
    Joi.object({
        mode: Joi.string().pattern(new RegExp(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)).required(),
        password: Joi.string().required(),
    })
);