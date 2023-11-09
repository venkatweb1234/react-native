import { Button, Pressable, View, Image, Text } from "react-native";
const logoImage = require("../awesomproject/assets/adaptive-icon.png");
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => console.log("Button Pressed")}
        color="midnightblue"
      />
      <Pressable onPress={() => console.log("Image Pressed")}>
        <Image source={logoImage} style={{ width: 200, height: 200 }} />
      </Pressable>
      <Pressable onPress={() => console.log("Text Pressed")}>
        <Text>
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasd
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasdasdasdsa
          sdasdsadasdasdsadsadsadasdasd asdsadsadsadsadasdqwewqe
          qeqwewqewqewqewqewq dasdasdsadasdasdrewrereqwewqewqewqewqewqe
          wewqrasfdsaffasdft5tdfdsfdsfdsf
          dsfdsfdsfdfdasfrewrttgfvfdgregtergfewferwtew
          erewrewffdscsdgfhgbythtyjyj
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasd
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasdasdasdsa
          sdasdsadasdasdsadsadsadasdasd asdsadsadsadsadasdqwewqe
          qeqwewqewqewqewqewq dasdasdsadasdasdrewrereqwewqewqewqewqewqe
          wewqrasfdsaffasdft5tdfdsfdsfdsf
          dsfdsfdsfdfdasfrewrttgfvfdgregtergfewferwtew
          erewrewffdscsdgfhgbythtyjyj
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasd
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasdasdasdsa
          sdasdsadasdasdsadsadsadasdasd asdsadsadsadsadasdqwewqe
          qeqwewqewqewqewqewq dasdasdsadasdasdrewrereqwewqewqewqewqewqe
          wewqrasfdsaffasdft5tdfdsfdsfdsf
          dsfdsfdsfdfdasfrewrttgfvfdgregtergfewferwtew
          erewrewffdscsdgfhgbythtyjyj
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasd
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasdasdasdsa
          sdasdsadasdasdsadsadsadasdasd asdsadsadsadsadasdqwewqe
          qeqwewqewqewqewqewq dasdasdsadasdasdrewrereqwewqewqewqewqewqe
          wewqrasfdsaffasdft5tdfdsfdsfdsf
          dsfdsfdsfdfdasfrewrttgfvfdgregtergfewferwtew
          erewrewffdscsdgfhgbythtyjyj
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasd
          asdsadsadsadsadsadaqwewqrqerqwrasdsadqewdasdasdasdasdsa
          sdasdsadasdasdsadsadsadasdasd asdsadsadsadsadasdqwewqe
          qeqwewqewqewqewqewq dasdasdsadasdasdrewrereqwewqewqewqewqewqe
          wewqrasfdsaffasdft5tdfdsfdsfdsf
          dsfdsfdsfdfdasfrewrttgfvfdgregtergfewferwtew
          erewrewffdscsdgfhgbythtyjyj
        </Text>
      </Pressable>
    </View>
  );
}
