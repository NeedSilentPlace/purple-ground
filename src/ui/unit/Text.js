import React from 'react';
import { Text } from 'react-native';

function _Text({ children, marginLeft = 0, size = 14, color = '#1d1e1f', style = {} }) {
  const _style = {
    fontSize: size,
    color,
    marginLeft,
    ...style
  };

  return (
    <Text style={_style}>
      {children}
    </Text>
  );
}

export default _Text;
