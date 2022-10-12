import React, {Component} from "react";
import ReactDom from "react-dom";
import store from "../../../redux/store";
import "./editPortal.css";

export class EditPortal extends Component {

    constructor(){
        super();
        this.state = {
            id: '',
            recipeName: '',
            recipeDescription: ''
        }
    }

    takeName(event){
        this.setState({recipeName: event.target.value})
    }
    takeDescription(event){
        this.setState({recipeDescription: event.target.value})
    }
    submitChanges(){
       
        this.props.openEditPortal(false);
       
        store.dispatch({
            type: "edit",
            id: this.props.id,
            recipeName: this.state.recipeName,
            recipeDescription: this.state.recipeDescription
        })
    }

    componentDidMount(){
       
        this.setState({recipeName: this.props.recipeName});
        this.setState({recipeDescription: this.props.recipeDescription});
    }
    render(){
        
        return ReactDom.createPortal(
            <div className="portal-background">
                <div className="portal-edit">
                    <div className="portal-header">
                        <div className="input-name">
                            <label htmlFor="name">Recipe name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={this.state.recipeName}
                                onChange={this.takeName.bind(this)}
                            />
                            <h1>{this.props.name}</h1>
                        </div>
                        <div className="exit-button">
                            <button onClick={() => {this.props.openEditPortal(false)}}>X</button>
                        </div>
                    </div>
                    <div className="recipe-description">
                        <textarea 
                            value={this.state.recipeDescription}
                            onChange={this.takeDescription.bind(this)}
                        ></textarea>
                    </div>
                    <div className="submit-button">
                        <button 
                            value={this.props.id}
                            onClick={this.submitChanges.bind(this)}
                        >Submit</button>
                    </div>
                </div>
            </div>, document.getElementById("portal")
        );
    }
}