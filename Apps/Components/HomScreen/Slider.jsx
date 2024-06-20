import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function Slider({sliderList}) {
  return (
    <View style={tw`mt-5`}>
      <FlatList
        data={sliderList}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
        renderItem={({item,index}) =>(
          <View>
            <Image source={{uri:item?.image}}
              style={tw`h-[200px] w-[330px] mr-3 rounded-lg object-contain`}
            />
          
          </View>
        )}
      />
    </View>
  )
}