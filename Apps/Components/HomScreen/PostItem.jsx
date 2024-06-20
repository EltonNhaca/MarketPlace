import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export default function PostItem({item}) {

  const navigation = useNavigation()
  return (
    <TouchableOpacity style={tw`flex-1 m-2 p-2 rounded-lg border-[1px] border-slate-200 `} onPress={()=>navigation.push('product-detail',{
       product:item
    }
     
    )}>
            <Image source={{uri:item.img}}
            style={tw`w-full h-[170px]`}
            />
            <View >
              
              <Text style={tw`text-[15px] font-bold mt-2`}>{item.title}</Text>
              <Text style={tw`text-[20px] font-bold text-blue-500`}>{item.price}MT</Text>
              <Text style={tw`text-blue-500 bg-blue-200 mt-1 p-[2px] text-center rounded-full px-2 text-[10px] w-[70px]`}>{item.category}</Text>
            </View>
          </TouchableOpacity>
  )
}