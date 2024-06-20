import { ActivityIndicator, Text, View } from 'react-native'
import React, { Component } from 'react'
import { app } from '../../firebaseConfig';
import { useEffect, useState } from 'react';
import tw from 'twrnc';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import { useRoute } from '@react-navigation/core';
import LatestItemList from '../Components/HomScreen/LatestItemList';

export default function ItemList() {
  
    const db=getFirestore(app)
    const {params}=useRoute();
    const [itemList,setItemList]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        params&&getItemListByCategory();
    },[params])
     
    const getItemListByCategory=async()=>{
        setItemList([])
        setLoading(true)
        const q = query(collection(db,'UserPost'),where('category','==',params.category));
        const snapshot = await getDocs(q);
        setLoading(false)
        snapshot.forEach(doc => {
            console.log(doc.data());
            setItemList(itemList=>[...itemList,doc.data()]);
            setLoading(false)
        });
    }
    
    return (
      <View style={tw`p-2`}>
        {loading?
        <ActivityIndicator style={tw`mt-24`} size={'large'} color={'#3b82f6'}/>
        :
        itemList?.length>0? <LatestItemList latestItemList={itemList} 
            heading={''}
        />:
        <Text style={tw`p-5 text-[20px] mt-24 justify-center text-center text-gray-400`}>Nenhum produto encotrado</Text>
        }
        
      </View>
    )
  
}