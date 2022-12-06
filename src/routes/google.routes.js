const {Router} = require('express');
const router = Router();

const {
    getPartners,
} = require('../controllers/google.controller');

router.get('/', getPartners);

module.exports = router;
