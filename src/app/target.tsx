import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Target() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Target</Text>

      <Button title="Home page" onPress={() => router.navigate("/")} />
    </View>
  );
}
