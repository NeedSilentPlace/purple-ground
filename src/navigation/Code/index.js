import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Code from '../../ui/screen/Code';
import Header from '../../ui/component/Header';

const Stack = createStackNavigator();

export default function CodeStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="Home" component={Code} options={{ header: (props) => <Header {...props} />}} />
    </Stack.Navigator>
  );
}
