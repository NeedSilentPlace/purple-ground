import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Products from '../../ui/screen/Products';
import Product from '../../ui/screen/Product';
import Header from '../../ui/component/Header';

const Stack = createStackNavigator();

export default function StoreStack() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="Products" component={Products} options={{ header: (props) => <Header {...props} />}} />
      <Stack.Screen name="Product" component={Product} options={{ header: (props) => <Header {...props} back />}} />
    </Stack.Navigator>
  );
}
