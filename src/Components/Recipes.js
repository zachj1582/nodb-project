import React, {Component} from 'react'

class Recipes extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            img: this.props.recipe.img,
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
        const {img,recipe_title,recipe,name,location} = this.state
        this.props.editRecipe({id:this.props.id,img,recipe_title,recipe,name,location})
        this.toggleEdit()
    }

    handleInput = ({name, value}) => {
        this.setState({[name]: value})
    }


    render(){
        return(
            <div>
                
                {this.state.editToggle === true ? 
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
                    <button onClick={() => this.handleEdit()}>Submit</button>
                </div> :
                <div><img src={this.props.recipe.img} alt='Foods!'/>
                <div>{this.props.recipe.recipe_title}</div>
                <div>{this.props.recipe.recipe}</div>
                <div>{this.props.recipe.name}</div>
                <div>{this.props.recipe.location}</div>
                <button onClick={this.toggleEdit}>Edit</button></div>
                }
                <button onClick={()=>this.props.deleteRecipe(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default Recipes