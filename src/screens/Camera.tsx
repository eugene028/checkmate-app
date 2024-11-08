import {StyleSheet} from "react-native";
import {Camera} from "react-native-vision-camera";
import {Alert} from "react-native";
import {useCameraDevice, useCameraPermission} from "react-native-vision-camera";
import NoCameraDeviceError from "components/permission/camera/NoCameraDeviceError";

const CameraScreen = () => {
  const device = useCameraDevice("back");
  const {hasPermission, requestPermission} = useCameraPermission();

  // 만약 카메라 권한이 없다면
  if (!hasPermission) requestPermission();
  if (device == null) return <NoCameraDeviceError />;

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default CameraScreen;
