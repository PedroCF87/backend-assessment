const express = require('express')
const router = express.Router()
const OrdersController = require('../src/controllers/OrdersController')
const { orderInsertMiddleware, orderUpdateMiddleware, orderRetrieveMiddleware } = require('../src/middleware/OrdersMiddleware')

/* POST order insert. */
router.post('/', orderInsertMiddleware, OrdersController.insert)

/* PUT order update status. */
router.put('/', orderUpdateMiddleware, OrdersController.updateStatus)

/* GET order retrieve. */
router.get('/:id', orderRetrieveMiddleware, OrdersController.retrieve)

module.exports = router
