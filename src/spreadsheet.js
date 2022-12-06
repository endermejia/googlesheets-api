const {GoogleSpreadsheet} = require('google-spreadsheet');

const credentials = require('./json/credentials.json');

let googleId = '1MzH54miPovFlmiRDCRq8iqV6oStoUvIpxTvSWQ1rfQ8';

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet(googleId);
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    return doc;
}

async function getRows() {
    const doc = await accessSpreadsheet();
    const sheet = doc.sheetsByIndex[0];
    return await sheet.getRows();
}

async function getRowById(id) {
    const rows = await getRows();
    return rows.find(row => row.id === id);
}

async function createRow(row) {
    const doc = await accessSpreadsheet();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(row);
}

async function updateRow(id, row) {
    const rowToUpdate = await getRowById(id);
    await rowToUpdate.save(row);
}

module.exports = {
    getRows,
    getRowById,
    createRow,
    updateRow
}
