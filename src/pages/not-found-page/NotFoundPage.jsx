import React from "react";
import "./notFoundPage.css";
import {Link} from "react-router-dom";

export class NotFoundPage extends React.Component{
    render(){
        return (
            <div>
                <h1 className="message">404</h1>
                <h2 className="description">Page not found!</h2>
                <div className="button-holder">
                    <Link to={"/home"}>
                        <button>Home</button>
                    </Link>
                </div>
               
                
            </div>
        );
    }
}