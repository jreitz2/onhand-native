import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useFetchRecipeDetails from "../hooks/useFetchRecipeDetails";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

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

  if (recipeDetails.ingredients) {
    return (
      <View style={styles.container}>
        <FlatList
          data={recipeDetails.ingredients.ingredients}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.regularText}>
              {item.amount.us.value} {item.amount.us.unit} {item.name}
            </Text>
          )}
          ListHeaderComponent={
            <View>
              <View style={styles.detailsTitle}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Pressable onPress={() => navigation.pop()}>
                  <Text style={styles.closeButton}>Close</Text>
                </Pressable>
              </View>
              <Text style={styles.sectionTitleText}>Ingredients</Text>
            </View>
          }
          ListFooterComponent={
            <View>
              <Text style={styles.sectionTitleText}>Instructions</Text>
              {item.instructions.map((instruction, index) => (
                <Text key={index} style={styles.regularText}>
                  {index + 1} {". "} {instruction}
                </Text>
              ))}
              <Image
                key={recipeDetails.nutrition}
                source={{
                  uri: recipeDetails.nutrition,
                }}
                style={styles.image}
              />
            </View>
          }
          style={{ width: 400 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1f5c3",
  },
  detailsTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
    marginLeft: 20,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
    fontFamily: "PatrickHand",
    maxWidth: 300,
  },
  listContainer: {
    flex: 0,
    padding: 10,
    backgroundColor: "blue",
  },
  closeButton: {
    backgroundColor: "black",
    fontFamily: "PatrickHand",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    color: "white",
  },
  sectionTitleText: {
    fontSize: 20,
    padding: 10,
    fontFamily: "PatrickHand",
  },
  image: {
    width: 350,
    height: 600,
    resizeMode: "contain",
    marginVertical: 10,
  },
});
