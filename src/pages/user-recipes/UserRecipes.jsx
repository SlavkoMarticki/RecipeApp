import React from "react";
import { SideBar } from "../../common/side-bar/user-recipes/SideBar";
import { PageName } from "./components/page-name/PageName";
import { UserRecipe } from "./components/userRecipe/UserRecipe";
import store from "../../redux/store";

export class UserRecipes extends React.Component{

    constructor(){
        super();
        this.state = {
            store: store.getState(),
            render: false
        }
    }
    renderPage(){
        this.setState({render: false})
    }
    render(){
        return(
            
        <div>
            <SideBar />
            <PageName />
            <UserRecipe recipes={this.state.store} renderPage={this.renderPage.bind(this)}/>
        </div>)
    }
} 