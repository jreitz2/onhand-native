import { StyleSheet, View, Text, Image, Pressable, Share } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from "../FavoritesContext";

export default function RecipeListItem({ item, navigation }) {
  const { favorites, setFavorites } = useFavorites();

  const handleFavoritePress = () => {
    if (favorites.some((favoriteItem) => favoriteItem.id === item.id)) {
      setFavorites(
        favorites.filter((favoriteItem) => favoriteItem.id !== item.id)
      );
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const isFavorite = favorites.some(
    (favoriteItem) => favoriteItem.id === item.id
  );

  const handleSharePress = async () => {
    try {
      const result = await Share.share({
        message: `Check out this recipe: ${item.title}! ${item.imageUrl}`,
      });

      if (result.action === Share.sharedAction) {
        console.log("Shared successfully");
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dialog was dismissed");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Pressable onPress={() => navigation.push("Recipe Details", { item })}>
      <View style={styles.container}>
        <View style={styles.itemHeader}>
          <Text style={styles.title}>{item.title}</Text>
          {isFavorite ? (
            <Ionicons
              name={"bookmark"}
              size={30}
              color={"black"}
              onPress={handleFavoritePress}
            />
          ) : (
            <Ionicons
              name={"bookmark-outline"}
              size={30}
              color={"black"}
              onPress={handleFavoritePress}
            />
          )}
        </View>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Ionicons name={"timer-outline"} size={30} color={"black"} />
            <Text style={styles.regularText}>{item.readyTime} minutes</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons
              name={"share-outline"}
              size={30}
              color={"black"}
              onPress={handleSharePress}
            />
            <Text style={styles.regularText}>Share</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9f5e9",
    padding: 10,
    marginTop: 10,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "PatrickHand",
    maxWidth: "80%",
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
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
