import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc';
import Header from '../Components/HomScreen/Header';
import Slider from '../Components/HomScreen/Slider';
import { DocumentData, collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import Categories from '../Components/HomScreen/Categories';
import LatestItemList from '../Components/HomScreen/LatestItemList';

export default function HomeScreen() {
  const db = getFirestore(app);
  const [sliderList, setSliderList] = useState<any[]>([]);
  const[categoryList, setCategoryList]= useState<any[]>([])
  const[latesItemList, setLatesItemList]= useState<any[]>([])
  useEffect(()=>{
    getSilder();
    getCategoryList();
    getLatestItem();
  },[])

  
  const getSilder=async()=>{
    setSliderList([])
    const querySnapshot = await getDocs(collection(db,"Sliders"))
    querySnapshot.forEach((doc)=>{
   //  console.log(doc.id, "=>", doc.data(), "end");
      setSliderList(sliderList=>[...sliderList, doc.data()]);
    });
  }
 
  const getCategoryList=async()=>{
    setCategoryList([]);
    const querySnapshot=await getDocs(collection(db,'Category'));
    querySnapshot.forEach((doc)=>{
      //console.log("category data:",doc)
      setCategoryList(categoryList=>[...categoryList,doc.data()]);
    })
  }

  const getLatestItem=async()=>{
    setLatesItemList([]);
    const q=query(collection(db,'UserPost'),orderBy('createdAt','desc'));  
    const querySnapshot=await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log("latest item:",doc.data());
      setLatesItemList(latesItemList=>[...latesItemList,doc.data()]);
    })
  }
  return (
    <ScrollView style={tw`py-8 px-6 bg-white flex-1`}>
      <Header />
      <Slider sliderList={sliderList} />
      <Categories categoryList={categoryList} />
      <LatestItemList latestItemList={latesItemList} heading={'Productos Recentes'}/>
    </ScrollView>
  )
}