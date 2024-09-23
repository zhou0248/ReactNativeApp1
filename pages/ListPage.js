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
];

const data = [
  {
    id: "0",
    title: "African Grey",
  },
  {
    id: "1",
    title: "Cockatiel",
  },
  { id: "2", title: "Parakeet" },
  { id: "3", title: "Sun Conure" },
  { id: "4", title: "Macaw" },
];

const styles = StyleSheet.create({
  itemList: {
    marginTop: 20,
  },
  item: {
    padding: 15,
    backgroundColor: "#ffeeee",
    color: "#190808",
    margin: 5,
    borderBottomColor: "#994444",
    borderBottomWidth: 2,
  },
  itemText: {
    fontSize: 20,
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
