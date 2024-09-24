import React from 'react';
import {ThemeProvider} from '@emotion/react';
import {theme} from './src/styles/theme';
import {NavigationContainer} from '@react-navigation/native';
import Home from 'components/Home';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
