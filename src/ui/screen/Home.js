import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Image, Text, Spinner, Icon } from '../unit';
import Feed from '../component/Feed';

function Home() {
  return (
    <SafeAreaView edges={['left', 'right']}>
      <FlatList 
        data={new Array(50).fill({ some: true }).map((item, index) => item.id = index)}
        renderItem={(props) => <Feed {...props} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ backgroundColor: '#fff' }}
      />
    </SafeAreaView>
  );
}

export default Home
