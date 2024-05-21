import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDiet } from "../DietContext";

export default function Filters() {
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

  const handleVegetarian = () => {
    setIsVegetarian(!isVegetarian);
  };

  const handleGlutenFree = () => {
    setIsGlutenFree(!isGlutenFree);
  };

  const handleDairyFree = () => {
    setIsDairyFree(!isDairyFree);
  };

  const handleVegan = () => {
    setIsVegan(!isVegan);
  };

  const handleKetogenic = () => {
    setIsKetogenic(!isKetogenic);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>Choose from the following filters!</Text>
      <Pressable
        style={isVegetarian ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleVegetarian}
      >
        <Text>Vegetarian</Text>
      </Pressable>
      <Pressable
        style={isGlutenFree ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleGlutenFree}
      >
        <Text>Gluten-Free</Text>
      </Pressable>
      <Pressable
        style={isDairyFree ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleDairyFree}
      >
        <Text>Dairy-Free</Text>
      </Pressable>
      <Pressable
        style={isVegan ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleVegan}
      >
        <Text>Vegan</Text>
      </Pressable>
      <Pressable
        style={isKetogenic ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleKetogenic}
      >
        <Text>Ketogenic</Text>
      </Pressable>
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
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
  filterButtons: {
    backgroundColor: "lightgrey",
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  activeFilterButton: {
    backgroundColor: "mediumseagreen",
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
});
