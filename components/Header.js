import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button,
  Pressable,
} from "react-native";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

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
          <TextInput
            style={(styles.regularText, styles.textInput)}
            placeholder="Bacon, sugar, flour"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />

          <Pressable onPress={() => console.log(searchTerm)}>
            <Text style={styles.button}>Search</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.4,
    backgroundColor: "mediumseagreen",
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    padding: 10,
  },
  regularText: {
    fontSize: 14,
    padding: 10,
  },
  textInput: {
    backgroundColor: "white",
    width: 250,
    marginLeft: 0,
    borderRadius: 5,
    padding: 5,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 5,
    color: "white",
    backgroundColor: "black",
    marginLeft: 10,
    padding: 10,
  },
});
