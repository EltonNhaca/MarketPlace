import { View, Text, Image, ScrollView, TouchableOpacity, Linking, Button, Share, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '@clerk/clerk-expo';
import { collection, deleteDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../../firebaseConfig';

export default function ProductDetail({navigation}) {
  const {params}=useRoute();
  const [product,setProduct]=useState([]);
  const {user}=useUser();
  const db = getFirestore(app);
  const nav = useNavigation();
  useEffect(()=>{
    //console.log(product.image)
    params&&setProduct(params.product);
    shareButton();
  },[params, navigation])

  const shareButton=()=>{
    navigation.setOptions({
      headerRight: ()=> (
        <Ionicons name="share-social-sharp" size={24} color="white"
        onPress={()=>shareProduct()}
        style={{marginRight:15}} />
      ),
    })
  }

  const shareProduct=()=>{

    const content={
      message:product?.title+"\n"+product?.desc

    }
    Share.share(content).then(resp=>{
      console.log(resp);
    }, (error)=>{
      console.log(error);
    })
  }

  const sendEmailMessage=()=>{
    const subject='Sobre '+product.title;
    const body='Ola '+product.userName+"\n"+"Estou interessado neste producto"
    Linking.openURL('mailto:'+product.userEmail+"?"+"subject="+subject+"&body="+body);

  }

  const deleteUserPost=()=>{
    Alert.alert('Tem a certeza que quer apagar este producto?',' ', [
      {
        text:'Sim',
        onPress:()=>deleteFromFirestores()
      },
      {
        text: 'Cancelar',
        onPress:()=> console.log('Cancel pressed'),
        style: 'Cancel',
      }
    ])
  }

  const deleteFromFirestores=async()=>{
    console.log('Apagado!');
    const q=query(collection(db,'UserPost'),where('title','==',product.title));
    const snapshot = await getDocs(q);
    snapshot.forEach(doc=>{
      deleteDoc(doc.ref).then(resp=>{
        console.log('Deleted doc...');
        nav.goBack();
      })
    })
  }
  return (
    <ScrollView style={tw`bg-white`}>
      <Image source={{uri:product.img}}
        style={tw`h-[320px] w-full`}
      />

      <View style={tw`p-3`}>
        <Text style={tw`text-[24px] font-bold`}>{product?.title}</Text>
        <View style={tw`items-baseline`}>
         <Text style={tw`bg-blue-200 p-1 mt-2 px-2 rounded-full  text-blue-500`}>{product.category}</Text>
        </View>
        <Text style={tw`mt-3 font-bold text-[20px]`}>Descrição</Text>
        <Text style={tw`text-[17px] text-gray-500`}>{product?.desc}</Text>

      </View>

      <View style={tw`p-3 flex flex-row items-center gap-3 bg-blue-100 border-gray-400`}>
        <Image source={{uri:product.userImage}} 
          style={tw`w-12 h-12 rounded-full`}
        />
        <View >
          <Text style={tw`font-bold text-[18px]`}>{product.userName}</Text>
          <Text style={tw`text-gray-500`}>{product.userEmail}</Text>
        </View>
      </View>
      {user?.primaryEmailAddress.emailAddress==product.userEmail?
          <TouchableOpacity onPress={()=>deleteUserPost()} style={tw`z-40 bg-red-500 rounded-full p-4 m-2`}>
          <Text style={tw`text-center text-white`}>Apagar Producto </Text>
        </TouchableOpacity>
       :
       <TouchableOpacity onPress={()=>sendEmailMessage()} style={tw`z-40 bg-blue-500 rounded-full p-4 m-2`}>
        <Text style={tw`text-center text-white`}>Enviar Mensagem </Text>
      </TouchableOpacity> 
      }
     
    </ScrollView>
  )
}