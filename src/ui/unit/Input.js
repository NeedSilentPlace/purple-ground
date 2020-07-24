import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Animated } from 'react-native';

function Input({ placeholder, onChange }) {
  const [value, setValue] = useState('');
  const { current: animatedValue } = useRef(new Animated.Value(0)); // object destructuring with different name

  const animatedTranslateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [9, -11]
  });
  const animatedFontSize = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [14, 10]
  });
  const animatedFontColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#65686b', '#1d1e1f']
  });

  const onFocus = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false // native driver does not support font size..? only transform and opacity support
    }).start()
  }
  
  const onBlur = () => {
    if(!value) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start()
    }
  }

  return (
    <View style={{ position: 'relative', justifyContent: 'flex-end', height: 50 }}>
      {
        placeholder && (
          <Animated.View style={{ position: 'absolute', top: 13, transform: [{ translateY: animatedTranslateY }] }}>
            <Animated.Text style={{ color: animatedFontColor, fontSize: animatedFontSize }}>
              {placeholder}
            </Animated.Text>
          </Animated.View>
        )
      }
      <TextInput 
        style={{ height: 40, borderBottomWidth: 1, borderColor: '#1d1e1f' }}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={(value) => setValue(value)}
        value={value}
      />
    </View>
  );
}

export default Input;
