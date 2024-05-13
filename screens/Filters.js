import { StyleSheet, Text, View } from "react-native";

export default function Filters() {
  return (
    <View style={styles.container}>
      <Text>Filters Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
