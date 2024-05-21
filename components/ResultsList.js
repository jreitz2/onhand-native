import { FlatList, StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import React from "react";
import RecipeListItem from "./RecipeListItem";

export default function ResultsList({ recipeData, navigation, noResults }) {
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
      <FlatList
        data={recipeData}
        ref={flatListRef}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <RecipeListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            {recipeData && recipeData.length === 1 && (
              <View>
                <Text style={styles.regularText}>
                  {recipeData.length} recipe found
                </Text>
              </View>
            )}
            {recipeData && recipeData.length > 1 && (
              <View>
                <Text style={styles.regularText}>
                  {recipeData.length} recipes found
                </Text>
              </View>
            )}
            {noResults && (
              <View>
                <Text style={styles.errorText}>
                  No recipes found. Please try fewer ingredients or filters.
                </Text>
              </View>
            )}
          </>
        }
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
  },
  regularText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
  errorText: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
    color: "firebrick",
  },
  backToTopButton: {
    position: "absolute",
    width: 100,
    bottom: 10,
    right: "50%",
    transform: [{ translateX: 50 }],
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    borderRadius: 25,
  },
});
