import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { fontFamily } from "@/theme/font-family";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontFamily: fontFamily.bold }}>index</Text>

      <Button title="Target" onPress={() => router.navigate("/target")} />

      <Button
        title="Transaction"
        onPress={() => router.navigate("/transaction/231")}
      />

      <Button
        title="In-progress"
        onPress={() => router.navigate("/in-progress/121")}
      />
    </View>
  );
}
