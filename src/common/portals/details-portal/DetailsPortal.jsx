import React, {Component} from "react";
import ReactDom from "react-dom";
import "./detailsPortal.css";

export class DetailsPortal extends Component{


    render(){
        return ReactDom.createPortal(
            
            <div className="portal-background">
                <div className="portal-details">
                    <div className="portal-details-header">
                        <div className="recipe-name-holder">
                            <h1>{this.props.recipeName}</h1>
                        </div>
                        <div className="exit-portal-holder">
                            <button onClick={() => {this.props.openDetailPortal(false)}}>X</button>
                        </div>
                    </div>
                    <div className="recipe-details-info">
                        <div className="recipe-ingredients">
                            {this.props.ingridients !== undefined ? this.props.ingridients.map((item, index)=>{
                                return <p>{item} { this.props.measure[index]}</p>
                            }) : ''}
                            
                        </div>
                        <div className="recipe-description">
                            <p>{this.props.recipeDescription}</p>
                        </div>
                    </div>
                </div>
            </div>, document.getElementById("portal")
        );
    
    
    }
}