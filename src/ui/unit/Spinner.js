import React from 'react';
import { ActivityIndicator } from 'react-native';
import { purple } from '../color';

function Spinner({ color = purple[300] }) {
  return (
    <ActivityIndicator color={color} />
  );
}

export default Spinner;
