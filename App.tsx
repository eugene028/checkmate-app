import React from "react";
import {Modal, StyleSheet, View, Pressable} from "react-native";
import {ThemeProvider} from "@emotion/react";
import {theme} from "./src/styles/theme";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "components/Home";
import {useState} from "react";
import {Button, Text} from "react-native";
import ModalBackgroundScreen from "components/ModalBackgroundScreen";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ThemeProvider theme={theme}>
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
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <Pressable
                style={styles.modalContent}
                onPress={e => e.stopPropagation()}>
                <Text style={styles.modalTitle}>음식 등록하기</Text>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>카메라로 등록</Text>
                </Pressable>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
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
