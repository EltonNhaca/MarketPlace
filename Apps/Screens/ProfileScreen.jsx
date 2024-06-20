import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth, useUser } from '@clerk/clerk-expo'
import tw from 'twrnc';
import diary from '../../assets/images/diary.png'
import globe from '../../assets/images/globe.png'
import search from '../../assets/images/search.png'
import logout from '../../assets/images/logout.png'
import { useNavigation } from '@react-navigation/core';

//assets\images\logout .png
export default function ProfileScreen() {

  const {user}=useUser();
  const navigation = useNavigation();
  const {isLoaded, signOut} = useAuth();
  const menuList=[
    {
      id:1,
      name:'Meus Productos',
      icon: diary,
      path:'my-product'
    },
    {
      id:2,
      name:'Explorar',
      icon: search,
      path:'explore'
    },
    {
      id:3,
      name:'Sair',
      icon: logout,
    },
  ]

  const onMenuPress=(item)=>{
  if(item.name=='Sair')
  {
    signOut();
    return;
  }  
   item?.path?navigation.navigate(item.path):null;
  }
  return (
    <View style={tw`p-5 bg-white flex-1`}>
     <View style={tw`items-center mt-14`}>
     <Image source={{uri:user?.imageUrl}}
        style={tw`w-[100px] h-[100px] rounded-full`}
      />
      <Text style={tw`font-bold text-[25px] mt-2`}>{user?.fullName}</Text>
      <Text style={tw`text-[18px] mt-2 text-gray-500`}>{user?.primaryEmailAddress?.emailAddress}</Text>
     </View>

     <FlatList 
     data={menuList}
     numColumns={3}
     style={{marginTop:20}}
     renderItem={({item,index})=>(
      <TouchableOpacity
      onPress={()=>onMenuPress(item)}
      style={tw`flex-1 p-3 border-[1px] item-center mx-2 mt-4 rounded-lg border-blue-400 bg-blue-50`}>
        {item.icon&& <Image source={item?.icon}
        style={tw`w-[50px] h-[50px]`}/>}
        <Text style={tw`text-[12px] mt-2 text-blue-700`}>{item.name}</Text>
      </TouchableOpacity>
     )}
     />
    </View>
  )
}