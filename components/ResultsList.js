import { FlatList, StyleSheet, View, Text } from "react-native";
import RecipeListItem from "./RecipeListItem";

export default function ResultsList({ recipeData, navigation, noResults }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipeData}
        renderItem={({ item }) => (
          <RecipeListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            {recipeData && recipeData.length === 1 && (
              <View>
                <Text style={styles.regularText}>
                  {recipeData.length} recipe found
                </Text>
              </View>
            )}
            {recipeData && recipeData.length > 1 && (
              <View>
                <Text style={styles.regularText}>
                  {recipeData.length} recipes found
                </Text>
              </View>
            )}
            {noResults && (
              <View>
                <Text style={styles.errorText}>
                  No recipes found. Please try fewer ingredients or filters.
                </Text>
              </View>
            )}
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkseagreen",
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
  errorText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
    color: "firebrick",
  },
});
