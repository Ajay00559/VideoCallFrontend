import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";

const StartMeeting = ({ info, handleData, joinRoom }) => {
  return (
    <View style={styles.Startmeetingcontainer}>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={info.name}
          placeholder="Enter name"
          placeholderTextColor={"white"}
          onChangeText={(text) => handleData("name", text)}
        />
      </View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={info.room}
          placeholder="Enter Room Id"
          placeholderTextColor={"white"}
          onChangeText={(text) => handleData("room", text)}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() =>joinRoom()} style={styles.BtnStyle}>
          <Text style={styles.textInput}>Start Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
    padding: 15,
  },
  info: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#373538",
    // backgroundColor: "red",
    height: 50,
    borderRadius: 15,
    borderColor: "#484648",
    padding: 12,
  },
  btnContainer: {
    marginTop: 10,
  },
  textInput: {
    color: "#fff",
  },
  BtnStyle: {
    width: 350,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  Startmeetingcontainer: {
    // flex:1,
    padding:20
  },
});
