import React from "react";
import {Pressable, StyleSheet, View} from "react-native";
import {theme} from "./src/styles/theme";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "components/Home";
import DialogModal from "components/DialogModal";
import {useState} from "react";
import {Text} from "react-native";
import ModalBackgroundScreen from "components/ModalBackgroundScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="홈"
          component={Home}
          options={{
            tabBarIcon: props => (
              <Icon
                name="home"
                size={25}
                color={
                  props.focused
                    ? theme.palette.main_300
                    : theme.palette.gray_100
                }
              />
            ),
            tabBarLabel: props => {
              return (
                <Text
                  style={{
                    marginTop: -5,
                    fontSize: 11,
                    color: props.focused
                      ? theme.palette.main_300
                      : theme.palette.gray_100,
                  }}>
                  홈
                </Text>
              );
            },
            tabBarLabelStyle: {
              color: theme.palette.main_300,
            },
          }}
        />
        <Tab.Screen
          name="당뇨 예측하기"
          component={Home}
          options={{
            tabBarLabel: props => {
              return (
                <Text
                  style={{
                    marginTop: -5,
                    fontSize: 11,
                    color: props.focused
                      ? theme.palette.main_300
                      : theme.palette.gray_100,
                  }}>
                  당뇨 예측하기
                </Text>
              );
            },
            tabBarIcon: props => (
              <Icon
                name="auto-graph"
                size={25}
                color={
                  props.focused
                    ? theme.palette.main_300
                    : theme.palette.gray_100
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name=" "
          component={() => <ModalBackgroundScreen />}
          listeners={{
            tabPress: e => {
              e.preventDefault(); // 기본 네비게이션 동작 방지
              setModalVisible(true); // 모달 열기
            },
          }}
          options={{
            tabBarStyle: {
              position: "relative",
            },
            tabBarIconStyle: {
              position: "absolute",
              top: -30,
              height: 70,
              width: 70,
              backgroundColor: "white",
              borderRadius: 50,
            },
            tabBarIcon: () => (
              <Icon
                name="add-circle"
                size={70}
                color={theme.palette.main_300}
              />
            ),
          }}
        />
        <Tab.Screen
          name="식품 정보 보기"
          component={Home}
          options={{
            tabBarLabel: props => {
              return (
                <Text
                  style={{
                    marginTop: -5,
                    fontSize: 10,
                    color: props.focused
                      ? theme.palette.main_300
                      : theme.palette.gray_100,
                  }}>
                  식품 정보 보기
                </Text>
              );
            },
            tabBarIcon: props => (
              <Icon
                name="fastfood"
                size={25}
                color={
                  props.focused
                    ? theme.palette.main_300
                    : theme.palette.gray_100
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="내 정보 수정"
          component={Home}
          options={{
            tabBarLabel: props => {
              return (
                <Text
                  style={{
                    marginTop: -5,
                    fontSize: 10,
                    color: props.focused
                      ? theme.palette.main_300
                      : theme.palette.gray_100,
                  }}>
                  내 정보 수정
                </Text>
              );
            },
            tabBarIcon: props => (
              <Icon
                name="person"
                size={25}
                color={
                  props.focused
                    ? theme.palette.main_300
                    : theme.palette.gray_100
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
      <DialogModal
        setOpen={setModalVisible}
        open={modalVisible}
        title="음식 등록하기">
        <View style={styles.textContainer}>
          <Text style={styles.plainText}>카메라를 통해 간편하게</Text>
          <Text style={styles.plainText}>섭취한 음식을 등록할 수 있어요.</Text>
        </View>
        <View style={styles.modalContainer}>
          <Pressable
            style={styles.modalButton}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>직접 등록</Text>
          </Pressable>
          <Pressable
            style={styles.primeModalButton}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>카메라로 등록</Text>
          </Pressable>
        </View>
      </DialogModal>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 10,
  },
  plainText: {
    fontSize: 15,
  },
  textContainer: {
    paddingBottom: 15,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  primeModalButton: {
    backgroundColor: theme.palette.main_300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalButton: {
    backgroundColor: theme.palette.main_200,
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
