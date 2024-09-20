import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";

export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Pressable style={styles.btn} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}> Home Page</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    title: "African Grey",
    image: require("../assets/african_grey.jpg"),
  },
  {
    id: "2",
    title: "Cockatiel",
    image: require("../assets/cockatiel.jpg"),
  },
  { id: "3", title: "Macaw", image: require("../assets/macaw.jpg") },
  { id: "4", title: "Parakeet", image: require("../assets/parakeet.jpg") },
  { id: "5", title: "Sun Conure", image: require("../assets/conure.jpg") },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  item: {
    padding: 16,
    fontSize: 20,
    backgroundColor: "#ffeeee",
    color: "#190808",
    margin: 5,
  },
  btn: {
    backgroundColor: "#ffeeee",
    borderColor: "#ffeeee",
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#190808",
  },
});
