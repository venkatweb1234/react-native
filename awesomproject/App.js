import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
} from "react-native";
import PokemonCard from "./components/PokeMon/PokemonCard";

export default function App() {
  const charmaderData = {
    name: "Venkat",
    image: require("./assets/Pokemon/Pokomen3.jpg"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "squirtle",
    image: require("./assets/Pokemon/Pokomen.jpg"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/Pokemon/Pokomen1.jpg"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/Pokemon/Pokomen4.jpg"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };

  return (
    <View style={styles.container}>
      <Text> Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <ScrollView>
        <PokemonCard {...charmaderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
