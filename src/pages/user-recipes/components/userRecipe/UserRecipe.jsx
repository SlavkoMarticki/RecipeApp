import React,{Component} from "react";
import { DetailsPortal } from "../../../../common/portals/details-portal/index"
import { EditPortal } from "../../../../common/portals/edit-portal/index";
import store from "../../../../redux/store";
import "./userRecipe.css";

export class UserRecipe extends Component{

    constructor(){
        super();
        this.state = {
            openDetailPortal: false,
            openEditPortal: false,
            recipeName: '',
            recipeDescription: '',
            id: ''
        }
    }

    takeRecipeId(id){
        store.dispatch({
            type: "delete",
            id: id
        })
    }
    openDetailPortal = (name, description) =>{
        console.log(name);
        console.log(description);
        this.setState({recipeName: name});
        this.setState({recipeDescription: description});
        this.setState({openDetailPortal : !this.state.openDetailPortal})
    }
    openEditPortal = (id, name, description) => {
        this.setState({id: id});
        this.setState({recipeName: name});
        this.setState({recipeDescription: description});
        this.setState({openEditPortal: !this.state.openEditPortal});
    }

    render(){
        
        return(
            <div className="recipes-holder">
                {this.props.recipes.map(item => {
                    console.log(item);
                    return (
                    <div className="recipe">
                        <h1>{item.name}</h1>
                        <div className="buttons">
                            <button 
                                className="delete" 
                                value={item.id}
                                onClick={() => {
                                    this.takeRecipeId(item.id)
                                    this.props.renderPage(true)}}
                            >Delete</button>
                            <button onClick={() => {
                                this.openEditPortal(item.id, item.name, item.description)
                            }}>Edit</button>
                            <button onClick={()=>{
                                this.openDetailPortal(item.name, item.description)}}
                            >Details</button>
                        </div>
                    </div> )
                })}
                {this.state.openDetailPortal ? <DetailsPortal 
                    recipeName={this.state.recipeName}
                    recipeDescription={this.state.recipeDescription}
                    openDetailPortal={this.openDetailPortal}
                /> : ''}
                {this.state.openEditPortal ? <EditPortal
                    id={this.state.id}
                    recipeName={this.state.recipeName}
                    recipeDescription={this.state.recipeDescription}
                    openEditPortal={this.openEditPortal}
                /> : ''}
                           
            </div>
            
        );
    }
}