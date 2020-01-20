import React, {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            image: '',
            recipe_title: '',
            recipe: '',
            name: '',
            location: '',
            addToggle: false,
        }
    }

    handleInput = ({name, value}) => {
        this.setState({[name]: value})
    }

    toggleAdd = () => {
        this.setState({addToggle: !this.state.addToggle})
    }
    handleAdd = () => {
        const {image,recipe_title,recipe,name,location} = this.state
        this.props.addFn({image,recipe_title,recipe,name,location})
        this.toggleAdd()
    }

    render(){
        return(
            <div>

            <header id='header'>
                <button id='add_recipe'onClick={this.toggleAdd}>Add Recipe</button>
                
                
                <h1 id='logo'>The Food Spot!</h1>
                <input id='search' placeholder='Search'/>
                
            </header>
            <div id='form_container'>

            {this.state.addToggle === true && 
                <div id='submit_form'>
                    <p>Picture:</p> 
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.image} name='image' />
                    <p>Recipe Name:</p>
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.recipe_title} name='recipe_title' />
                    <p>Recipe:</p>
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.recipe} name='recipe' />
                    <p>Your Name:</p>
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.name} name='name' />
                    <p>City:</p>
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.location} name='location' />
                    <button id='submit_button' onClick={() => this.handleAdd()}>Submit</button>
                </div> }
            
                </div>
            </div>
        )
    }
}

export default Header