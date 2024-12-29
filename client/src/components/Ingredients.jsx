export default function Ingredients(props) {
    const listedIngredients = props.ingredients.map(ingredient =>
        <li key={ingredient}> {ingredient} </li>
    )
    return (
        props.ingredients.length ? (
            <section>
                <h2>Ingredients Added: </h2>
                <ul className="ingredients-list" aria-live="polite">
                    {listedIngredients}
                </ul>
                {
                    props.ingredients.length >= 4 ? (
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={ props.getRecipe }>
                            {props.recipe ? "Recipe Generated" : "Generate the recipe"}
                        </button>
                    </div>
                    ) : ``
                }
            </section>
        ) : (
            ``
        )
    );
}
