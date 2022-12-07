import React, { useState, useEffect } from 'react'
import { Text, View,  ActivityIndicator, FlatList, StyleSheet  } from 'react-native'
import { collection, getDocs } from "firebase/firestore"; 
import { app } from '../firebaseConfig';
import { getFirestore } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import { async } from '@firebase/util';

const PizzaScreen =   ({route,navigation}) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const {itemName} = route.params
  // if (loading) {
  //   return <ActivityIndicator />;
  // }
  // if (loading) {
  //   return <ActivityIndicator />;
  // }
  //const users = reload()
  useEffect(() => {
    const subscriber = async () => {
      const users = await reload(itemName);
      setUsers(users);
      
    }
    subscriber();
        return () => {
         
          
        }
        //setLoading(false);
      }, []);
  //     console.log(users)

  //reload()
  console.log(users)
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <>
        <View style={{ height: 100,}}>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', }}>
          {/* <Text>User ID: {item.id}</Text> */}
          <Text style={{ fontSize: 19, textAlign: 'left',fontWeight: 'bold' }}>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
        <View style={{alignItems: 'center',}}>
          <Text style={{fontWeight:'50'}}>
            {item.desc}
          </Text>
        </View>
        </View>
          </>
      )
    }
    ItemSeparatorComponent={() => <View style={{height: 20,borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth}} />}
    />
  )
}


async function reload(itemName){
  users = []
  const db = getFirestore(app)
  const querySnapshot = await getDocs(collection(db, itemName));
  querySnapshot.forEach((doc) => {
    users.push({
      ...doc.data(),
      key: doc.id,
    });
  });
  console.log(users)
  return users;
  // const doc = firestore().collection("Best Sellers")
}
export default PizzaScreen