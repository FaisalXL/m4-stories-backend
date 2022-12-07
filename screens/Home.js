import React from 'react'
import { Pressable, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
const Home = ({navigation}) => {
  return (
    <View style={styles.main}>
        <ImageBackground source={require("../assets/menubg1.jpeg")} style={styles.main}>
            <Text style ={styles.hometext}>
                Welcome to Stories
            </Text>
            <Pressable style={styles.menuButton} onPress={() => navigation.navigate("Menu")}>
                <Text style={{fontSize: 40, color: 'black', borderColor: 'black'}}>Menu</Text>
            </Pressable>
            <Text style={{bottom:0, position: 'absolute', paddingBottom: 20, color: 'black', alignSelf: 'center', margin: 10}}>
                Disclaimer: Handle Device with care - Stories Management
            </Text>
        </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
    main:{
        flex: 1
    },
    hometext : {
        marginTop: 150,
        flex: 0.1,
        paddingVertical: 40,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 4,
        color: "black",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        width : 300,
        justifyContent: "center",
        alignSelf: "center"
    },
    menuButton: {
        flex: 0.5,
        marginTop: 40,
        alignSelf: 'center',
        paddingTop: '50%',
        
    }
})

export default Home