import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function RecipeDetails({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>Recipe Details for {item.title}</Text>

      <Pressable onPress={() => navigation.pop()}>
        <Text style={styles.regularText}>Close</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#c1f5c3",
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
});
