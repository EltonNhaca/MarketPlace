import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import tw from 'twrnc';
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useSignIn } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const { setActive, isLoaded } = useSignIn(); // Ensure all variables are destructured

  const onPress = React.useCallback(async () => {
    if (!isLoaded) {
      console.error("SignIn hook is not loaded");
      return;
    }

    try {
      const response = await startOAuthFlow();
    //  console.log("OAuth Flow Response:", response);

      const { createdSessionId } = response;

      if (createdSessionId) {
        await setActive({ session: createdSessionId });
        console.log("Session set successfully");
        console.log(createdSessionId)
      } else {
        console.error("No session created");
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, [setActive, startOAuthFlow, isLoaded]);

  return (
    <View style={tw`flex-1`}>
      <Image
        source={require('./../../assets/images/Icon.png')}
        style={tw`w-full h-[400px] absolute top-0 object-cover`}
      />
      <View style={tw`p-8 flex-1 mt-[400px] rounded-t-3xl shadow-md`}>
        <Text style={tw`text-[30px] font-bold`}>The CyberMarketPlace</Text>
        <Text style={tw`text-[18px] text-slate-500 mt-6`}>
          Compre e Venda no CyberMarketPlace, onde você pode vender itens antigos e ganhar dinheiro de verdade
        </Text>
        <TouchableOpacity onPress={onPress} style={tw`p-4 bg-blue-500 rounded-full mt-20`}>
          <Text style={tw`text-white text-center text-[18px]`}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}