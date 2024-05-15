import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Results from "../components/Results";
import { useFetchRecipes } from "../hooks/useFetchRecipes";

export default function Home() {
  const { isLoading, recipeData, error, fetchRecipeData } = useFetchRecipes();

  return (
    <View style={styles.container}>
      <Header fetchRecipeData={fetchRecipeData} />
      <Results isLoading={isLoading} recipeData={recipeData} error={error} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkseagreen",
    justifyContent: "center",
  },
});
