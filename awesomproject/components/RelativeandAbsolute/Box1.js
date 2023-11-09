import { StyleSheet, View } from "react-native";

// import Box1 from "./components/RelativeandAbsolute/Box1";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Box style={{ backgroundColor: "#8e9b80", flexShrink: 1 }}>
        Box 1 Shrink
      </Box>
      <Box style={{ backgroundColor: "#b65d1f", flexShrink: 2 }}>
        Box 2 Shrink
      </Box> */}

      {/* < style={{ backgroundColor: "#8e9b80", flexGrow: 0 }}>Box 3</Box1>
      <Box1 style={{ backgroundColor: "#b65d1f", flexGrow: 1 }}>Box 4</Box1> */}
      {/* <Box style={{ backgroundColor: "#1c4c56", flexBasis: 140, flex: 1 }}>
        Box 3
      </Box>
      <Box style={{ backgroundColor: "#ab9156", height: 140, flex: 1 }}>
        Box 4
      </Box> */}
      {/* <Box1 style={{ backgroundColor: "#6b0803", top: 75, left: 75 }}>
        Box 5
      </Box1>
      <Box1 style={{ backgroundColor: "#1c4c56" }}>Box 6</Box1>
      <Box1
        style={{
          backgroundColor: "#b95f21",
          position: "absolute",
          top: 75,
          left: 75,
        }}
      >
        Box 7
      </Box1> */}
    </View>
    //<View style={{ backgroundColor: "plum", flex: 1 }}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 300,
    // flexWrap: "wrap",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "flex-start",
    // alignSelf: "stretch",
    // alignContent: "stretch",
    // gap: 20,
    // rowGap: 20,
    // columnGap: 30,
    width: 300,
    marginTop: 60,
    borderWidth: 6,
    borderColor: "red",
  },
});
