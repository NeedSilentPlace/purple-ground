import React from 'react'
import { View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'; // edges, insets
import Feed from '../component/Feed';

function Home() {
  const data = new Array(50).fill(true).map((i, index) => {
    const item = {};
    item.id = `${index + 100}`
    return item;
  });
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <FlatList 
        data={data}
        renderItem={(props) => <Feed {...props} />}
        contentContainerStyle={{ backgroundColor: '#fff' }}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Home
