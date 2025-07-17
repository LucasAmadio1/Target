import { View } from "react-native";
import { PageHeader } from "@/components/PageHeader";

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Apple Watch"
        subtitle="A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."
        rightButton={{ icon: "edit", onPress: () => {} }}
      />
    </View>
  );
}
