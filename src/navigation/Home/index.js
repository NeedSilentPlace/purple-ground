import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../ui/screen/Home';
import Header from '../../ui/component/Header';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="Home" component={Home} options={{ header: (props) => <Header {...props} />}} />
    </Stack.Navigator>
  );
}
