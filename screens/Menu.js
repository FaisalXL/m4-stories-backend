import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  Modal,
} from "react-native";
import { useState } from "react";
import FocusedStatusBar from "../components/FocusedStatusBar";
import ItemCard from "../components/ItemCard";
import { ScrollView } from "react-native-gesture-handler";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import PizzaScreen from './PizzaScreen';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DATA = [
  {
    name: "pizza",
    img: require("../assets/FoodImages/Pizzas/ClassicMargherita.jpg"),
  },
  {
    name: "pasta",
    img: require("../assets/FoodImages/Pastas/ArrabiataSauce.jpg"),
  },
  {
    name: "eggnostic",
    img: require("../assets/FoodImages/Eggnostic/EggGheeRoast.jpg"),
  },
  {
    name: "salads",
    img: require("../assets/FoodImages/salads/CeaserSalad.jpg"),
  },
  { name: "chicken", img: require("../assets/chicken/tangdikebab.jpg") },
];



const Menu = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/menubg2.jpeg")}
        style={{ width: windowWidth, height: windowHeight }}
      >
      <ScrollView>
        {/* <Modal>
          <View>

          </View>
        </Modal> */}
        <Pressable onPress ={()=> navigation.navigate("PizzaScreen",{itemName :"Best Sellers"})}>
          <Text style={styles.titletext}>Best Sellers</Text>
        </Pressable>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Pressable>
              <View>
                <Image source={item.img} style={styles.items} />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Pressable onPress ={()=> navigation.navigate("PizzaScreen",{itemName :"Pizzas"})}>
          <Text style={styles.titletext}>Pizzas</Text>
        </Pressable>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Pressable>
              <View>
                <Image source={item.img} style={styles.items} />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Pressable onPress ={()=> navigation.navigate("PizzaScreen",{itemName :"Cocktails"})}>
          <Text style={styles.titletext}>Cocktails</Text>
        </Pressable>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Pressable>
              <View>
                <Image source={item.img} style={styles.items} />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Pressable onPress ={()=> navigation.navigate("PizzaScreen",{itemName :"Desserts"})}>
          <Text style={styles.titletext}>Desserts</Text>
        </Pressable>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ item }) => (
            <Pressable>
              <View>
                <Image source={item.img} style={styles.items} />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "white",
  },
  items: {
    width: windowWidth * 0.7,
    height: windowHeight / 5,
    marginHorizontal: 10,
    borderRadius: 10
  },
  titletext: {
    fontSize: 30,
    margin: 5,
    alignItems: "center",
  },
});

export default Menu;
