import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#FFF" }}
    >
      <Text>index</Text>

      <Button title="Target" onPress={() => router.navigate("/target")} />

      <Button
        title="Transaction"
        onPress={() => router.navigate("/transaction/231")}
      />
    </View>
  );
}
