const express = require('express')
const router = express.Router()
const ItensController = require('../src/controllers/ItensController')
const { itemInsertMiddleware, itemRetrieveMiddleware } = require('../src/middleware/ItensMiddleware')

/* POST item insert. */
router.post('/', itemInsertMiddleware, ItensController.insert)

/* GET itens listing. */
router.get('/', ItensController.list)

/* GET item retrieve. */
router.get('/:id', itemRetrieveMiddleware, ItensController.retrieve)

module.exports = router
