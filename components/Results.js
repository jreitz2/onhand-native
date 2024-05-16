import { ActivityIndicator, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ResultsList from "./ResultsList";
import RecipeDetails from "../screens/RecipeDetails";

export default function Results({ isLoading, recipeData, error }) {
  const Stack = createStackNavigator();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Results List"
        options={{
          headerShown: false,
        }}
        children={(props) => (
          <ResultsList
            {...props}
            isLoading={isLoading}
            recipeData={recipeData}
            error={error}
          />
        )}
      />
      <Stack.Screen
        name="Recipe Details"
        options={{
          headerShown: false,
        }}
        component={RecipeDetails}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
});
