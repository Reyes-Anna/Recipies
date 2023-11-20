import React from "react";


function RecipeView({recipes, deleteRecipe, index}) {
  return (
    <tr>
      <td><p>{recipes.name}</p></td>
      <td><p>{recipes.cuisine}</p></td>
      <td><img src={recipes.photo} alt="cuisine"/></td>
      <td className="content_td"><p>{recipes.ingredients}</p></td>
      <td className="content_td"><p>{recipes.preparation}</p></td>
      <td>
        <button name="delete" onClick={() =>deleteRecipe(index)}>
        Delete
        </button>
      </td>
    </tr>
  )
  
}
function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th> Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
                {recipes.map((recipe, index) => (
            <tbody className="recipe" key="index">
              <RecipeView recipes={recipe} deleteRecipe={deleteRecipe} index={index}/>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default RecipeList;
