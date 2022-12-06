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
    const {id, name, email, phone} = req.body;
    const newRow = {
        id, name, email, phone
    }
    await googleSheet.createRow(newRow);
    res.json({message: 'Partner created'});
}

const updateRow = async (req, res) => {
    const {id} = req.params;
    const {name, email, phone} = req.body;
    const newRow = {
        name, email, phone
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
