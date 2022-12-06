const {GoogleSpreadsheet} = require('google-spreadsheet');

const credentials = require('./json/credentials.json');

let googleId = "1MzH54miPovFlmiRDCRq8iqV6oStoUvIpxTvSWQ1rfQ8";

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet(googleId);
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    return rows;
}

accessSpreadsheet();

module.exports = {
    accessSpreadsheet: accessSpreadsheet
}
