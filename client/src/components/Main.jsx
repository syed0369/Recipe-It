import { useState } from "react";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
import axios from "axios";

export default function Main() {
    
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");
    
    function formAction(formData) {
        const newIngredient = formData.get("ingredient");
        if (newIngredient === ``) { 
            alert("Add Ingredient Name");
            return;
        }
        if(ingredients.indexOf(newIngredient) != -1) {
            alert("Ingredient Already Added");
            return;
        }
        setIngredients(ingredients => [...ingredients, newIngredient]);
    }

    async function getRecipe() {
        const recipe = await axios.get(`http://localhost:8080/recipe?ingredients=${ingredients.join(",")}`);
        setRecipe(recipe);
    }

    return (
        <>
            <form action={formAction} className="form">
                <input type="text" placeholder="eg. cucumber" aria-label="Enter Ingredient" name="ingredient" autoFocus />
                <button> + Add Ingredient </button>
            </form> 
            <Ingredients ingredients = {ingredients} getRecipe = {getRecipe} recipe = {recipe} />
            <Recipe markdown = {recipe} />
        </>
    );
}