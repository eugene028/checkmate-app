import WebView from "react-native-webview";

const Home = () => {
  return (
    <WebView source={{uri: "https://checkmate-client-beryl.vercel.app"}} />
  );
};

export default Home;
