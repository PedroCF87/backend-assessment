const { celebrate, Joi, Segments } = require('celebrate')

exports.itemInsertMiddleware = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().allow(null, ''),
        financialAmount: Joi.number().required(),
        financialTaxRate: Joi.number().required(),
        financialDiscountType: Joi.any().valid('%', '$').required(),
        financialDiscountAmount: Joi.number().allow(null, ''),
        financialDiscountItemId: Joi.string().allow(null, ''),
        inventory: Joi.number().required(),
        active: Joi.boolean().default(true)
    })
})

exports.itemRetrieveMiddleware = celebrate({
    [Segments.PARAMS]: Joi.object().keys({ 
        id: Joi.string().uuid({ version: [ 'uuidv4' ] }) 
    })
})
