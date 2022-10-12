import React, {Component} from "react";
import { DetailsPortal } from "../../../../common/portals/details-portal/DetailsPortal";
import "./displayRecipes.css";

export class DisplayRecipes extends Component{

    constructor(){
        super();
        this.state = {
            url : "https://www.themealdb.com/api/json/v1/1/random.php",
            recipes: [],
            openDetailPortal: false,
            recipeName: '',
            recipeDescription: '',
            item: ''
        }
    }

    componentDidMount(){
        
      
        fetch(this.state.url)
            .then((response) => response.json())
            .then(recipe => {
            this.setState(...this.state.recipes, {recipes: recipe.meals})}
        );
    }

    // async fetchData(){
    //     const fetchData = await fetch(this.state.url);
    //     const response = await fetchData.json();
    //     console.log(response);
    // }

    getIngridents(recipe){
        let listIngridients = [];
    
        const keys = Object.keys(recipe);
        const filteredKeys = keys.filter((key) => key.includes("strIngredient"));
        for (const key of filteredKeys) {
          if (recipe[key] != "") {
            listIngridients.push(recipe[key]);
          }
        }
        return listIngridients;
      };
    getMeasure(recipe){
        let listMeasure = [];
    
        const keys = Object.keys(recipe);
        const filteredKeys = keys.filter((key) => key.includes("strMeasure"));
        for (const key of filteredKeys) {
          if (recipe[key] != "" || recipe[key] != null) {
            listMeasure.push(recipe[key]);
          }
        }
        return listMeasure;
      };  
    
    openDetailPortal = (name ,description, item) => {
      this.setState({item: item})
      this.setState({recipeName: name});
      this.setState({recipeDescription: description});
      this.setState({openDetailPortal : !this.state.openDetailPortal})
 
    }  
    render(){
        console.log(this.state.recipes);
        if(this.state.recipes.length == 0){
            return null
        }
        return (
            <div className="recipecHolder">
                {this.state.recipes.map((item) => {
                        return (<div className="recipeContainer">
                            <img  src={item.strMealThumb} alt="Loading" />
                            <h1>{item.strMeal}</h1>
                            <button onClick={() => {
                              this.openDetailPortal(item.strMeal, item.strInstructions, item)}}
                              >Details</button>
                            
                        </div>)
                })}
                {this.state.openDetailPortal === false ? null : 
                    <DetailsPortal 
                        recipeName={this.state.recipeName}
                        recipeDescription={this.state.recipeDescription} 
                        ingridients={this.getIngridents(this.state.item)}
                        measure={this.getMeasure(this.state.item)}
                        openDetailPortal={this.openDetailPortal}                        
                    />}
            </div>
        );
    }
}