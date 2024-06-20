import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../Screens/ProfileScreen';
import MyProducts from '../Screens/MyProducts';
import ProductDetail from '../Screens/ProductDetail';

const Stack=createNativeStackNavigator();
export default function ProfileScreentackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='profile-tab' 
      options={{
        headerShown:false
      }}
      component={ProfileScreen} />
      <Stack.Screen name='my-product'
       options={{
        headerStyle:{backgroundColor:'#3b82f6'},
        headerTintColor:'#fff',
        headerTitle: 'Meus Productos'
    }}
      component={MyProducts}/>
       <Stack.Screen name='product-detail'
       options={{
        headerStyle:{backgroundColor:'#3b82f6'},
        headerTintColor:'#fff',
        headerTitle: 'Detalhes'
    }}
      component={ProductDetail}/>
    </Stack.Navigator>
  )
}