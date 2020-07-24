import React from 'react';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { grey } from '../color'

// iconStyle prop doesn't work, so iconStyle => style

function _Icon({ name, size = 25, color = grey[500], marginLeft = 0, style = {}, onPress }) {
  const _style = {
    marginLeft,
    ...style
  };
  const _Icon = <Icon name={name} size={size} color={color} style={_style} />

  if (onPress && typeof onPress === 'function') {
    return (
      <Pressable onPress={onPress}>
        {_Icon}
      </Pressable>
    )
  } else {
    return _Icon;
  }
}

export default _Icon;
