const router = require('express').Router()


router.post('/login')

router.get('/user')
router.get('/user/:id')
router.post('/user')
router.put('/user')
router.delete('/user/:id')

router.get('/photos')
router.get('/photos/:id')
router.post('/photos')
router.put('/photos')
router.delete('/photos/:id')

router.get('/album')
router.get('/album/:id')
router.post('/album')
router.put('/album')
router.delete('/album/:id')


module.exports = router