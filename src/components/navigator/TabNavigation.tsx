import Icon from "react-native-vector-icons/MaterialIcons";
import {theme} from "styles/theme";
import {Text} from "react-native";

export const TabIcon = ({
  name,
  focused,
  size,
}: {
  name: string;
  focused: boolean;
  size: number;
}) => {
  const color =
    name === "add-circle"
      ? theme.palette.main_300
      : focused
      ? theme.palette.main_300
      : theme.palette.gray_100;
  return <Icon name={name} size={size} color={color} />;
};

export const TabLabel = ({
  focused,
  label,
}: {
  focused: boolean;
  label: string;
}) => (
  <Text
    style={{
      marginTop: -5,
      fontSize: 11,
      color: focused ? theme.palette.main_300 : theme.palette.gray_100,
    }}>
    {label}
  </Text>
);
