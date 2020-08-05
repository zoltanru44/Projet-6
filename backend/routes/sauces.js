const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth'); //Authentification gestion
const multer = require('../middleware/multer-config'); //Picture gestion

const saucesCtrl = require('../controllers/sauces');

router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/', auth, multer, saucesCtrl.createSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);

router.post('/:id/like', auth, saucesCtrl.likeSauce);

module.exports = router;