import { useState } from "react";
import { API_KEY } from "@env";
import { useFetchRecipes } from "./useFetchRecipes";

export default function useFetchRecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchDetails = async (id) => {
    setIsLoading(true);
    const key = API_KEY;
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${key}`
      );
      const ingredientData = await response.json();

      setRecipeDetails({
        nutrition: `https://api.spoonacular.com/recipes/${id}/nutritionLabel.png?apiKey=${key}`,
        ingredients: ingredientData,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { recipeDetails, fetchDetails, isLoading };
}
