import React, { useState } from 'react';
import { View, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, Icon } from '../unit';
import { purple, grey } from '../color';

function ProductCard({ index }) {
  const { navigate } = useNavigation();
  const [isLike, setIsLike] = useState(false);
  const imageWidth = (Dimensions.get('window').width - 48) / 2;
  const imageHeight = imageWidth * 4 / 3;

  let purpleImage = "";
  if (index % 5 === 0) {
    purpleImage = "https://images.unsplash.com/photo-1573071683560-fe9fb6b74ba5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80";
  } else if (index % 5 === 1) {
    purpleImage = "https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
  } else if (index % 5 === 3) {
    purpleImage = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1615&q=80";
  } else if (index % 5 === 4) {
    purpleImage = "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2023&q=80";
  } else {
    purpleImage = "https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80";
  }

  return (
    <Pressable onPress={() => navigate("Product", { purpleImage })} style={{ flex: 1, padding: 8 }}>
        <View style={{ flex: 1, position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
          <Image height={imageHeight} uri={purpleImage} />
          <Pressable style={{position: 'absolute', bottom: 4, right: 4 }} onPress={() => setIsLike(!isLike)}>
            <Icon 
              name={isLike ? "heart" : "heart-outline"}
              color={isLike ? "#e8505b" : undefined}
            />
          </Pressable>
        </View>

        <View style={{ marginTop: 8 }}>
          <Text size={12} weight="500" color={grey[900]}>Brand</Text>
          <Text size={12} color={grey[500]} marginTop={4}>product name</Text>
          <Text marginTop={8}>
            <Text size={13} color={purple[400]} weight="500">20%  </Text>
            <Text size={14} weight="500">15,300  </Text>
            <Icon name="basket" size={12} color={purple[400]} />
          </Text>
        </View>
    </Pressable>
  );
}

export default ProductCard;
