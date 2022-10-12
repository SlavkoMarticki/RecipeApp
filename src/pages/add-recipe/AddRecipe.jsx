import React from "react";
import { RecipeName } from "./components/recipe-name";
import { SideBar } from "../../common/side-bar/add-recipe/SideBar";
import { RecipeDescription } from "./components/recipe-description";
import { RecipeSubmit } from "./components/recipe-submit";
import store from "../../redux/store";
import "../../common/body/body.css"

export class AddRecipe extends React.Component{

    constructor(){
        super();
        this.state = {
            recipeName: "",
            recipeDescription: "",
            sendData: true
        }
    }

    takeName(name){
        this.setState({recipeName: name});
    }
    takeDescription(description){
        this.setState({recipeDescription: description})
    }
    sendData(sending){
        this.setState({sendData: sending})
        if(this.state.sendData){

            store.dispatch({
                type: "add",
                name: this.state.recipeName,
                description: this.state.recipeDescription
            })
        }
    }

    render(){
        return (
            <div>
                <SideBar />
                <RecipeName takeName={this.takeName.bind(this)}/>
                <RecipeDescription takeDescription={this.takeDescription.bind(this)}/>
                <RecipeSubmit sendData={this.sendData.bind(this)}/>
            </div>
        );
    }
}