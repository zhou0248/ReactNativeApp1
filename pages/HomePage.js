import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomePage({ navigation }) {
  const backgroundIMG = require("../assets/cockatiel2.jpg");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Cookie Cookie 🎵🎵 Cookie Cookie 🎵🎵</Text>
        <ImageBackground
          source={backgroundIMG}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.btn}>
            <Button
              color="#561510"
              title="Parrot of the Day"
              onPress={() => navigation.navigate("Cockatoo")}
            ></Button>
          </View>
        </ImageBackground>
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
    height: 700,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
    opacity: 0.8,
    backgroundColor: "#caa",
  },
  text: {
    padding: 20,
    fontSize: 16,
    color: "#190808",
    backgroundColor: "#ffcccc",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#ffeeee",
    borderColor: "#992222",
    borderWidth: 3,
    borderRadius: 10,
    padding: 8,
    marginBottom: 50,
  },
});
