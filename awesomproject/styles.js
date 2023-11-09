import { View, Text, StyleSheet } from "react-native";
import Greet from "./components/Greet";
export default function App() {
  console.log("Testing APP");
  return (
    <View style={styles.container}>
      {/* <Greet name="Venktesh" /> */}
      <Text style={styles.title}>Styled API</Text>
      <View style={[styles.lightblueBg, styles.box]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={styles.lightgreenBg}>
        <Text>Lightgreen box</Text>
        {console.log("Ligth Green")}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  title: {},
  darkMode: "black",
  box: {
    width: 250,
    height: 250,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});
