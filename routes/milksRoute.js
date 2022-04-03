const express = require("express");
const router = express.Router();
const milk = require('../models/milkModel')

router.get("/getallmilks", async(req, res) => {
        try {
            const milks = await milk.find({})
            res.send(milks)
        } catch (error) {
            return res.status(400).json({message:error});
        }
});

module.exports = router;