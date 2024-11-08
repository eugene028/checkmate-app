import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export const useStackNavigation = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return navigation;
};
