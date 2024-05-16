import { FlatList, StyleSheet, View } from "react-native";
import RecipeListItem from "./RecipeListItem";

export default function ResultsList({ recipeData, navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipeData}
        renderItem={({ item }) => (
          <RecipeListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkseagreen",
  },
});
