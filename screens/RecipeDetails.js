import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React from "react";
import useFetchRecipeDetails from "../hooks/useFetchRecipeDetails";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

export default function RecipeDetails({ route, navigation }) {
  const { item } = route.params;
  const { recipeDetails, fetchDetails, isLoading } = useFetchRecipeDetails();

  useEffect(() => {
    fetchDetails(item.id);
  }, [item]);

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

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (recipeDetails.ingredients) {
    const htmlWithScalingCSS = `
    <head>
      <style>
        body {
          zoom: 2.5;
        }
      </style>
    </head>
    <body>
      ${recipeDetails.nutrition}
    </body>
  `;

    return (
      <View style={styles.container}>
        <FlatList
          data={recipeDetails.ingredients.ingredients}
          keyExtractor={(item, index) => index.toString()}
          ref={flatListRef}
          onScroll={handleScroll}
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
              {Platform.OS !== "web" && recipeDetails.nutrition && (
                <WebView
                  source={{
                    html: htmlWithScalingCSS,
                  }}
                  style={styles.nutritionLabel}
                />
              )}
            </View>
          }
          style={{ width: 400 }}
        />
        {showBackToTop && (
          <Pressable onPress={handleBackToTop} style={styles.backToTopButton}>
            <Text style={styles.regularTextButton}>Back to Top</Text>
          </Pressable>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
  nutritionLabel: {
    marginVertical: 10,
    width: 400,
    height: 650,
    backgroundColor: "#c1f5c3",
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
    alignItems: "center",
    justifyContent: "center",
  },
  regularTextButton: {
    fontSize: 16,
    padding: 10,
    fontFamily: "PatrickHand",
  },
});
