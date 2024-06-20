import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/core';

export default function Categories({ categoryList }) {
  const navigation=useNavigation();
  return (
    <View style={tw`mt-3`}>
      <Text style={tw`font-bold text-[20px]`}>Categorias</Text>
      <FlatList
        data={categoryList}
        numColumns={4}
        renderItem={({ item,index }) => (
          <TouchableOpacity onPress={()=> navigation.navigate('item-list',{category:item.name})} style={tw`flex-1 items-center justify-center p-2 border-[1px] border-blue-200 m-1 h-[80px] rounded-lg bg-blue-50`}>
            <Image 
              source={{ uri: item.icon }} 
              style={{ width: 35, height: 35 }} 
              resizeMode="contain"
            />
            <Text style={tw`text-[12px] mt-1`}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
