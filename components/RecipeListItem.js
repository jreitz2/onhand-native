import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export default function RecipeListItem({ item, navigation }) {
  return (
    <Pressable onPress={() => navigation.push("Recipe Details", { item })}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.regularText}>
            {String(item.readyTime)} minutes
          </Text>
          <Text>{String(item.likes)} likes</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1f5c3",
    padding: 10,
    marginTop: 10,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "PatrickHand",
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
