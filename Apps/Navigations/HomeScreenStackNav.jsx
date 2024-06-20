import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";import React from 'react'
import HomeScreen from '../Screens/HomeScreen'
import ItemList from '../Screens/ItemList'
import ProductDetail from '../Screens/ProductDetail';

const Stack =createNativeStackNavigator ()
export default function HomeScreenStackNav() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{headerShown:false}} />
        <Stack.Screen name="item-list" component={ItemList} 
            options={({route})=> ({title: route.params.category,
                headerStyle:{backgroundColor:'#3b82f6'},
                headerTintColor:'#fff',
            })}
          
        />
         <Stack.Screen name="product-detail" component={ProductDetail} 
            options={{
                headerStyle:{backgroundColor:'#3b82f6'},
                headerTintColor:'#fff',
                headerTitle: 'Detalhes'
            }}
          
        />
    </Stack.Navigator>
  )
}