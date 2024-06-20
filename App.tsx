import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./navigatio/StackNavigator";
import LoginScreen from "./Apps/Screens/LoginScreen";
import tw from 'twrnc';
import {ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-expo';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Apps/Navigations/TabNavigation";

export default function App() {
  return(
    <ClerkProvider publishableKey="pk_test_bm90YWJsZS1zaGFyay0yNS5jbGVyay5hY2NvdW50cy5kZXYk">
    <View style={tw`flex-1 bg-white`}>
      <StatusBar style="auto" />
      <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
      </SignedIn>
      <SignedOut>
      <LoginScreen />
      </SignedOut>
    </View>
    </ClerkProvider>
  );
}

