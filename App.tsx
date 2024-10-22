import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/styles/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'components/Home';
import Modal from 'components/Modal';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Group screenOptions={{}}>
            <Tab.Screen name="checkModal" component={Modal} />
          </Tab.Group>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
