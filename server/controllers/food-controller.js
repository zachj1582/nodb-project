let allRecipes = require('./MockData.json')
let id = 101
module.exports = {
    getRecipes: (req,res) => {
        res.status(200).send(allRecipes)
    },
    addRecipe: (req,res) => {
        const {image, recipe_title, recipe, name, location} = req.body
        const recipeObj = {
            id: id,
            image: image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDOOThfyWmqpTFJH7fHPKdBKYrKpyaBR18HITvbaZkFqgyEYFJ1g&s',
            recipe_title,
            recipe,
            name,
            location,
        }
        id++
        allRecipes.unshift(recipeObj)
        res.status(200).send(allRecipes)
    },
    editRecipe: (req,res) => {
        const {id} = req.params
        const {image, recipe_title, recipe, name, location} = req.body
        const index = allRecipes.findIndex(e => e.id === +id)
        allRecipes[index] = {
            id: id,
            image,
            recipe_title,
            recipe,
            name,
            location,
        }
        res.status(200).send(allRecipes)
    },
    deleteRecipe: (req,res) => {
        const {id} = req.params
        const index = allRecipes.findIndex(e => e.id === +id)
        allRecipes.splice(index, 1)
        res.status(200).send(allRecipes)
    }
}