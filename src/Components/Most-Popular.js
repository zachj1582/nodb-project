import React from 'react'
import Recipes from './Recipes'

function MostPopular(props){
    let list = props.randRecipes.map((e,i) => {
        return <Recipes key={i} recipe={e} /> 
    })
    
    return(
            <div>
            <h1>Most Popular</h1>
            {list}
            </div>
        )
    }

export default MostPopular