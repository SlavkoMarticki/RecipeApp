import React,{Component} from "react";
import "./recipeName.css"

export class RecipeName extends Component{

    takeName(event){
        const value = event.target.value;
        this.props.takeName(value);
    }

    render(){

        return (
        <div className="recipe-name">
            <label htmlFor="name">Recipe name:</label>
            <input  onChange={this.takeName.bind(this)} id="name" />
        </div>)
    }
}