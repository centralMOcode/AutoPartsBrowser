var express = require('express');
var router = express.Router();

router.post('/', function(req,res) {
    var DB  = require('../connect.js');
    var insertPart = "INSERT INTO part(name, manufacturer, price) VALUES(?, ?, ?);";

    DB.con.query(insertPart, [req.body.partName, req.body.partManufacturer, req.body.price], function(err, result, fields) {
        if (err) throw err;

        if (result === undefined || result == "") {
            res.status(500).json({ serverError: "We've encountered an unexpected server errror" });
        } else {
            var grabId = "SELECT id FROM part ORDER BY id DESC LIMIT 1;";

            DB.con.query(grabId, function(err, result, fields) {
                if (err) throw err;

                if (result === undefined || result == "") {
                    res.status(404).json({ emptyQuery: "The executed query was empty" });
                } else {
                    var id = result[0].id;
                    var insertModelPart = "INSERT INTO model_part(part_id, model_id) VALUES(?, ?);";

                    DB.con.query(insertModelPart, [id, req.body.modelSelect], function(err, result, fields) {
                        if (err) throw err;

                        if (result === undefined || result == "") {
                            res.status(500).json({ serverError: "We've encountered an unexpected server errror" });
                        } else {
                            res.status(200).json({ success: "Part added to database!" });
                        }
                    });
                }
            });
        }
    });
})

module.exports = router;