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
      <View>
        <View>
          <SegmentedControl
            values={["African Grey", "Cockatiel", "Parakeet", "Sun Conure"]}
            selectedIndex={parrotIndex}
            onChange={(event) => {
              setParrotIndex(event.nativeEvent.selectedSegmentIndex);
            }}
            backgroundColor={"#ffe1e1"}
          />
          <Image
            source={images[parrotIndex]}
            style={{
              width: 250,
              height: 250,
              borderRadius: 20,
              alignSelf: "center",
              marginTop: 20,
              borderColor: "#665252",
              borderWidth: 3,
            }}
          />
        </View>
        <View style={styles.itemList}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image style={styles.thumbnail} source={item.img} />
                <Text style={styles.itemText}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.btnGroup}>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.text}>Home Page</Text>
          </Pressable>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate("Cockatoo")}
          >
            <Text style={styles.text}>Cockatoo</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
const images = [
  require("../assets/africangrey.jpg"),
  require("../assets/cockatiel.jpg"),
  require("../assets/parakeet.jpg"),
  require("../assets/sunconure.jpg"),
  require("../assets/macaw.jpg"),
];

const data = [
  {
    id: "0",
    title: "African Grey",
    img: images[0],
  },
  {
    id: "1",
    title: "Cockatiel",
    img: images[1],
  },
  { id: "2", title: "Parakeet", img: images[2] },
  { id: "3", title: "Sun Conure", img: images[3] },
  { id: "4", title: "Macaw", img: images[4] },
];

const styles = StyleSheet.create({
  itemList: {
    marginTop: 20,
    maxHeight: 300,
  },
  item: {
    padding: 10,
    backgroundColor: "#ffeeee",
    color: "#190808",
    margin: 5,
    borderBottomColor: "#994444",
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 3,
    alignSelf: "flex-end",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  btn: {
    backgroundColor: "#ffeeee",
    borderColor: "#994444",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    width: 150,
  },
  text: {
    fontSize: 18,
    color: "#190808",
    textAlign: "center",
  },
});
