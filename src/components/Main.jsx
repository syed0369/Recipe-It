import { useState } from "react";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
import getRecipeFromAI from "./gemini-model";

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
        const markedDown = await getRecipeFromAI(ingredients);
        setRecipe(markedDown);
    }

    function toggleShow() {
        setShow(show => !show)
    }

    return (
        <>
            <form action={formAction} className="form">
                <input type="text" placeholder="eg. cucumber" aria-label="Enter Ingredient" name="ingredient" autoFocus />
                <button> + Add Ingredient </button>
            </form> 
            <Ingredients ingredients = {ingredients} getRecipe = {getRecipe} recipe = {recipe} />
            <Recipe markedDown = {recipe} />
        </>
    );
}