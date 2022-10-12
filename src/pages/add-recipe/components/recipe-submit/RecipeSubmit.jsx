import React, {Component} from "react";
import "./recipeSubmit.css";


export class RecipeSubmit extends Component{

    sendData(){
        this.props.sendData(true)
        alert("You added recipe");
    }

    render(){
        return(
            <div className="recipe-submit">
                <button onClick={this.sendData.bind(this)}>Submit</button>
            </div>
        );
    }
}

