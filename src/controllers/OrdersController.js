const moment = require('moment')
// Models
const { insertOrder, updateOrder, listOrders } = require('../models/OrdersModel')
// Constants
const errors = require('../constants/error')
const statusCode = require('../constants/statusCode')

exports.insert = async (req, res) => {
    const { 
        items, total, userName: name, userEmail: email, userPhone: phone, userAddress: address = {}
    } = req.body
    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss')
    const newFile = {
        items, total,
        user: { name, email, phone, address },
        status: "processing",
        createdAt: currentDate,
        updatedAt: currentDate
    }
    const insertedLine = await insertOrder({ object: newFile })
    if (!insertedLine.id) return res.status(statusCode.successAccepted.code).json(errors.oderNotInserted)

    return res.status(statusCode.successCreated.code).json(insertedLine)
}

exports.updateStatus = async (req, res) => {
    const { id, status } = req.body
    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss')
    if (!id) return res.status(statusCode.errorBadRequest.code).json(errors.orderNotUpdated)
    const order = await listOrders({ params: { _id: id }, fields: {} })
    if (!order[0]) return res.status(statusCode.errorBadRequest.code).json(errors.orderNotUpdated)
    if (order[0].status === status) return res.status(statusCode.errorBadRequest.code).json(errors.orderAlreadyUpdated)
    const currentObject = { _id: id }
    const newObject = { 
        ...order[0], 
        status, 
        updatedAt: currentDate 
    }    
    const insertedLine = await updateOrder({ 
        currentObject,
        newObject
    })
    if (insertedLine.modifiedCount === 0) return res.status(statusCode.successAccepted.code).json(errors.orderNotUpdated)
    return res.status(statusCode.successOk.code).json({
        message: "Order updated succesfully."
    })
}

exports.retrieve = async (req, res) => {
    if (!req.params.id) return res.status(statusCode.errorBadRequest.code).json(errors.itemNotFound)
    const { id } = req.params
    const orders = await listOrders({ params: { _id: id }, fields: {} })

    if (orders.length === 0) return res.status(statusCode.successAccepted.code).json(errors.itemNotFound)

    return res.status(statusCode.successOk.code).json({ orders })
}
