import { View, StatusBar } from "react-native";
const logoImage = require("../awesomproject/assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden />
    </View>
  );
}
