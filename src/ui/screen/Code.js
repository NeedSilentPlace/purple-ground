import React from 'react'
import { View, ActivityIndicator, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Image, Text, Spinner, Icon } from '../unit';

function Home() {
  const purpleTri = "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2023&q=80";
  const gradient = "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1615&q=80";
  const m = "https://images.unsplash.com/photo-1495896138760-293144e6b1d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80";
  
  // If you are using tab bar or nav bar from react navigation, 
  // it already applied padding, if you use custom tab bar or navbar you have to handle it yourself. 
  // in your case, you use default tab bar by react navigation, 
  // so it already applied bottom padding. 
  // so in your screen SafeAreaView you should disable bottom padding <SafeAreaView edges={['right', 'left', 'top']} /> 
  // otherwise it would have double bottom padding
  // https://github.com/th3rdwave/react-native-safe-area-context/issues/107

  return (
    <SafeAreaView edges={['left', 'right']}>
      <ScrollView contentContainerStyle={{ paddingVertical: 16 }}>
        <Spinner />
        <View style={{ paddingHorizontal: 16, marginTop: 8 }}>
          <Input placeholder="name" />      
        </View>
        <View style={{ paddingHorizontal: 16, marginTop: 8 }}>
          <Input placeholder="address" />      
        </View>
        <View style={{ paddingHorizontal: 16, marginTop: 8 }}>
          {
            ['contain', 'cover', 'stretch', 'center'].map((mode, index) => (
              <React.Fragment key={index}>
                <Text style={{ marginTop: 16 }}>{mode}</Text>
                <View style={{ width: '100%', height: 200, marginTop: 8 }}>
                  <Image 
                    uri={purpleTri}
                    resizeMode={mode}
                  />
                </View>
              </React.Fragment>
            ))
          }
          {
            ['contain', 'cover', 'stretch', 'center'].map((mode, index) => (
              <React.Fragment key={index}>
                <Text style={{ marginTop: 16 }}>{mode}</Text>
                <View style={{ width: '100%', height: 200, marginTop: 8 }}>
                  <Image 
                    uri={m}
                    resizeMode={mode}
                  />
                </View>
              </React.Fragment>
            ))
          }
          <Text>purple</Text>
          <View style={{ width: '100%', height: 200 }}>
            <Image 
              uri={gradient}
              resizeMode="cover" 
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home
