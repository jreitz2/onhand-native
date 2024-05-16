import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import useFetchRecipeDetails from "../hooks/useFetchRecipeDetails";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { API_KEY } from "@env";

export default function RecipeDetails({ route, navigation }) {
  const { item } = route.params;
  const { recipeDetails, fetchDetails, isLoading } = useFetchRecipeDetails();

  useEffect(() => {
    fetchDetails(item.id);
  }, [item]);

  useEffect(() => {
    console.log(recipeDetails);
  }, [recipeDetails]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>Recipe Details for {item.title}</Text>

      <Pressable onPress={() => navigation.pop()}>
        <Text style={styles.regularText}>Close</Text>
      </Pressable>

      <Image
        key={recipeDetails.nutrition}
        source={{
          uri: recipeDetails.nutrition,
        }}
        style={{ width: 200, height: 500, resizeMode: "contain" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1f5c3",
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
});
