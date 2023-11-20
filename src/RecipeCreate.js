import React, { useState } from "react";

function RecipeCreate({createRecipes}) {
  const [name, setName] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [photo, setPhoto] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [preparation, setPreparation] = useState("")
  const handleNameChange = (event) => setName(event.target.value)
  const handleCuisineChange = (event) => setCuisine(event.target.value)
  const handlePhotoChange = (event) => setPhoto(event.target.value)
  const handleIngredientsChange = (event) => setIngredients(event.target.value)
  const handlePreparationChange = (event) => setPreparation(event.target.value)
  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipes({name, cuisine, photo, ingredients, preparation})
    setName("")
    setCuisine("")
    setPhoto("")
    setIngredients("")
    setPreparation("")
  }

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
            <input
              id="name"
              name="name"
              type= "text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
              />
            </td>
            <td>
            <input
              id="cuisine"
              name="cuisine"
              type="text"
              value={cuisine}
              onChange={handleCuisineChange}
              placeholder="Cuisine"
              />
             </td>
             <td>
             <input
              id="photo"
              name="photo"
              type="url"
              value={photo}
              onChange={handlePhotoChange}
              placeholder="URL"
              />
            </td>
            <td>
             <textarea
              id="ingredients"
              name="ingredients"
              type="text"
              value={ingredients}
              onChange={handleIngredientsChange}
              placeholder="Ingredients"
              />
             </td>
            <td>
             <textarea
              id="preparation"
              name="preparation"
              value={preparation}
              type="text"
              onChange={handlePreparationChange}
              placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
