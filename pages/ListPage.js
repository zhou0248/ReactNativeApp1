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
        <View styles={styles.segmentControl}>
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
            }}
          />
        </View>
        <View styles={styles.listItems}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.item}>{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View styles={styles.btnGroup}>
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
  { id: "4", title: "macaw" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff3f3",
    justifyContent: "center",
    alignItems: "center",
  },
  listItems: {
    marginTop: 15,
    maxHeight: 250,
  },
  item: {
    padding: 15,
    fontSize: 20,
    backgroundColor: "#ffeeee",
    color: "#190808",
    margin: 5,
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#ffeeee",
    borderColor: "#994444",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    width: 150,
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#190808",
  },
});
