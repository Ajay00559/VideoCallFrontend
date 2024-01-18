import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuButtons from "../components/MenuButtons";
import ContectsMenu from "../components/ContectsMenu";
import { useNavigation } from "@react-navigation/native";

const Home = ( {navigation}) => {
   
//   // Customize header options
//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       title: "Custom Home Title", // Set your custom title here
//       headerShown: false, // Set to false if you want to hide the header completely
//     });
//   }, [navigation]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation}/>
        <ContectsMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    paddingTop: 25,
    padding: 15,
  },
});
