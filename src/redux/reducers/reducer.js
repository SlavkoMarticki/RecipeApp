
const recipes = [];

const reducer = (state = recipes, action) => {
    
    if(action.type === "add"){
         recipes.push(
            {
                id: recipes.length,
                name: action.name,
                description: action.description
            }
        )
    }
    if(action.type === "delete"){
        for(let i = 0; i < recipes.length;i++){
            if(recipes[i].id === action.id){
                recipes.splice(i, 1);
            }
        }
    }
    if(action.type === "edit"){
        for (let i = 0; i < recipes.length; i++) {
           if(recipes[i].id === action.id){
                recipes[i].name = action.recipeName;
                recipes[i].description = action.recipeDescription;
           }
        }
    }
    return state;
}

export default reducer;