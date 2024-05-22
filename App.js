import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Filters from "./screens/Filters";
import Favorites from "./screens/Favorites";
import { DietProvider } from "./DietContext";
import { FavoritesProvider } from "./FavoritesContext";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    PatrickHand: require("./assets/fonts/PatrickHandRegular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (fontsLoaded) {
    return (
      <DietProvider>
        <FavoritesProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = focused ? "home-sharp" : "home-outline";
                  } else if (route.name === "Filters") {
                    iconName = focused
                      ? "filter-circle-sharp"
                      : "filter-circle-outline";
                  } else if (route.name === "Favorites") {
                    iconName = focused
                      ? "heart-circle-sharp"
                      : "heart-circle-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "mediumseagreen",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Filters" component={Filters} />
              <Tab.Screen name="Favorites" component={Favorites} />
            </Tab.Navigator>
          </NavigationContainer>
        </FavoritesProvider>
      </DietProvider>
    );
  }
}
