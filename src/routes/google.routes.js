const {Router} = require('express');
const router = Router();


const {
    getPartners,
    getPartnersById,
    createPartner,
    updatePartner
} = require('../controllers/google.controller');

router.get('/partners', getPartners);
router.get('/partners/:id', getPartnersById);
router.post('/partners', createPartner);
router.put('/partners/:id', updatePartner);

module.exports = router;
