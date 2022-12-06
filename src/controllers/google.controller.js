let googleSheet = require('../spreadsheet');

const getRows = async (req, res) => {
    partners = await googleSheet.accessSpreadsheet();
    console.log(partners);
    res.render('index', {partners});
}

module.exports = {
    getPartners: getRows
}
