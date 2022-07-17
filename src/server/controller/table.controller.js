const db = require('../db');

// Запрос данных с БД

class TableController {
    async getRows(req, res) {
        try {
            const rows = await db.query('SELECT * FROM public."testTable"');
            res.json(rows.rows)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TableController();
