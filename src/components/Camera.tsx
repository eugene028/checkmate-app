import {StyleSheet} from "react-native";
import {theme} from "styles/theme";
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

const styles = StyleSheet.create({
  modalButton: {
    backgroundColor: theme.palette.main_300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
