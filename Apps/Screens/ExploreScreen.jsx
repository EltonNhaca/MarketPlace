import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { collection, getFirestore, getDocs, orderBy, query } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import LatestItemList from '../Components/HomScreen/LatestItemList';

export default function ExploreScreen() {
  const db = getFirestore(app);
  const [productList,setproductList] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    setproductList([])
    try {
      const q = query(collection(db, 'UserPost'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);

      snapshot.forEach((doc) => { 
        setproductList(productList => [...productList, doc.data()]);
      });
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  return (
    <ScrollView style={tw`p-5 py-8`}>
      <Text style={tw`text-[30px] font-bold`}>Explore Mais</Text>
      <LatestItemList latestItemList={productList} />
    </ScrollView>
  );
}
