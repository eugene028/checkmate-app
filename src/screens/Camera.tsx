import {Pressable, StyleSheet} from "react-native";
import {Camera} from "react-native-vision-camera";
import {Text, View, Image} from "react-native";

import {useCameraDevice, useCameraPermission} from "react-native-vision-camera";
import NoCameraDeviceError from "components/permission/camera/NoCameraDeviceError";
import {useRef, useState} from "react";
import {useStackNavigation} from "hooks/useStackNavigation";
import {theme} from "styles/theme";

const CameraScreen = () => {
  const device = useCameraDevice("back");
  const navigation = useStackNavigation();
  const {hasPermission, requestPermission} = useCameraPermission();
  const [imageSource, setImageSource] = useState("");
  const [isLoading, setLoading] = useState(false);
  const cameraRef = useRef<Camera>(null);

  if (!hasPermission) requestPermission();
  if (device == null) return <NoCameraDeviceError />;

  const capturePhoto = async () => {
    if (device) {
      const photo = await cameraRef.current?.takePhoto();
      if (photo) {
        setImageSource(photo.path);
      }
    }
  };

  return (
    <View style={styles.cameraViewStyle}>
      {imageSource.length > 0 ? (
        <View style={{position: "relative"}}>
          <Image
            style={styles.imageStyle}
            source={{uri: `file://'${imageSource}`}}
          />
          <Pressable style={styles.bottomSection}>
            <Pressable
              style={styles.secondaryButton}
              onPress={() => setImageSource("")}>
              <Text style={styles.textColor}>다시 찍기</Text>
            </Pressable>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.textColor}>결과 제출하기</Text>
            </Pressable>
          </Pressable>
        </View>
      ) : (
        <>
          <Camera
            ref={cameraRef}
            style={styles.cameraStyle}
            device={device}
            photo={true}
            video={false}
            audio={false}
            isActive={true}
          />
          <Pressable style={styles.bottomSection}>
            <Pressable
              style={styles.backButton}
              onPress={() => {
                navigation.navigate("Home");
              }}>
              <Text style={styles.textColor}>취소</Text>
            </Pressable>
            <Pressable style={styles.cameraOutline}>
              <Pressable
                style={styles.cameraButton}
                onPress={() => {
                  setLoading(true);
                  capturePhoto();
                }}
              />
            </Pressable>
            <Pressable style={styles.backButton}>
              <Text style={styles.textColor}>전환</Text>
            </Pressable>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  cameraViewStyle: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  cameraStyle: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  bottomSection: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    width: "100%",
    bottom: 0,
    height: 130,
  },
  backButton: {
    width: 66,
    height: 66,
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33,
  },
  textColor: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
  },
  cameraButton: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
    zIndex: 999,
  },
  cameraOutline: {
    width: 68,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 68,
    backgroundColor: "rgba(255,255,255,0)",
    borderWidth: 3,
    borderRadius: 34,
    borderColor: "white",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  secondaryButton: {
    backgroundColor: `${theme.palette.main_300}`,
    color: "white",
    maxWidth: 200,
    height: 50,
    borderRadius: 15,
    display: "flex",
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: `${theme.palette.main_400}`,
    color: "white",
    maxWidth: 200,
    height: 50,
    borderRadius: 15,
    display: "flex",
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
