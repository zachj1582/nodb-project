const express = require('express')
const fc = require('./controllers/food-controller')
const app = express()
const port = 5555

app.use(express.json())

//Endpoints
app.get('/api/recipes', fc.getRecipes)
app.post('/api/recipes', fc.addRecipe)
app.update('/api/recipe/:id', fc.editRecipe)
app.delete('/api/recipe/:id', fc.deleteRecipe)


app.listen(port, ()=> console.log(`Listening on port: ${port}`))