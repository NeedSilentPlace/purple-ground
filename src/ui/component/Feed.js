import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { Text, Image, Icon } from '../unit';
import { grey } from '../color'

function Feed({ index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLike, setIsLike] = useState(false);

  let purpleImage = "";
  if (index % 3 === 0) {
    purpleImage = "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2023&q=80";
  } else if (index % 3 === 1) {
    purpleImage = "https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
  } else {
    purpleImage = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1615&q=80";
  }

  const avatarUri = "https://images.unsplash.com/photo-1583339522870-0d9f28cef33f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80";
  const oceanPink = "https://images.unsplash.com/photo-1488953994029-e6a7ba3348f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
  const deviceWidth = Dimensions.get('window').width;

  const content = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
  const renderLongContent = () => {
    if (isOpen) {
      return content;
    } else {
      return (
        <Text size={12}>
          {content.slice(0, 15)}... 
          <Text size={12} color={grey[500]} onPress={() => setIsOpen(true)}> 더보기</Text>
        </Text>
      );
    }
  }
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 4, paddingHorizontal: 8 }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Image uri={avatarUri} width={40} height={40} avatar />
          <Text marginLeft={8} weight='500'>purple user</Text>
        </View>
        <Icon name="ellipsis-horizontal" />  
      </View>

      <View>
        <Image uri={purpleImage} height={deviceWidth} />        
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Icon 
            name={isLike ? "heart" : "heart-outline"}
            color={isLike ? "#e8505b" : undefined}
            onPress={() => setIsLike(!isLike)}
          />
          <Icon name="chatbubble-outline" marginLeft={8} />
          <Icon name="paper-plane-outline" marginLeft={8} />
        </View>
        <Icon name="bookmark-outline" />
      </View>

      <View style={{ paddingHorizontal: 8 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image uri={oceanPink} width={24} height={24} avatar />
          <Text marginLeft={4} size={12} weight='500'>ocean pink</Text>
          <Text size={12}>님 외 </Text>
          <Text size={12} weight='500'>3명</Text>
          <Text size={12}>이 좋아합니다</Text>
        </View>
      </View>
      <View style={{ padding: 8 }}>
        <Text>
          <Text size={12} weight="500">purple user </Text>
          <Text size={12}>
            { content.length > 15 ? renderLongContent(): content }
          </Text>
        </Text>
      </View>

    </View>
  );
};

export default Feed;
