import {View, ActivityIndicator, StyleSheet} from "react-native";
import {theme} from "styles/theme";

const LoadingSpinner = ({
  size = "large",
  color = theme.palette.main_400,
}: {
  size?: "large" | "small";
  color?: string;
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingSpinner;
