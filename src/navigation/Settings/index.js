import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../../ui/screen/Settings';
import Header from '../../ui/component/Header';

const Stack = createStackNavigator();

export default function SettingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} options={{ header: (props) => <Header {...props} />}}/>
    </Stack.Navigator>
  );
}
