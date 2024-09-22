import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomePage({ navigation }) {
  const backgroundIMG = require("../assets/cockatoo2.jpg");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Cookie Cookie 🎵🎵 Cookie Cookie 🎵🎵</Text>
        <Image source={backgroundIMG} style={styles.image} />
        <View style={styles.btn}>
          <Button
            color="#190808"
            title="Parrot of the Day"
            onPress={() => navigation.navigate("Cockatoo")}
          ></Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffeeee",
    alignItems: "center",
  },
  image: {
    height: 600,
    width: 400,
    marginBottom: 20,
    justifyContent: "center",
  },
  text: {
    padding: 20,
    fontSize: 16,
    color: "#190808",
    backgroundColor: "#ffcccc",
    textAlign: "center",
  },
});
