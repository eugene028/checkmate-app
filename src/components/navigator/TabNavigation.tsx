import Icon from "react-native-vector-icons/MaterialIcons";
import {theme} from "styles/theme";
import React, {useState} from "react";
import {Pressable, StyleSheet, View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {tabScreens} from "constants/navigator";
import DialogModal from "components/DialogModal";
import {useStackNavigation} from "hooks/useStackNavigation";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useStackNavigation();
  return (
    <>
      <Tab.Navigator>
        {tabScreens.map(
          ({name, component, icon, label, customOptions, isModal}) => (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              listeners={
                isModal
                  ? {
                      tabPress: e => {
                        e.preventDefault();
                        setModalVisible(true);
                      },
                    }
                  : undefined
              }
              options={{
                tabBarIcon: props => (
                  <TabIcon
                    name={icon}
                    size={name === " " ? 70 : 25}
                    focused={props.focused}
                  />
                ),
                tabBarLabel: props => <TabLabel {...props} label={label} />,
                ...customOptions,
              }}
            />
          )
        )}
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
            onPress={() => {
              setModalVisible(false);
              navigation.navigate("식품 직접 등록");
            }}>
            <Text style={styles.buttonText}>직접 등록</Text>
          </Pressable>
          <Pressable
            style={styles.primeModalButton}
            onPress={() => {
              setModalVisible(false);
              navigation.navigate("식품 사진 촬영");
            }}>
            <Text style={styles.buttonText}>카메라로 등록</Text>
          </Pressable>
        </View>
      </DialogModal>
    </>
  );
};

export const TabIcon = ({
  name,
  focused,
  size,
}: {
  name: string;
  focused: boolean;
  size: number;
}) => {
  const color =
    name === "add-circle"
      ? theme.palette.main_300
      : focused
      ? theme.palette.main_300
      : theme.palette.gray_100;
  return <Icon name={name} size={size} color={color} />;
};

export const TabLabel = ({
  focused,
  label,
}: {
  focused: boolean;
  label: string;
}) => (
  <Text
    style={{
      marginTop: -5,
      fontSize: 11,
      color: focused ? theme.palette.main_300 : theme.palette.gray_100,
    }}>
    {label}
  </Text>
);

const styles = StyleSheet.create({
  tabBarIconStyle: {
    position: "absolute",
    top: -30,
    height: 70,
    width: 70,
    backgroundColor: "white",
    borderRadius: 50,
  },
  modalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  plainText: {
    fontSize: 15,
  },
  textContainer: {
    paddingBottom: 15,
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
