import { type ColorValue, View } from "react-native";
import { styles } from "./styles";

interface SeparatorProps {
  color: ColorValue;
}

export function Separator({ color }: SeparatorProps) {
  return <View style={[styles.container, { backgroundColor: color }]} />;
}
