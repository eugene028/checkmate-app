import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {TabNavigator} from "components/navigator/TabNavigation";
import CameraScreen from "screens/Camera";

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
        <Stack.Screen name="식품 사진 촬영" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
