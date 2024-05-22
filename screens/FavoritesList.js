import { View, Text, FlatList, StyleSheet } from "react-native";
import RecipeListItem from "../components/RecipeListItem";
import { useFavorites } from "../FavoritesContext";

export default function FavoritesList({ navigation }) {
  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Your favorite recipes:</Text>
      <FlatList
        style={{ width: "100%" }}
        data={favorites}
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
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    padding: 10,
    fontFamily: "PatrickHand",
  },
});
