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
