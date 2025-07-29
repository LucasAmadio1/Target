import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";
import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { TransactionType } from "@/components/TransactionType";
import { useTransactionsDatabase } from "@/database/useTransactionsDatabase";
import { TransactionTypes } from "@/utils/transaction-types";

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>();

  const transactionsDatabase = useTransactionsDatabase();

  const [type, setType] = useState(TransactionTypes.Input);
  const [isCreating, setIsCreating] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  const [observation, setObservation] = useState("");

  async function handleCreate() {
    try {
      if (!amount || amount <= 0) {
        return Alert.alert(
          "Atenção",
          "Preencha o valor, A transação deve ser maior que zero.",
        );
      }

      setIsCreating(true);

      await transactionsDatabase.create({
        target_id: Number(params.id),
        amount: type === TransactionTypes.Output ? amount * -1 : amount,
        observation,
      });

      Alert.alert("Sucesso!", "Transação criada com sucesso!", [
        { text: "Ok", onPress: () => router.back() },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Nova transação"
        subtitle="A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <TransactionType selected={type} onChange={setType} />

        <CurrencyInput
          label="Valor"
          placeholder="R$ 0,00"
          value={amount}
          onChangeValue={setAmount}
        />

        <Input
          label="Motivo (opcional)"
          placeholder="Ex: Investir em CDB de 110% no banco XPTO"
          onChangeText={setObservation}
        />

        <Button
          title="Salvar"
          onPress={handleCreate}
          isProcessing={isCreating}
        />
      </View>
    </View>
  );
}
