import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

export default function AboutPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.contentainer}>
          <View style={styles.btn}>
            <Button
              title="Home Page"
              onPress={() => navigation.navigate("Home")}
              color={"#802b2b"}
            ></Button>
          </View>
          <Image
            source={require("../assets/cockatoo.jpg")}
            style={styles.pic}
          />
          <Text style={styles.text}>
            Lorem Ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
          </Text>
          <View style={styles.btnList}>
            <Button
              title="I want to see More Parrots"
              onPress={() => navigation.navigate("More Parrots")}
              color={"#802b2b"}
            ></Button>
          </View>
          <View style={styles.btn}>
            <Button
              title="Home Page"
              onPress={() => navigation.navigate("Home")}
              color={"#802b2b"}
            ></Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcc",
  },
  contentainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  pic: {
    borderColor: "#665252",
    borderWidth: 5,
    borderRadius: 20,
    width: 300,
    height: 400,
    marginBottom: 20,
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#ffeeee",
    borderColor: "#ffeeee",
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  btnList: {
    backgroundColor: "#ffeeee",
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 2,
    borderColor: "#994444",
  },
  text: {
    fontSize: 16,
  },
});
