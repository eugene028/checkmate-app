import WebView from "react-native-webview";

const FoodApply = () => {
  return (
    <WebView
      source={{uri: "https://checkmate-client-beryl.vercel.app/apply-food"}}
    />
  );
};

export default FoodApply;
