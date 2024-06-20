import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const {user} = useUser();
  return (
    <View>
        {/* User info section  */}
        <View style={tw`flex flex-row items-center gap-2`}>
            <Image source={{uri:user?.imageUrl}} 
                style={tw`rounded-full w-12 h-12`}
            />
            <View>
                <Text style={tw`text-[16px]`}>Welcome</Text>
                <Text style={tw`text-[20px] font-bold`}>{user?.fullName}</Text>
            </View>
        </View>

        <View style={tw`p-[9px] px-5 flex flex-row items-center gap-2 bg-blue-50 mt-5 rounded-full border-[2px] border-blue-300`}>
            <Ionicons name="search" size={24} color="gray" />
            <TextInput placeholder='Search' style={tw`ml-2 text-[18px]`} 
            onChangeText={(value)=>console.log(value)}
            />
        </View>
    
    </View>

   
  )
}