import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MenuButtons = ({navigation}) => {

    const items=[
        {
            id:1,
            name:"video-camera",
            title:"New Meeting",
            Color:'#FF751F'
        },
        {
            id:2,
            name:"calendar",
            title:"Schedule",
            Color:'blue'
        },
        {
            id:3,
            name:"upload",
            title:"Share Screen",
            Color:'blue'
        },
        {
            id:3,
            name:"plus-square",
            title:"Join",
            Color:'blue'
        },
    ]

    const openMeeting=()=>{
        navigation.navigate("Room")
    }
  return (
    <View style={styles.container}>
      {/* <Fontisto name="search" size={20} color={"#858585"} /> */}
      {items.map((item,i)=>
        <View key={i} style={styles.btnContainer}  >
        <TouchableOpacity onPress={()=>openMeeting()} style={{...styles.BtnStyle,backgroundColor:item.Color}}>
          <FontAwesome name={item.name} size={30} color="#efefef" />
        </TouchableOpacity>
        <Text style={styles.MenuText}>{item.title}</Text>
      </View>
      )}
       
      {/* <Text style={styles.textSearchBar}>Search</Text> */}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#fff",
  },
  btnContainer: {
    alignItems: "center",
    flex:1
  },
  BtnStyle: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 9,

    alignItems: "center",
    justifyContent: "center",
  },
  MenuText: {
    fontSize: 12,
    color: "#858585",
    fontWeight: "600",
    paddingTop: 10,
  },
});
