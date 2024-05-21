import { useState } from "react";
import { API_KEY } from "@env";

export const useFetchRecipes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeData, setRecipeData] = useState(null);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  const fetchRecipeData = async (
    searchTerm,
    isVegetarian,
    isGlutenFree,
    isDairyFree,
    isVegan,
    isKetogenic
  ) => {
    setIsLoading(true);
    const noSpaceSearchTerm = searchTerm.replace(" ", "");
    const key = API_KEY;
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${noSpaceSearchTerm}&number=20&addRecipeInformation=true&addRecipeInstructions=true`;
    let diets = [];
    if (isVegetarian) diets.push("vegetarian");
    if (isGlutenFree) diets.push("gluten-free");
    if (isDairyFree) diets.push("ovo-vegetarian");
    if (isVegan) diets.push("vegan");
    if (isKetogenic) diets.push("ketogenic");

    if (diets.length > 0) {
      url += `&diet=${diets.join(",")}`;
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
        isGlutenFree,
        "isDairyFree",
        isDairyFree,
        "isVegan",
        isVegan,
        "isKetogenic",
        isKetogenic
      );
      if (data.results.length === 0) {
        setNoResults(true);
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
        setNoResults(false);
        setRecipeData(formattedData);
        console.log("formattedData", formattedData);
      } else {
        setRecipeData(null);
        setNoResults(true);
      }
    } catch (error) {
      setError(error);
      setRecipeData(null);
      setNoResults(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    recipeData,
    error,
    fetchRecipeData,
    noResults,
  };
};
