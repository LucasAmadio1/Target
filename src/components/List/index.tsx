import {
  FlatList,
  type FlatListProps,
  type StyleProp,
  Text,
  View,
  type ViewStyle,
} from "react-native";
import { styles } from "./styles";

type ListProps<T> = FlatListProps<T> & {
  title: string;
  emptyMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export function List<T>({
  containerStyle,
  title,
  emptyMessage,
  data,
  renderItem,
  ...rest
}: ListProps<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>{emptyMessage}</Text>
        )}
        {...rest}
      />
    </View>
  );
}
