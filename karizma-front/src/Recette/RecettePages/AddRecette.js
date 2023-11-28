import React, { useState } from 'react';
import MultipleValueTextInput from 'react-multivalue-text-input';
import RecetteService from '../../Services/RecetteService';

const AddRecipePage = () => {
  const [nom, setNom] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [preparationSteps, setPreparationSteps] = useState([]);
  const [duree, setDuree] = useState('');
  const [photo, setPhoto] = useState(null);

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
      await RecetteService.addRecette(formData);

      setNom('');
      setIngredients([]);
      setPreparationSteps([]);
      setDuree('');
      setPhoto(null);

    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <div>
      <h2>Add Recipe</h2>
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
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipePage;
