const express = require('express');
const router = express.Router();
const { Diets } = require('../db');

router.get('/diets', async (req, res) => {
    try{
        let typesDiet = await Diets.findAll();

        res.status(200).json(typesDiet);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;