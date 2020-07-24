import React from 'react';
import { View } from 'react-native';
import { Text } from '../unit';
import { purple, grey } from '../color';
import { Icon } from '../unit';

function Header({ navigation, insets, back }) {
  
  return (
    <View style={{ backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: grey[300]}}>
      <View style={{ height: insets.top }} />
      <View style={{ height: 40, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 8 }}>
        {
          back && (
            <View style={{ width: 50 }}>
              <Icon name="chevron-back" color={purple[400]} onPress={() => navigation.goBack()} />
            </View>
          )
        }
        <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center' }}>
          <Text size={16} color={purple[500]}>Goodbye!</Text>
        </View>
        {
          back && <View  style={{ width: 50 }} />
        }
      </View>
    </View>
  );
}

export default Header;
