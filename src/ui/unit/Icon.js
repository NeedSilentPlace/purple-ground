import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { grey } from '../color'

// iconStyle prop doesn't work, so iconStyle => style

function _Icon({ name, size = 25, color = grey[500], marginLeft = 0, style = {}, onPress }) {
  const _style = {
    marginLeft,
    ...style
  };

  return (
    <Icon name={name} size={size} color={color} style={_style} />
  );
}

export default _Icon;
