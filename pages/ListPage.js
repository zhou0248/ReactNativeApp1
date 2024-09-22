import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import SegmentedControl from "@react-native-community/segmented-control";

export default function ListPage({ navigation }) {
  const [parrotIndex, setParrotIndex] = React.useState(0);
  return (
    <SafeAreaView>
      <View styles={styles.container}>
        <SegmentedControl
          values={["African Grey", "Cockatiel", "Parakeet", "Sun Conure"]}
          selectedIndex={parrotIndex}
          onChange={(event) =>
            setParrotIndex(event.nativeEvent.selectedSegmentIndex)
          }
        />
        <FlatList
          style={styles.itemContainer}
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.item}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.text}> Home Page</Text>
        </Pressable>
      </View>
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
  { id: "3", title: "Parakeet", image: require("../assets/parakeet.jpg") },
  { id: "4", title: "Sun Conure", image: require("../assets/conure.jpg") },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff3f3",
    justifyContent: "flex-start",
  },
  itemContainer: {
    marginTop: 15,
  },
  item: {
    padding: 20,
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
