import React from 'react';
import { Text } from 'react-native';

function _Text({ children, marginTop = 0, marginLeft = 0, size = 14, color = '#1d1e1f', weight, style = {}, onPress }) {
  const _style = {
    fontSize: size,
    fontWeight: weight,
    color,
    marginTop,
    marginLeft,
    ...style
  };

  return (
    <Text style={_style} onPress={onPress}>
      {children}
    </Text>
  );
}

export default _Text;
