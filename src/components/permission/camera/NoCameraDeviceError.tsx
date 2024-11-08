import {Alert} from "react-native";
import {useStackNavigation} from "hooks/useStackNavigation";
const NoCameraDeviceError = () => {
  const navigation = useStackNavigation();
  Alert.alert("카메라가 존재하지 않아요. 음식을 직접 등록해 주세요.");
  navigation.navigate("Home");
  return <></>;
};

export default NoCameraDeviceError;
