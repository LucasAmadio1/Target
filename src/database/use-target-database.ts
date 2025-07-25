import { useSQLiteContext } from "expo-sqlite";

export interface TargetCreateProps {
  name: string;
  amount: number;
}

export interface TargetListProps {
  id: number;
  name: string;
  amount: number;
  current: number;
  percentage: number;
  created_at: Date;
  updated_at: Date;
}

export function useTargetDatabase() {
  const database = useSQLiteContext();

  async function create(data: TargetCreateProps) {
    const statement = await database.prepareAsync(
      "INSERT INTO targets (name, amount) VALUES ($name, $amount)",
    );

    statement.executeAsync({
      $name: data.name,
      $amount: data.amount,
    });
  }

  function listBySavedValue() {
    return database.getAllAsync<TargetListProps>(`
      SELECT 
          targets.id, 
          targets.name, 
          targets.amount,
          targets.created_at,
          targets.updated_at,
          COALESCE(SUM(transactions.amount), 0) AS current,
          COALESCE((SUM(transactions.amount) / targets.amount) * 100, 0) AS percentage
        FROM targets
        LEFT JOIN transactions ON targets.id = transactions.target_id
        GROUP BY targets.id, targets.name, targets.amount
        ORDER BY current DESC
    `);
  }

  return {
    create,
    listBySavedValue,
  };
}
