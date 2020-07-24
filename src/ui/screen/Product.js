import React, { useRef, useState } from 'react';
import { View, ScrollView, Animated, Dimensions } from 'react-native';
import { Text, Image } from '../unit';
import { grey, purple } from '../color';

function Product({ route }) {
  const { purpleImage } = route.params;
  const navItemStyle = { flex: 1, textAlign: 'center', paddingVertical: 12 };
  const deviceWidth = Dimensions.get('window').width;
  const barWidth = deviceWidth / 4;

  const [activeIndex, setActiveIndex] = useState(0);
  const { current: animatedValue } = useRef(new Animated.Value(0));

  const animatedTranslateX = animatedValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [0, barWidth, barWidth * 2, barWidth * 3]
  });

  const onPressNavItem = (index) => {
    Animated.timing(animatedValue, {
      toValue: index,
      duration: 200,
      useNativeDriver: true
    }).start()
    setActiveIndex(index);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'relative' }}>
        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: grey[300], backgroundColor: '#fff' }}>
          {
            ['상품설명', '상세정보', '후기', '상품문의'].map((item, index) => {
              return (
                <Text 
                  key={index} 
                  size={12} 
                  color={index === activeIndex ? purple[700] : grey[600]}
                  weight={index === activeIndex ? '600' : '400'} 
                  style={navItemStyle} 
                  onPress={() => onPressNavItem(index)}
                >
                  {item}
                </Text>);
            })
          }
        </View>
        <Animated.View 
          style={{
            position: 'absolute',
            bottom: 0,
            borderColor: purple[600], 
            borderWidth: 1.5, 
            width: barWidth,
            transform: [{ translateX: animatedTranslateX }]
          }} 
        />
      </View>
      <ScrollView style={{ flex: 1 }} horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScrollBeginDrag={(ev) => console.log('ev',ev)}>
        <View style={{ flex: 1, width: deviceWidth }}>
          <Image uri={purpleImage} height={500} />
        </View>

        <View style={{ flex: 1, width: deviceWidth }}>
          <Image uri={purpleImage} height={500} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Product;
