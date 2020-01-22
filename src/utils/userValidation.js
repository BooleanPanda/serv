const Joi = require('@hapi/joi');

const userValSchema = Joi.object().keys({
    name: Joi.string()
             .min(3)
             .max(20)
             .required()
             .label('name'),
    surname: Joi.string()
             .min(1)
             .max(20)
             .required()
             .label('surname'),
    login: Joi.string()
              .alphanum()
              .min(5)
              .max(20)
              .required()
              .label('login'),
    password: Joi.string()
                 .required()
                 .label('password'),
    email: Joi.string()
              .email()
              .required()
              .label('email')
});

module.exports = userValSchema;