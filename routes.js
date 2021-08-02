const router = require('express').Router()
const controler = require('./controler')

router.delete('/todos/:todosId', controler.deleteById)
router.patch('/todos/:todosId', controler.patchUpdate)
router.put('/:todosId', controler.putUpdate)
router.get('/:todosId', controler.findById)
router.get('/', controler.findAll)
router.post('/', controler.create)

module.exports = router
