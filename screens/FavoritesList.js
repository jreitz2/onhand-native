import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import RecipeListItem from "../components/RecipeListItem";
import { useFavorites } from "../FavoritesContext";

export default function FavoritesList({ navigation }) {
  const { favorites } = useFavorites();

  const [showBackToTop, setShowBackToTop] = useState(false);

  const flatListRef = React.createRef();

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 0) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const handleBackToTop = () => {
    flatListRef.current.scrollToIndex({ index: 0 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Your favorite recipes:</Text>
      <FlatList
        style={{ width: "100%" }}
        data={favorites}
        ref={flatListRef}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <RecipeListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
      {showBackToTop && (
        <Pressable onPress={handleBackToTop} style={styles.backToTopButton}>
          <Text style={styles.regularText}>Back to Top</Text>
        </Pressable>
      )}
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
    marginTop: 10,
    fontFamily: "PatrickHand",
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
  backToTopButton: {
    position: "absolute",
    width: 120,
    height: 40,
    bottom: 10,
    right: "50%",
    transform: [{ translateX: 60 }],
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
