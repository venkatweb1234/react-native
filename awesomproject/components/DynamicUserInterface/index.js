import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window"),
  });
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setDimensions({ window });
    });
    return () => subscription?.remove();
  });

  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  console.log("HeightWidth", windowHeight, windowWidth);
  return (
    <View style={styles.container}>
      <View
        style={
          (styles.box,
          {
            width: windowWidth > 500 ? "70%" : "90%",
            height: windowHeight > 600 ? "60%" : "90%",
          })
        }
      >
        <Text
          style={{ fontSize: windowWidth > 500 ? 50 : 24, textAlign: "center" }}
        >
          Welcome!
        </Text>
      </View>
    </View>
  );
}

//It provides device size
// const windowWidth = Dimensions.get("window").width;

// const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  // text: {
  //   fontSize: 24,
  //   textAlign: "center",
  // },
});
