import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import ExploreScreen from '../Screens/ExploreScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import HomeScreenStackNav from './HomeScreenStackNav';
import ExploreScreenStackNav from './ExploreScreenStackNav';
import ProfileScreentackNav from './ProfileScreenStackNav';



const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='home-nav' component={HomeScreenStackNav}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, fontSize:12, marginBottom:3}}>Home</Text>
                ),
                tabBarIcon:({color,size}) =>(
                <Ionicons name="home" size={24} color={color} />
                )
            }}
        />
        <Tab.Screen name='explorar' component={ExploreScreenStackNav}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, fontSize:12, marginBottom:3}}>Explore</Text>
                ),
                tabBarIcon:({color,size}) =>(
                <Ionicons name="search" size={24} color={color} />
                )
            }}
        />
        <Tab.Screen name='addpost' component={AddPostScreen}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, fontSize:12, marginBottom:3}}>Publicar</Text>
                ),
                tabBarIcon:({color,size}) =>(
                <Ionicons name="camera" size={24} color={color} />
                )
            }}
        />
        <Tab.Screen name='profile' component={ProfileScreentackNav}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, fontSize:12, marginBottom:3}}>Perfil</Text>
                ),
                tabBarIcon:({color,size}) =>(
                <Ionicons name="person-circle" size={24} color={color} />
                )
            }}
        />
    </Tab.Navigator>
  )
}

