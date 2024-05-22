import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesList from "./FavoritesList";
import RecipeDetails from "./RecipeDetails";

const Stack = createStackNavigator();

export default function FavoritesScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites List"
        options={{ headerShown: false }}
        children={(props) => <FavoritesList {...props} />}
      />
      <Stack.Screen
        name="Recipe Details"
        options={{ headerShown: false }}
        component={RecipeDetails}
      />
    </Stack.Navigator>
  );
}
