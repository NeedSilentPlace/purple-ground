import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './Home';
import Code from './Code';
import Settings from './Settings';

import { Icon } from '../ui/unit';
import { grey, purple } from '../ui/color';

const Tab = createBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === "Home") {
      iconName = 'home-outline';
    } else if (route.name === "Code") {
      iconName = 'code-slash-outline';
    } else if (route.name === "Settings") {
      iconName = 'settings-outline';
    } else if (route.name === "Cart") {
      iconName = 'cart-outline';
    }
    return <Icon name={iconName} color={color} />
  },
});

const tabBarOptions = {
  activeTintColor: purple[500],
  inactiveTintColor: grey[500],
  // showLabel: false
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Code" component={Code} />
          <Tab.Screen name="Cart" component={Code} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
