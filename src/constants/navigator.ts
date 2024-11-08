import {StyleSheet} from "react-native";
import Home from "screens/Home";
import ModalBackgroundScreen from "components/ModalBackgroundScreen";

const styles = StyleSheet.create({
  tabBarIconStyle: {
    position: "absolute",
    top: -30,
    height: 70,
    width: 70,
    backgroundColor: "white",
    borderRadius: 50,
  },
});

export const tabScreens = [
  {name: "홈", component: Home, icon: "home", label: "홈"},
  {
    name: "당뇨 예측하기",
    component: Home,
    icon: "auto-graph",
    label: "당뇨 예측하기",
  },
  {
    name: " ",
    component: ModalBackgroundScreen,
    icon: "add-circle",
    label: "",
    customOptions: {
      tabBarIconStyle: styles.tabBarIconStyle,
    },
    isModal: true,
  },
  {
    name: "식품 정보 보기",
    component: Home,
    icon: "fastfood",
    label: "식품 정보 보기",
  },
  {
    name: "내 정보 수정",
    component: Home,
    icon: "person",
    label: "내 정보 수정",
  },
];
