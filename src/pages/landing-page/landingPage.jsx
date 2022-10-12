import React,{Component} from "react";
import "./landingPage.css"
import {Link} from "react-router-dom";

/*
ako se neka komponenta koristi samo jedanput onda mozes staviti
u folder gde se pozvia
*/

export class LandingPage extends Component{
    constructor(){
        super()
        this.state = {
            isClicked : false
        } 
    }
    handleClick = () => {
        this.setState({isClicked : !this.state.isClicked});
    }
    render(){
        return(
            <div className="landingPageHolder">
                <h1>Welcome!</h1>
                <Link to={"/home"}>
                    <button>Start</button>
                </Link>
            </div>
        );
    }
}