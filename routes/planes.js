const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

const { 
    getPlanes,
    getPlane,
     createPlane
     } = require('../controllers/planes');


// показываем, где хранить загружаемые картики
const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

// @route GET /api/planes
// @desc Получить все самолеты
router.get('/', getPlanes)
// @route GET /api/planes/:id
// @desc Получить самолет по id
router.get('/:id', getPlane)
// @route POST /api/planes/
// @desc Создать самолет
router.post('/', upload.single('planeImage'), createPlane)


module.exports = router;