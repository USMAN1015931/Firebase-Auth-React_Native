import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList,TouchableOpacity,onPress, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "../Screens/Register";

import GETAPICustomHook from "../GetAPICustomHook";

import AsyncStorage from "@react-native-async-storage/async-storage";

const GLOBAL = require("./Globals");


















export default function UserHome({ navigation }) {



  const onPress = () =>  {
    navigation.navigate("Login");
  }


 





  const [mydata, setMydata] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from AsyncStorage
      const mydata = await AsyncStorage.getItem("mydata");

      if (mydata) {
        // Data exists in AsyncStorage, use it
        const originalform = JSON.parse(mydata);
        setMydata(originalform);
        // console.log("Data Fetch From Local DB", originalform);
        // console.log("Data Fetch From Local DB [0]", originalform[0]);
      } else {
        // Data doesn't exist in AsyncStorage, fetch from API
        console.log("Calling API To get data");
        axios.get('https://dev.iqrakitab.net/api/books').then((response)=>{
                console.log(response.data.data);
              setMydata(response.data.data);
              })

        // Store the data in AsyncStorage
        if (mydata) {
          await AsyncStorage.setItem("mydata", JSON.stringify(mydata));
          console.log("Data stored in AsyncStorage");
        }
      }
    };

    fetchData(); // Call the fetchData function
  }, []);



  return (
    <View style={{ flex: 1 }}>
      <View style={styles.list}>
        <FlatList
          data={mydata}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}> {item.englishName} </Text>
              <Text style={styles.text}> ID NUMBER= {item._id} </Text>
              <Text style={styles.text}>
                {" "}
                DESCRIPTION = "{item.englishNameTranslation}"{" "}
              </Text>
              <Text style={styles.text}>
               BOOK NAME= {item.title}
              </Text>
            </View>
          )}
        />
      </View>

      <View style={styles.Bottom}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Click</Text>
      </TouchableOpacity>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    // flex: 6,
    // flexDirection: 'row',
    backgroundColor: "white",
    padding: 10,
    // marginHorizontal: '5%',
    // marginVertical: 10,
    margin: 10,
    marginLeft: "5%",
    // marginRight: '5%',

    width: "90%",
    height: 120,
    borderRadius: 8,
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 10,
    color: "black",
    fontWeight: "bold",
  },

  text: {
    fontSize: 18,
    color: "black",
  },

  list: {
    flex: 1,
    backgroundColor: "blue",
    // alignItems: "center",
    // // justifyContent: "center",
  },

  Bottom: {
    flex: 0.50,
    //backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
