import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo"

const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo name="notification" size={30} color="#efefef" />
      <Text style={styles.Heading}>Meet & Chat</Text>
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:15,
    paddingHorizontal:10
  },
  Heading: {
    color:"#efefef",
    fontSize:30,
    fontWeight:"700",

  },
});
