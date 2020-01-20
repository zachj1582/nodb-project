import React, {Component} from 'react'

class Recipes extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            image: this.props.recipe.image,
            recipe_title: this.props.recipe.recipe_title,
            recipe: this.props.recipe.recipe,
            name: this.props.recipe.name,
            location: this.props.recipe.location
        }
    }

    toggleEdit = () => {
        this.setState({editToggle: !this.state.editToggle})
    }

    handleEdit = () => {
        const {image,recipe_title,recipe,name,location} = this.state
        this.props.editRecipe({id:this.props.id,image,recipe_title,recipe,name,location})
        this.toggleEdit()
    }

    handleInput = ({name, value}) => {
        this.setState({[name]: value})
    }


    render(){
        const onClick = {
            transition: '1s',
            transform: 'scale(2)'
        }
        return(
            <div>
                
                {this.state.editToggle === true ? 
                <div>
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
                    <button onClick={() => this.handleEdit()}>Submit</button>
                </div> :
                <div className='recipe' onClick={StyleSheet.recipeClicked}>
                <img src={this.props.recipe.image} alt='Foods!'/>
                <div id='name'>{this.props.recipe.name}</div>
                <div id='city'>{this.props.recipe.location}</div>
                <div>{this.props.recipe.recipe_title}</div>
                <div>{this.props.recipe.recipe}</div>
                <button id='button1' onClick={this.toggleEdit}>Edit</button>
                <button id='button2' onClick={()=>this.props.deleteRecipe(this.props.id)}>Delete</button>
                </div>
                }
            </div>
        )
    }
}
export default Recipes