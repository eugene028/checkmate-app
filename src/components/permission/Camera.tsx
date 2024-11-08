import {StyleSheet} from "react-native";
import {Camera} from "react-native-vision-camera";
import {useCameraDevice, useCameraPermission} from "react-native-vision-camera";

const PermissionCamera = () => {
  const device = useCameraDevice("back");
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) return <>허락페이지</>;
  if (device == null) return <>카메라감지안됨</>;
  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default PermissionCamera;