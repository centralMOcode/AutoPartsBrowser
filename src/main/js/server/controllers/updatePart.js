var express = require('express');
var router = express.Router();

router.put('/:id', function(req,res) {
    var DB  = require('../connect.js');
    var check = "SELECT * FROM part WHERE id = ?;";

    DB.con.query(check, [req.params.id], function (err, result, fields){
        if (err) throw err;

        if (result === undefined || result == ""){
            res.status(404).json({ notFound: `Can't find part with id '${req.params.id}'` });
        } else {
            var update = "UPDATE part SET price = ? WHERE id = ?;";
            DB.con.query(update, [req.body.price, req.params.id], function(err, result, fields){
                if (err) throw err;
                console.log(result);
                if (result.changedRows > 0){
                    res.status(200).json({ success: `Part price with id ${req.params.id} updated` });
                } else {
                    res.status(404).json({ falied: `Part price could not be updated` });
                }
            })
        }
    })
})

module.exports = router;