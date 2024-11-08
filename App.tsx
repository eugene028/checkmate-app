import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {TabNavigator} from "components/navigator/TabNavigation";
import PermissionCamera from "components/permission/Camera";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PermissionCamera" component={PermissionCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
