import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "../screens/SignUp";
import LogIn from "../screens/LogIn";
import ProductDetail from "../screens/ProductDetail";
import Home from "../components/screens/Home";
import MyCart from "../components/screens/MyCart";
import ProductInfo from "../components/screens/ProductInfo";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options = {{headerShown:false}} />
          <Stack.Screen name ="MyCart" component={MyCart}options = {{headerShown:false}}/>
          <Stack.Screen name="ProdictInfo" component={ProductInfo} options = {{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default StackNavigator;

const styles = StyleSheet.create({});