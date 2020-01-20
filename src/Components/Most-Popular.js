import React from 'react'
import Recipes from './Recipes'

function MostPopular(props){
    let list = props.randRecipes.map((e,i) => {
        return <Recipes key={i} recipe={e} /> 
    })
    
    return(
            <div>
                <div id='title'>
            <h1>Most Popular</h1>
                </div>
                <div className='carousel-container'>
            {list}
                </div>
            </div>
        )
    }

export default MostPopular