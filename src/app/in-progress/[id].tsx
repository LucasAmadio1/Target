import { router, useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import { Button } from "@/components/Button";
import { List } from "@/components/List";
import { PageHeader } from "@/components/PageHeader";
import { Progress } from "@/components/Progress";
import { Separator } from "@/components/Separator";
import { Transaction, type TransactionProps } from "@/components/Transaction";
import { colors } from "@/theme";
import { TransactionTypes } from "@/utils/transaction-types";

const details = {
  current: "R$ 580,00",
  target: "R$ 1.790,00",
  percentage: 25,
};

const transactions: TransactionProps[] = [
  {
    id: "2",
    value: "R$ 20,00",
    date: "12/04/25",
    type: TransactionTypes.Output,
  },
  {
    id: "1",
    value: "R$ 300,00",
    date: "12/04/25",
    description: "CDB de 110% no banco XPTO",
    type: TransactionTypes.Input,
  },
];

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{ icon: "edit", onPress: () => {} }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        ItemSeparatorComponent={() => <Separator color={colors.gray[200]} />}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => {}} />
        )}
        emptyMessage="Nenhuma transação cadastrada."
      />

      <Button
        title="Nova transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  );
}
