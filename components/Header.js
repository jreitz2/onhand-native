import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { useDiet } from "../DietContext";

export default function Header({ fetchRecipeData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    isVegetarian,
    setIsVegetarian,
    isGlutenFree,
    setIsGlutenFree,
    isDairyFree,
    setIsDairyFree,
    isVegan,
    setIsVegan,
    isKetogenic,
    setIsKetogenic,
  } = useDiet();

  const handleSearch = (searchTerm) => {
    fetchRecipeData(
      searchTerm,
      isVegetarian,
      isGlutenFree,
      isDairyFree,
      isVegan,
      isKetogenic
    );
    setSearchTerm("");
  };

  useEffect(() => {
    fetchRecipeData(
      "Bacon, sugar, flour",
      isVegetarian,
      isGlutenFree,
      isDairyFree,
      isVegan,
      isKetogenic
    );
  }, []);

  return (
    <ImageBackground
      source={require("../assets/background.jpeg")}
      style={styles.header}
    >
      <View>
        <Text style={styles.headerText}>On-Hand Cuisine</Text>

        <View>
          <Text style={styles.regularText}>
            Search by ingredients you already have on-hand!
          </Text>
        </View>
        <View style={styles.search}>
          <View>
            <TextInput
              style={(styles.regularText, styles.textInput)}
              placeholder="Bacon, sugar, flour"
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
            <View style={styles.filters}>
              {isVegetarian && (
                <View style={styles.filterBackground}>
                  <Text style={styles.filterText}>Vegetarian</Text>
                  <Pressable onPress={() => setIsVegetarian(false)}>
                    <Text>X</Text>
                  </Pressable>
                </View>
              )}
              {isGlutenFree && (
                <View style={styles.filterBackground}>
                  <Text style={styles.filterText}>Gluten-Free</Text>
                  <Pressable onPress={() => setIsGlutenFree(false)}>
                    <Text>X</Text>
                  </Pressable>
                </View>
              )}
              {isDairyFree && (
                <View style={styles.filterBackground}>
                  <Text style={styles.filterText}>Dairy-Free</Text>
                  <Pressable onPress={() => setIsDairyFree(false)}>
                    <Text>X</Text>
                  </Pressable>
                </View>
              )}
              {isVegan && (
                <View style={styles.filterBackground}>
                  <Text style={styles.filterText}>Vegan</Text>
                  <Pressable onPress={() => setIsVegan(false)}>
                    <Text>X</Text>
                  </Pressable>
                </View>
              )}
              {isKetogenic && (
                <View style={styles.filterBackground}>
                  <Text style={styles.filterText}>Keto</Text>
                  <Pressable onPress={() => setIsKetogenic(false)}>
                    <Text>X</Text>
                  </Pressable>
                </View>
              )}
            </View>
          </View>
          <Pressable onPress={() => handleSearch(searchTerm)}>
            <Text style={styles.button}>Search</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      web: {
        width: "100%",
        height: "100%",
      },
    }),
    flex: 0.4,
    backgroundColor: "mediumseagreen",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    padding: 5,
    fontFamily: "PatrickHand",
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
  textInput: {
    backgroundColor: "white",
    width: 250,
    marginLeft: 10,
    borderRadius: 5,
    padding: 5,
    fontSize: 18,
    height: 48,
    fontFamily: "PatrickHand",
  },
  search: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    borderRadius: 5,
    color: "white",
    backgroundColor: "black",
    marginRight: 10,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: "PatrickHand",
  },
  filters: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 300,
    marginLeft: 10,
  },
  filterText: {
    fontSize: 14,
    fontFamily: "PatrickHand",
  },
  filterBackground: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#d6d6d6",
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
});
