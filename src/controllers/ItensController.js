const moment = require('moment')
// Models
const { insertItem, listItens } = require('../models/ItensModel')
// Constants
const errors = require('../constants/error')
const statusCode = require('../constants/statusCode')

exports.insert = async (req, res) => {
    const { 
        name, description, 
        financialAmount: amount, financialTaxRate: taxRate, 
        financialDiscountType: type, financialDiscountAmount: discountAmount, financialDiscountItemId: itemId,
        inventory, active
    } = req.body
    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss')
    const newFile = {
        name, description,
        financial: { amount, taxRate, discount: { type, amount: discountAmount, itemId } },
        inventory,
        active,
        createdAt: currentDate,
        updatedAt: currentDate
    }
    const insertedLine = await insertItem({ object: newFile })
    if (!insertedLine.id) return res.status(statusCode.successAccepted.code).json(errors.itemNotInserted)

    return res.status(statusCode.successCreated.code).json({
        message: "Item created succesfully."
    })
}

exports.list = async (req, res) => {
    const itens = await listItens({
        params: { active: true },
        fields: { _id: 1, name: 1, description: 1, financial: 1, inventory: 1 }
    })
    if (itens.length === 0) return res.status(statusCode.successAccepted.code).json(errors.itensNotFound)

    return res.status(statusCode.successOk.code).json({ itens })
}

exports.retrieve = async (req, res) => {
    if (!req.params.id) return res.status(statusCode.errorBadRequest.code).json(errors.itemNotFound)
    const { id } = req.params
    const itens = await listItens({ params: { active: true, _id: id }, fields: {} })

    if (itens.length === 0) return res.status(statusCode.successAccepted.code).json(errors.itemNotFound)

    return res.status(statusCode.successOk.code).json({ itens })
}
