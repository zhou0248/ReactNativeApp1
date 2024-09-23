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
              title="Show Me More Parrots"
              onPress={() => navigation.navigate("More Parrots")}
              color={"#802b2b"}
            ></Button>
          </View>
          <Image
            source={require("../assets/cockatoo.jpg")}
            style={styles.pic}
          />
          <Text style={styles.text}>
            A cockatoo is any of the 21 species of parrots belonging to the
            family Cacatuidae, the only family in the superfamily Cacatuoidea.
            Along with the Psittacoidea (true parrots) and the Strigopoidea
            (large New Zealand parrots), they make up the order Psittaciformes.
            The family has a mainly Australasian distribution, ranging from the
            Philippines and the eastern Indonesian islands of Wallacea to New
            Guinea, the Solomon Islands and Australia.{" "}
          </Text>
          <Text style={styles.text}>
            Cockatoos are recognisable by the prominent crests and curved bills.
            Their plumage is generally less colourful than that of other
            parrots, being mainly white, grey or black and often with coloured
            features in the crest, cheeks or tail. On average they are larger
            than other parrots; however, the cockatiel, the smallest cockatoo
            species, is medium-sized. The phylogenetic position of the cockatiel
            remains unresolved, except that it is one of the earliest offshoots
            of the cockatoo lineage. The remaining species are in two main
            clades. The five large black-coloured cockatoos of the genus
            Calyptorhynchus form one branch. The second and larger branch is
            formed by the genus Cacatua, comprising 12 species of white-plumaged
            cockatoos and three monotypic genera that branched off earlier;
            namely the pink and grey galah, the mainly grey gang-gang cockatoo
            and the large black-plumaged palm cockatoo.{" "}
          </Text>
          <Text style={styles.text}>
            Cockatoos prefer to eat seeds, tubers, corms, fruit, flowers and
            insects. They often feed in large flocks, particularly when
            ground-feeding. Cockatoos are monogamous and nest in tree hollows.
            Some cockatoo species have been adversely affected by habitat loss,
            particularly from a shortage of suitable nesting hollows after large
            mature trees are cleared; conversely, some species have adapted well
            to human changes and are considered agricultural pests.{" "}
          </Text>
          <Text style={styles.text}>
            Cockatoos are popular birds in aviculture, but their needs are
            difficult to meet. The cockatiel is the easiest cockatoo species to
            maintain and is by far the most frequently kept in captivity. White
            cockatoos are more commonly found in captivity than black cockatoos.
            Illegal trade in wild-caught birds contributes to the decline of
            some cockatoo species in the wild.
          </Text>
          <View style={styles.btn}>
            <Button
              title="Home Page"
              onPress={() => navigation.navigate("Home")}
              color={"#802b2b"}
            ></Button>
          </View>
          <View style={styles.btn}>
            <Button
              title="Show Me More Parrots🦜"
              onPress={() => navigation.navigate("More Parrots")}
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
    paddingBottom: 30,
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
    borderColor: "#994444",
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
