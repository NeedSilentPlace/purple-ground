import React from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from '../component/ProductCard';

function Cart() {
  const data = new Array(50).fill(true).map((i, index) => {
    const item = {};
    item.id = `${index}`
    return item;
  });
  return (
    <View>
      <FlatList 
        data={data}
        renderItem={(props) => <ProductCard {...props} />}
        contentContainerStyle={{ backgroundColor: '#fff' }}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={{ backgroundColor: '#fff', padding: 8 }}
      />
    </View>
  );
}

export default Cart;
