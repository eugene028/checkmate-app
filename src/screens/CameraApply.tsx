import WebView from "react-native-webview";

const CameraApply = () => {
  return (
    <WebView
      source={{uri: "https://checkmate-client-beryl.vercel.app/camera-result"}}
    />
  );
};

export default CameraApply;
