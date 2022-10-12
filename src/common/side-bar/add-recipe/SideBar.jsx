import React from "react";
import "./sideBar.css";
import {Link} from "react-router-dom";


export class SideBar extends React.Component{
    render(){
        return(
            <div className="sideBarHolder">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="buttonHolder">
                    <Link to={"/home"}><button>Home</button></Link>
                    <Link to={"/userrecipes"}><button>My recipes</button></Link>
                </div>
            </div>
        );
    }
}