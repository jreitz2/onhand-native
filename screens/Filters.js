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
      <Text style={styles.titleText}>Choose from the following filters!</Text>
      <Pressable
        style={isVegetarian ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleVegetarian}
      >
        <Text style={styles.regularText}>Vegetarian</Text>
      </Pressable>
      <Pressable
        style={isGlutenFree ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleGlutenFree}
      >
        <Text style={styles.regularText}>Gluten-Free</Text>
      </Pressable>
      <Pressable
        style={isDairyFree ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleDairyFree}
      >
        <Text style={styles.regularText}>Dairy-Free</Text>
      </Pressable>
      <Pressable
        style={isVegan ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleVegan}
      >
        <Text style={styles.regularText}>Vegan</Text>
      </Pressable>
      <Pressable
        style={isKetogenic ? styles.activeFilterButton : styles.filterButtons}
        onPress={handleKetogenic}
      >
        <Text style={styles.regularText}>Ketogenic</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bef7be",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 26,
    padding: 10,
    fontFamily: "PatrickHand",
  },
  regularText: {
    fontSize: 18,
    padding: 12,
    fontFamily: "PatrickHand",
  },
  filterButtons: {
    backgroundColor: "#d6d6d6",
    margin: 10,
    borderRadius: 15,
  },
  activeFilterButton: {
    backgroundColor: "mediumseagreen",
    margin: 10,
    borderRadius: 15,
  },
});
