import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
const Contects = [
  {
    type: "starred",
  },
   
  
  {
    name: "Ankush",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Prateek",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Nagesh",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Basant",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Vishal",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Salabh",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Priyanka",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Yogesh",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Ankit",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Prateek",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Prateek",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Prateek",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
  {
    name: "Prateek",
    type: "contect",
    photo: require("../assets/icon.png"),
  },
];

const ContectsMenu = () => {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}   style={styles.container}>
      {Contects?.map((item, i) => (
        <View key={i} style={styles.row}>
          {item.type === "starred" ? (
            <View style={styles.starred}>
              <AntDesign name="star" size={40} color="#efefef" />
            </View>
          ) : (
            <Image source={item.photo} style={styles.starred}>
               
            </Image>
          )}

          <Text style={styles.text}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ContectsMenu;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    // flexDirection: "row",
    // gap: "20",
    // padding: 10,
  },
  starred: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    // backgroundColor: "#333333",
    width: 55,
    height: 55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
