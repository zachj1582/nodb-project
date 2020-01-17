import React, {Component} from 'react'

class MostPopular extends Component{
    constructor(props){
        super(props)
        this.state = {
            recipes: []
        }
    }
    render(){
        return(
            <h1>Most Popular</h1>
        )
    }
}

export default MostPopular