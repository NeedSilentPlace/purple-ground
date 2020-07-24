import React from 'react';
import { Dimensions, View } from 'react-native';
import { Text, Image, Icon } from '../unit';

function Feed({ index }) {
  
  let purpleImage = "";
  if (index % 3 === 0) {
    purpleImage = "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2023&q=80";
  } else if (index % 3 === 1) {
    purpleImage = "https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
  } else {
    purpleImage = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1615&q=80";
  }

  const avatarUri = "https://images.unsplash.com/photo-1583339522870-0d9f28cef33f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";
  const deviceWidth = Dimensions.get('window').width;

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 4, paddingHorizontal: 8 }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Image uri={avatarUri} width={40} height={40} avatar />
          <Text marginLeft={8}>purple user</Text>
        </View>
        <Icon name="ellipsis-horizontal" />  
      </View>

      <View>
        <Image uri={purpleImage} height={deviceWidth} />        
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="heart-outline" />
          <Icon name="chatbubble-outline" marginLeft={8} />
          <Icon name="paper-plane-outline" marginLeft={8} />
        </View>
        <Icon name="bookmark-outline" />
      </View>
    </View>
  );
};

export default Feed;
