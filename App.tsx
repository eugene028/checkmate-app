import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {TabNavigator} from "components/navigator/TabNavigation";
import CameraScreen from "screens/Camera";
import FoodApply from "screens/FoodApply";
import CameraApply from "screens/CameraApply";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="식품 직접 등록" component={FoodApply} />
        <Stack.Screen name="식품 사진 촬영" component={CameraScreen} />
        <Stack.Screen name="식품 촬영 결과" component={CameraApply} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
