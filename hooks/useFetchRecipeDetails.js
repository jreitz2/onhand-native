import { useState } from "react";
import { API_KEY } from "@env";

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
      const nutritionResponse = await fetch(
        `https://api.spoonacular.com/recipes/${id}/nutritionLabel?apiKey=${key}`
      );
      const nutritionData = await nutritionResponse.text();
      setRecipeDetails({
        nutrition: nutritionData,
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
