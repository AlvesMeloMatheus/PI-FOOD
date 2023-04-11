const express = require('express');
const router = express.Router();
const { Recipe, Diets} = require('../db');

require('dotenv').config();

router.post('/recipe', async (req, res) =>{

    const inicio = Date.now();
    
    let{
        name,
        summary,
        health_score,
        image,
        instructions,
        diets        
    } = req.body

    try{
        let recipeCreate = await Recipe.create({
            name,
            summary,
            health_score,
            image,
            instructions,
        })

        let dietsDB = await Diets.findAll({
            where: {name: diets}
        })

        // errores personalizados:

        if (!name) {
            return res.status(400).send({error: 'Insert the name for the recipe'});
        }

        if (!summary) {
            return res.status(400).send({error: 'Insert the summary from the recipe'})
        }

        // console.log(recipeCreate);
        // console.log(dietDB);

        recipeCreate.addDiets(dietsDB);
        res.send('Sucesfull');
    } catch(error) {
        res.status(400).send(error);
    } finally {
        console.info(Date.now() - inicio + " " + "milisegundos");
        //crometro de mi funcionamento no mas
    }
})

module.exports = router;