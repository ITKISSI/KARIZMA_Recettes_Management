import React, { useState, useEffect } from 'react';
import MultipleValueTextInput from './MultipleValueTextInput'; 
import RecetteService from '../../Services/RecetteService'; 

const UpdateRecipePage = ({ match }) => {
  const [nom, setNom] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [preparationSteps, setPreparationSteps] = useState([]);
  const [duree, setDuree] = useState('');
  const [photo, setPhoto] = useState(null);

  useEffect(() => {

    const fetchRecipeDetails = async () => {
      try {
        const recipeId = match.params.id;
        const recipe = await RecetteService.getRecetteById(recipeId);


        setNom(recipe.nom);
        setIngredients(recipe.ingredients);
        setPreparationSteps(recipe.preparationSteps);
        setDuree(recipe.duree);

    } catch (error) {
        console.error('Error fetching recipe details:', error);

    }
    };

    fetchRecipeDetails();
  }, [match.params.id]);

  const handlePhotoChange = (e) => {

    const newPhoto = e.target.files[0];
    setPhoto(newPhoto);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('nom', nom);
    formData.append('duree', duree);
    formData.append('photo', photo);
    ingredients.forEach((ingredient, index) => formData.append(`ingredients[${index}]`, ingredient));
    preparationSteps.forEach((step, index) => formData.append(`preparationSteps[${index}]`, step));

    try {
      await RecetteService.updateRecette(match.params.id, formData);

    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  return (
    <div>
      <h2>Update Recipe</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <br />
        <label>
          Ingredients:
          <MultipleValueTextInput
            onItemAdded={(item, allItems) => setIngredients(allItems)}
            onItemDeleted={(item, allItems) => setIngredients(allItems)}
            label="Ingredients"
            name="ingredient-input"
            placeholder="Enter ingredients; separate them with COMMA or ENTER."
          />
        </label>
        <br />
        <label>
          Preparation Steps:
          <MultipleValueTextInput
            onItemAdded={(item, allItems) => setPreparationSteps(allItems)}
            onItemDeleted={(item, allItems) => setPreparationSteps(allItems)}
            label="Preparation Steps"
            name="preparation-step-input"
            placeholder="Enter preparation steps; separate them with COMMA or ENTER."
          />
        </label>
        <br />
        <label>
          Duree:
          <input type="text" value={duree} onChange={(e) => setDuree(e.target.value)} />
        </label>
        <br />
        <label>
          Photo:
          <input type="file" onChange={handlePhotoChange} />
        </label>
        <br />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default UpdateRecipePage;
