import {StyleSheet} from "react-native";
import {Camera} from "react-native-vision-camera";
import {Text} from "react-native";
import {useCameraDevice, useCameraPermission} from "react-native-vision-camera";

const PermissionCamera = () => {
  const device = useCameraDevice("back");
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) return <Text>허락페이지</Text>;
  if (device == null) return <Text>카메라감지안됨</Text>;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default PermissionCamera;
