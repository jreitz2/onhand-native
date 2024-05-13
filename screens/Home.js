import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Text>This is where this list of recipes go</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "mediumseagreen",
    justifyContent: "center",
  },
});
