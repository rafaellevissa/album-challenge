const router = require('express').Router()
const User = require('./controllers/User/UserController')
const Album = require('./controllers/Album/AlbumController')
const Photo = require('./controllers/Photo/PhotoController')

router.post('/login')

router.post('/user', User.Create)

router.get('/photo/album/:album_id', Photo.FindAll)
router.get('/photo/:id', Photo.FindById)
router.post('/photo', Photo.Create)
router.put('/photo/:id', Photo.Update)
router.delete('/photo/:id', Photo.Delete)

router.get('/album/user/:user_id', Album.FindAll)
router.get('/album/:id', Album.FindById)
router.post('/album', Album.Create)
router.put('/album/:id', Album.Update)
router.delete('/album/:id', Album.Delete)


module.exports = router