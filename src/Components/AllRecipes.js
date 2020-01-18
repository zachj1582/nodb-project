import React from 'react'
import Recipes from './Recipes'
const Categories = (props) => {
    let list = props.recipes.map((e,i)=> {
        return <Recipes key={i} recipe={e} deleteRecipe={props.deleteRecipe} id={e.id} editRecipe={props.editRecipe}/>
    })
    return (
        <div>
            <h1>All Recipes</h1>
            {list}
        </div>
    )
}

export default Categories