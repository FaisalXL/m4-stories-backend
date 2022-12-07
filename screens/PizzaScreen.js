import React, { useState, useEffect } from 'react'
import { Text, View,  ActivityIndicator  } from 'react-native'
import { collection, getDocs } from "firebase/firestore"; 
import { app } from '../firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';

const PizzaScreen =   () => {
  // const [loading, setLoading] = useState(true);
  // const [users, setUsers] = useState([]);

  // if (loading) {
  //   return <ActivityIndicator />;
  // }


  //const text1 = "test"
  reload()

  return (
    <View style={{flex:1}}>
      
    </View>
  )
}


async function reload(){
  users = []
  const db = getFirestore(app)
  const querySnapshot = await getDocs(collection(db, "Best Sellers"));
  querySnapshot.forEach((doc) => {
  
    console.log(doc.data().name);
  });
  // const doc = firestore().collection("Best Sellers")
}
export default PizzaScreen