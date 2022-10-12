import React,{Component} from "react";
import "./recipeDescription.css";

export class RecipeDescription extends Component{


    takeDescription(event){
        this.props.takeDescription(event.target.value)
    }

    render(){
        return (
            <div className="recipe-description">
                <textarea 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10"
                    placeholder="Write recipe description"
                    onChange={this.takeDescription.bind(this)}>
                </textarea>
            </div>
        );
    }
}