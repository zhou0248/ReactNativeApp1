import { StyleSheet } from "react-native";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ListPage from "./pages/ListPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Cockatoo" component={AboutPage} />
        <Stack.Screen name="More Parrots" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
