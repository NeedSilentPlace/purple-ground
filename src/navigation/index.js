import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './Home';
import Code from './Code';
import Store from './Store';
import Settings from './Settings';

import { Icon, Lottie } from '../ui/unit';
import { grey, purple } from '../ui/color';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const screenOptions = ({ route, ...another }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === "Home") {
      iconName = 'home-outline';
    } else if (route.name === "Code") {
      iconName = 'code-slash-outline';
    } else if (route.name === "Settings") {
      iconName = 'settings-outline';
    } else if (route.name === "Store") {
      iconName = 'cart-outline';
      return <Lottie color={color} play={another.navigation.isFocused()} />
    }
    
    return <Icon name={iconName} color={color} size={20} />
  },
});

// bottom tabs options
const tabBarOptions = {
  activeTintColor: purple[500],
  inactiveTintColor: grey[500],
  labelStyle: {
    borderWidth: 1
  }
  // showLabel: false
};

// material bottom options
const materialTabBarOptions = {
  barStyle: {
    backgroundColor: '#fff'
  },
  activeColor: purple[500],
  inactiveColor: grey[500],
}


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Tab.Navigator screenOptions={screenOptions} shifting tabBarOptions={tabBarOptions} {...materialTabBarOptions}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Code" component={Code} />
          <Tab.Screen name="Store" component={Store} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
