const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send("<center><h1>The app is runing!</h1></center>")
})

module.exports = router
