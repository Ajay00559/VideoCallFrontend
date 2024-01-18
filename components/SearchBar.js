import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color={"#858585"} />
      <Text style={styles.textSearchBar}>Search</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor:"#333333",
    alignItems:"center",
    height:40,
    borderRadius:10,
  },
  textSearchBar: {
    paddingLeft:10,
    fontSize:20,
    color:"#858585"
  },
});
