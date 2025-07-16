import { View } from "react-native";
import { HomeHeader } from "@/components/Home-Header";
import { List } from "@/components/List";
import { Separator } from "@/components/Separator";
import { Target } from "@/components/Target";
import { colors } from "@/theme";

const summary = {
  total: "R$ 2.680,00",
  input: { label: "Entradas", value: "R$ 6,184.90" },
  output: { label: "Saídas", value: "-R$ 883.65" },
};

const targets = [
  {
    id: "1",
    name: "Apple Watch",
    percentage: "50%",
    current: "R$ 580,00",
    target: "R$ 1.790,00",
  },
  {
    id: "2",
    name: "Comprar uma cadeira ergonômica",
    percentage: "75%",
    current: "R$ 900,00",
    target: "R$ 1.200,00",
  },
  {
    id: "3",
    name: "Fazer uma viagem para o Rio de Janeiro",
    percentage: "75%",
    current: "R$ 1.200,00",
    target: "R$ 3.000,00",
  },
];

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Separator color={colors.gray[200]} />}
        renderItem={({ item }) => <Target data={item} />}
        emptyMessage="Nenhuma meta cadastrada."
        containerStyle={{ paddingHorizontal: 24 }}
      />
    </View>
  );
}
