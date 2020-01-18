import React, {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            img: '',
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
        const {img,recipe_title,recipe,name,location} = this.state
        this.props.addFn({img,recipe_title,recipe,name,location})
        this.toggleAdd()
    }

    render(){
        return(
            <header id='header'>
                <button onClick={this.toggleAdd}>Add Recipe</button>
                {this.state.addToggle === true && 
                <div>
                    <p>Picture:</p> 
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.img} name='img' />
                    <p>Recipe Name:</p>
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.recipe_title} name='recipe_title' />
                    <p>Recipe:</p>
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.recipe} name='recipe' />
                    <p>Your Name:</p>
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.name} name='name' />
                    <p>City:</p>
                    <input onChange={(e)=>this.handleInput(e.target)} value={this.state.location} name='location' />
                    <button onClick={() => this.handleAdd()}>Submit</button>
                </div> }
                
                <h1>Our Recipes</h1>
                <input placeholder='Search'/>
            </header>
        )
    }
}

export default Header