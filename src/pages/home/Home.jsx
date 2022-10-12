import React from "react";
import { SideBar } from "../../common/side-bar/home/SideBar";
import { DisplayRecipes } from "./components/display-recipes";
import "../../common/body/body.css"


export class Home extends React.Component{
    render(){
        return (
            <div>
                <SideBar />
                <DisplayRecipes />
            </div>
        );
    }
}