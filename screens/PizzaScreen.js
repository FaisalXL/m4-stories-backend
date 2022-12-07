import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { app } from "../firebaseConfig";
import { getFirestore } from "firebase/firestore";
//import firestore from '@react-native-firebase/firestore';
import { async } from "@firebase/util";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const PizzaScreen = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const { itemName } = route.params;
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
    };
    subscriber();
    return () => {};
    //setLoading(false);
  }, []);
  //     console.log(users)

  //reload()
  //console.log(users)
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <>
        <View>
          <View style={{}}>
            <Image  style ={styles.image}source={{uri:item.image}}/>
            <View style={styles.title}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.price}>
              <Text styles={styles.priceword}>{item.price}</Text>
            </View>
            <View>
              <Text style={styles.desc}>
                {item.desc}
              </Text>
            </View>
          </View>
          </View>
        </>
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 20,
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    alignItems: "flex-start",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  price: {
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  desc:{
    margin: 20,
    fontStyle: "italic"

  },
  image:
  {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: windowWidth*0.75,
    height: windowHeight*0.2,
    borderRadius: 40
  }
});

async function reload(itemName) {
  users = [];
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, itemName));
  querySnapshot.forEach((doc) => {
    users.push({
      ...doc.data(),
      key: doc.id,
    });
  });
  console.log(users);
  return users;
  // const doc = firestore().collection("Best Sellers")
}
export default PizzaScreen;
