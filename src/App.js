import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from './Components/Header'
import MostPopular from './Components/Most-Popular'
import AllRecipes from './Components/AllRecipes'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      randRecipes: []
    };
  }

  componentDidMount = () =>{
    axios.get('/api/recipes').then(res => {
    let list = []
    for(let i = 0; i < 15; i++) {
         list.push(res.data[Math.ceil(Math.random() * 99)])}
    this.setState({recipes: res.data, randRecipes: list})
    }).catch(err => console.log(err));
  }

  handleAdd = (body) =>{
    axios.post('http://localhost:5555/api/recipes', body).then(res => {
      this.setState({recipes: res.data})
    }).catch(err => console.log(err))
  }

  deleteRecipe = (id) =>{
    axios.delete(`http://localhost:5555/api/recipe/${id}`).then(res => {
      this.setState({recipes: res.data})
    }).catch(err => console.log(err))
  }

  editRecipe = (body) =>{
    axios.put(`http://localhost:5555/api/recipe/${body.id}`, body).then(res => {
      this.setState({recipes: res.data})
    }).catch(err => console.log(err))
  }

  render() {
    let recipes = this.state.recipes
    let randRecipes= this.state.randRecipes
    console.log(recipes)
    console.log(randRecipes)

    return(
        <div className="App">
          <Header recipes={recipes}
                  addFn={this.handleAdd}/>
          <MostPopular recipes={recipes}
                       randRecipes={randRecipes}/>
          <AllRecipes recipes={recipes}
                      deleteRecipe={this.deleteRecipe}
                      editRecipe={this.editRecipe}/>
        </div>
    )
    }
}

export default App;
