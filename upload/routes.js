const { Router } = require('express')

const upload = require('./middleware/upload-middleware');

const fileUploadController= require('./controller/upload-controller');

const router = Router()

router.post('/upload-single', upload.single('file'), fileUploadController.uploadSingle);

module.exports = router
