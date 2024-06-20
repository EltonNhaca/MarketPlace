import { View, Text, TextInput, TouchableOpacity, Image, ToastAndroid, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { app } from '../../firebaseConfig';
import { Formik, FormikErrors } from 'formik';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';
import { getFirestore, getDocs, collection, DocumentData, addDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import { useUser } from '@clerk/clerk-expo';
import { StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


interface FormValues {
  title: string;
  desc: string;
  category: string;
  address: string;
  price: string;
  img: string;
  userName:string;
  userEmail:string;
  userImage:string;
  createdAt:number;
}

interface CustomFormikErrors extends FormikErrors<FormValues> {
  name?: string;
}

export default function AddPostScreen() {
  const [image, setImage] = useState<string | null>(null);
  const db = getFirestore(app);
  const [categoryList, setCategoryList] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const storage = getStorage();
  const auth = getAuth();
  const {user}= useUser();
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Category'));
      const categories: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
       // console.log("Docs:", doc.data());
        categories.push(doc.data());
      });
      setCategoryList(categories);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitMethod = async (value: FormValues) => {
   // const user = auth.currentUser;
   // console.log(auth);
    setIsLoading(true);
    if (!user) {
      ToastAndroid.show('Por favor, autentique-se para fazer upload', ToastAndroid.SHORT);
      return;
    }

    console.log(value);
    value.createdAt = Date.now();
    if (image) {
      try {
        const resp = await fetch(image);
        const blob = await resp.blob();
       // console.log(blob);
        const storageRef = ref(storage, 'productPost/' + Date.now() + ".jpg");

        await uploadBytes(storageRef, blob).then((snapshot)=>{
          console.log('Uploaded a blob or file');
        }).then((resp)=>{
          getDownloadURL(storageRef).then(async(downloadUrl)=>{
            console.log(downloadUrl);
            value.img=downloadUrl;
            value.userName=user.fullName || 'Unknown';
            value.userEmail=user.primaryEmailAddress?.emailAddress || 'Unknown';
            value.userImage=user.imageUrl || 'Unknow';
            console.log(value.createdAt)
            console.log(Date.now())
            console.log(value.userEmail);
            const docRef=await addDoc(collection(db,"UserPost"),value);
            if(docRef.id){
              setIsLoading(false);
              Alert.alert("Sucesso!!","Producto adicionado com sucesso")
              console.log("Document added!!")
            }
          })
        });
        
        //const downloadUrl = await getDownloadURL(storageRef);
        //console.log(downloadUrl);
        //value.img = downloadUrl;
//
  //      const docRef = await addDoc(collection(db, "UserPost"), value);
    //    if (docRef) {
      //    console.log("Adicionou documento");
        //  ToastAndroid.show('Publicação adicionada com sucesso!', ToastAndroid.SHORT);
       // }
      } catch (error) {
        console.error("Error uploading image or adding document:", error);
        ToastAndroid.show('Erro ao adicionar publicação', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Por favor, selecione uma imagem', ToastAndroid.SHORT);
    }
  };

  return (
  //  <KeyboardAvoidingView>
    <ScrollView style={tw`p-10 bg-white flex-1`}>
      <Text style={tw`text-[27px] font-bold`}>Publicar Produto</Text>
      <Text style={tw`text-[18px] text-gray-500 mb-7`}>Publique e Começe a Vender já</Text>
      <Formik
        initialValues={{ title: '', desc: '', category: '', address: '', price: '', img: '', userName:'', userEmail:'', userImage:'',createdAt:Date.now() }}
        onSubmit={value => onSubmitMethod(value)}
        validate={(values) => {
          const errors: CustomFormikErrors = {};
          if (!values.title) {
            console.log("Title not Present");
            ToastAndroid.show('Titulo é obrigatório', ToastAndroid.SHORT);
            errors.name = "Title must be there";
          }
          return errors;
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors }) => (
          <View>
            <TouchableOpacity onPress={pickImage}>
              {image ?
                <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 15 }} />
                :
                <Image source={require('./../../assets/images/placeholder.jpg')}
                  style={{ width: 100, height: 100, borderRadius: 15 }}
                />
              }
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder='Titulo'
              value={values.title}
              onChangeText={handleChange('title')}
            />
            <TextInput
              style={styles.input}
              placeholder='Descrição'
              value={values.desc}
              numberOfLines={5}
              onChangeText={handleChange('desc')}
            />
            <TextInput
              style={styles.input}
              placeholder='Preço'
              value={values.price}
              keyboardType='number-pad'
              onChangeText={handleChange('price')}
            />
            <TextInput
              style={styles.input}
              placeholder='Endereço'
              value={values.address}
              onChangeText={handleChange('address')}
            />
            <View style={{ borderWidth: 1, borderRadius: 10, marginTop: 15 }}>
              <Picker
                selectedValue={values.category}
                style={tw`border-2`}
                onValueChange={itemValue => setFieldValue('category', itemValue)}
              >
                {categoryList.length > 0 && categoryList.map((item, index) => (
                  <Picker.Item key={index} label={item.name} value={item.name} />
                ))}
              </Picker>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={tw`p-5 bg-blue-500 rounded-full mt-10`}>
              <Text style={tw`text-white text-center text-[16px]`}>Submeter</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
 //   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
    marginBottom: 5,
    paddingHorizontal: 17,
    textAlignVertical: 'top',
    fontSize: 17,
  },
});
