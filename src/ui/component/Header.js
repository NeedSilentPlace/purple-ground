import React from 'react';
import { View } from 'react-native';
import { Text } from '../unit';
import { purple, grey } from '../color';

function Header(props) {
  return (
    <View style={{ backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: grey[300]}}>
      <View style={{ height: props.insets.top }} />
      <View style={{ height: 40, alignItems: 'center', justifyContent: 'center' }}>
        <Text size={16} color={purple[500]}>Goodbye!</Text>
      </View>
    </View>
  );
}

export default Header;
