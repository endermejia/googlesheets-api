let googleSheet = require('../spreadsheet');

const getRows = async (req, res) => {
    partners = await googleSheet.getRows();
    res.json(partners);
}

const getRowById = async (req, res) => {
    partner = await googleSheet.getRowById(req.params.id);
    res.json(partner);
}

const createRow = async (req, res) => {
    console.log(req.body);
    const {
        name,
        lastName,
        id,
        phone,
        email,
        sex,
        birthDate,
        address,
        postalCode,
        city,
        province,
        whatsapp,
        gdpr
    } = req.body;
    const newRow = {
        name,
        lastName,
        id,
        phone,
        email,
        sex,
        birthDate,
        address,
        postalCode,
        city,
        province,
        whatsapp,
        gdpr
    }
    await googleSheet.createRow(newRow);
    res.json({message: 'Partner created'});
}

const updateRow = async (req, res) => {
    const {id} = req.params;
    const {
        name,
        lastName,
        phone,
        email,
        sex,
        birthDate,
        address,
        postalCode,
        city,
        province,
        whatsapp,
        gdpr
    } = req.body;
    const newRow = {
        name,
        lastName,
        id,
        phone,
        email,
        sex,
        birthDate,
        address,
        postalCode,
        city,
        province,
        whatsapp,
        gdpr
    }
    await googleSheet.updateRow(id, newRow);
    res.json({message: 'Partner updated'});
}

module.exports = {
    getPartners: getRows,
    getPartnersById: getRowById,
    createPartner: createRow,
    updatePartner: updateRow
}
