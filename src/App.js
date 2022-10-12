import React, {Component} from "react";
import { Home } from "./pages/home/Home";
import { AddRecipe } from "./pages/add-recipe";
import { EditRecipe } from "./pages/edit-recipe/EditRecipe";
import { NotFoundPage } from "./pages/not-found-page/NotFoundPage";
import { LandingPage } from "./pages/landing-page/landingPage";
import { UserRecipes } from "./pages/user-recipes/UserRecipes";
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom"

export default class App extends Component{
    render(){
      return(<Router>
            <Routes>
                <Route index element={<LandingPage />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/addrecipe" element={<AddRecipe />}/>
                <Route path="/editrecipe" element={<EditRecipe />}/>
                <Route path="/userrecipes" element={<UserRecipes />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </Router>)
    }
}