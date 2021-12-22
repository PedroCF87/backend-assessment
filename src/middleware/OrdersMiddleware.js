const { celebrate, Joi, Segments } = require('celebrate')

exports.orderInsertMiddleware = celebrate({
    [Segments.BODY]: Joi.object().keys({
        items: Joi.array().items({
            id: Joi.string().uuid({ version: [ 'uuidv4' ] }),
            tax: Joi.number().min(0).max(100).allow(null, 0),
            discount: Joi.number().allow(null, 0),
            subtotal: Joi.number().allow(null, 0)
        }).required(),
        total: Joi.number().required(),
        userName: Joi.string().required(),
        userEmail: Joi.string().required(),
        userPhone: Joi.string().allow(null, ''),
        userAddress: Joi.object({
            street: Joi.string().allow(null, ''),
            complement: Joi.string().allow(null, ''),
            zipCode: Joi.string().allow(null, ''),
            neighborhood: Joi.string().allow(null, ''),
            city: Joi.string().allow(null, ''),
            state: Joi.string().allow(null, ''),
            country: Joi.string().allow(null, ''),
        })
    })
})

exports.orderUpdateMiddleware = celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().uuid({ version: [ 'uuidv4' ] }),
        status: Joi.any().valid('processing', 'paid')
    })
})

exports.orderRetrieveMiddleware = celebrate({
    [Segments.PARAMS]: Joi.object().keys({ 
        id: Joi.string().uuid({ version: [ 'uuidv4' ] }) 
    })
})
