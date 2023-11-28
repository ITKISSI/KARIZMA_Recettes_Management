import React, { useState, useEffect } from 'react';
import RecetteService  from '../../Services/RecetteService'; 

const RecetteList = () => {
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RecetteService.getAllRecettes();
        setRecettes(response.data);
      } catch (error) {
        console.error('Error fetching recettes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Recette List</h2>
      <ul>
        {recettes.map((recette) => (
          <li key={recette.id}>
            <strong>{recette.nom}</strong>
            <p>Ingredients: {recette.ingredients.join(', ')}</p>
            <p>Steps: {recette.steps.join(', ')}</p>
            <p>Duree: {recette.duree} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecetteList;
