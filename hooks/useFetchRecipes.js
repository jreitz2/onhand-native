import { useState } from "react";
import { API_KEY } from "@env";

export const useFetchRecipes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeData, setRecipeData] = useState(null);
  const [error, setError] = useState(null);

  const fetchRecipeData = async (searchTerm, isVegetarian, isGlutenFree) => {
    setIsLoading(true);
    const noSpaceSearchTerm = searchTerm.replace(" ", "");
    const key = API_KEY;
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${noSpaceSearchTerm}&number=6&addRecipeInformation=true&addRecipeInstructions=true`;
    if (isVegetarian && !isGlutenFree) {
      url += "&diet=vegetarian";
    }
    if (isGlutenFree && !isVegetarian) {
      url += "&diet=gluten-free";
    }
    if (isGlutenFree && isVegetarian) {
      url += "&diet=vegetarian,gluten-free";
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(
        "searchTerm",
        searchTerm,
        "isVegetarian",
        isVegetarian,
        "isGlutenFree",
        isGlutenFree
      );
      if (data.results.length === 0) {
        setRecipeData(null);
      } else if (data.results) {
        const formattedData = data.results.map((recipe) => ({
          id: recipe.id,
          title: recipe.title,
          likes: recipe.aggregateLikes,
          imageUrl: recipe.image,
          instructions: recipe.analyzedInstructions
            ? recipe.analyzedInstructions.flatMap((instruction) =>
                instruction.steps.map((step) => step.step)
              )
            : [],
          readyTime: recipe.readyInMinutes,
        }));
        setRecipeData(formattedData);
        console.log("formattedData", formattedData);
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, setIsLoading, recipeData, error, fetchRecipeData };
};
