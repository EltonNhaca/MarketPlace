import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getDocs, getFirestore, query, collection, where } from 'firebase/firestore';
import { app } from '../../firebaseConfig'
import { useUser } from '@clerk/clerk-expo'
import LatestItemList from '../Components/HomScreen/LatestItemList';
import { useNavigation } from '@react-navigation/core';

export default function MyProducts() {
  const db = getFirestore(app)
  const {user}=useUser();
  const [productList, setProductList] = React.useState([])
  const navigation=useNavigation();


  useEffect(()=>{
    navigation.addListener('focus',(e)=>{
      console.log(e);
      getUserPost();
    })
  },[navigation])
  const getUserPost=async()=>{
    setProductList([]);
    const q=query(collection(db,'UserPost'),where('userEmail','==',user?.primaryEmailAddress.emailAddress));
    const snapshot=await getDocs(q);
    snapshot.forEach(doc=>{
        console.log(doc.data());
        setProductList(productList=>[...productList,doc.data()]);
    })
  }
  return (
    <View>
      <LatestItemList latestItemList={productList} 
      />
    </View>
  )
}