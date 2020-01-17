import React, {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }
    render(){
        return(
            <header id='header'>
                <button>Add Recipe</button>
                <h1>Our Recipes</h1>
                <input placeholder='Search'/>
            </header>
        )
    }
}

export default Header