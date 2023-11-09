import { View, Text } from "react-native";
export default function Greet({ name }) {
  console.log(name);
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello, {name}</Text>
    </View>
  );
}
