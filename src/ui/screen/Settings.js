import React, { useState, useRef } from 'react';
import { View, ScrollView, Animated, Pressable, Dimensions } from 'react-native';
import { StatusBar, Text, Image, Icon } from '../unit';
import { grey, purple } from '../color';

function Setting() {
  const deviceWidth = Dimensions.get('window').width;
  const purpleImage = "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2023&q=80";
  const purpleAvatar = "https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";

  const onPressAvatar = () => {
    
  }

  const renderMiddleItems = () => {
    const items = [{ name: "bookmark-outline", label: "북마크" }, { name: "gift-outline", label: "이벤트" }, { name: "notifications-outline", label: "공지사항" }];
    
    return items.map((item) => (
      <Pressable key={item.label} style={{ alignItems: 'center' }}>
        <Icon name={item.name} />
        <Text size={14} color={grey[700]} marginTop={8}>{item.label}</Text>
      </Pressable>
    ));
  }

  const renderBottomItems = () => {
    const items = ["APP 설정", "고객센터", "약관 확인"];
    
    return items.map((item) => (
      <Pressable key={item} style={{ borderTopWidth: 1, borderColor: grey[200], flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 16 }}>
        <Text size={16} color={grey[800]}>{item}</Text>
        <Icon name="chevron-forward-outline" size={18} color={grey[800]} />
      </Pressable>
    ));
  }


  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="light-content" />
      <View style={{ position: 'relative', overflow: 'hidden' }}>
        <Image uri={purpleImage} height={300} />
        <View style={{ height: 75 }} />
        <Pressable onPress={onPressAvatar} style={{ position: 'absolute', bottom: 0, right: (deviceWidth / 2 - 75), borderRadius: 75, borderWidth: 3, borderColor: '#fff' }}>
          <Image uri={purpleAvatar} width={150} height={150} style={{ borderRadius: 75, zIndex: 1 }} />
        </Pressable>
      </View>

      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text size={16} weight="600" color={grey[800]}>Man in Purple</Text>
          <Icon name="chevron-forward-outline" size={18} color={grey[800]} />
        </View>
        <View style={{ alignItems: 'center', marginTop: 8 }}>
          <Text size={14} color={grey[500]}>free_man@gmail.com</Text>
        </View>
        <View style={{ marginTop: 40, justifyContent: 'space-around', flexDirection: 'row', paddingHorizontal: 16 }}>
          { renderMiddleItems() }
        </View>
        <View style={{ marginTop: 32, paddingHorizontal: 16 }}>
          { renderBottomItems() }
        </View>
      </View>
    </ScrollView>
  );
}

export default Setting;
