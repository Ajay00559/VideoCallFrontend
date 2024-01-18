import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { createContext, useEffect, useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";
 


 

const items = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    Color: "#FF751F",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop Video",
    Color: "blue",
  },
  {
    id: 3,
    name: "upload",
    title: "Share Content",
    Color: "blue",
  },
  {
    id: 3,
    name: "group",
    title: "Participents",
    Color: "blue",
  },
];
// const ApiURL ="https://d612-2409-4081-9196-9dd1-78af-4263-6938-868b.ngrok-free.app";
const ApiURL =
  "https://bdde-2409-4081-9196-9dd1-2516-6d01-6d5b-8b9e.ngrok-free.app";
// const ApiURL="exp://192.168.38.54:8081"
socket = io(ApiURL);

const MeetingRooms = () => {
  const [info, setInfo] = useState({});
  const [name, setName] = useState("");
  const [stream, setStream] = useState("");
  const [activeUsers, setActiveUsers] = useState([]);
 

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });
  }, []);

  const handleData = (name, text) => {
    setInfo({ ...info, [name]: text });
  };

  const cameraRef = useRef();

 
 

  const joinRoom = () => {
    _startCamera();
    socket.emit("join-room", { roomId: info.room, userName: info.name });
    console.log("Joined-room");
  };

 

  useEffect(() => {
    socket = io(ApiURL);
    socket.on("all-users", (users) => {
      //   console.log(`${users} connected to the Server`);
      setActiveUsers(users);

      console.log(users);
    });

    
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <View style={styles.SubContainer}>
          <View style={styles.AllUserConationer}>
            <View style={styles.cameraConationer}>
              {activeUsers
                ?.filter((user) => user.userName != info.name)
                ?.map((user, i) => (
                  <View key={i} style={styles.ActiveUserContainer}>
                    <Text style={{ color: "white" }}>{user.userName}</Text>
                  </View>
                ))}
            </View>
          </View>
          <View style={styles.MenuButtons}>
            {items.map((item, i) => (
              <View key={i} style={styles.btnContainer}>
                <TouchableOpacity
                  //   onPress={() => openMeeting()}
                  style={{ ...styles.BtnStyle, backgroundColor: item.Color }}
                >
                  <FontAwesome name={item.name} size={24} color="#efefef" />
                </TouchableOpacity>
                <Text style={styles.MenuText}>{item.title}</Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.Startmeetingcontainer}>
          <StartMeeting
            info={info}
            handleData={handleData}
            joinRoom={joinRoom}
          />
        </View>
      )}
      <View>
        <Text style={{ color: "white" }}>{name}</Text>
      </View>
    </View>
  );
};

export default MeetingRooms;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
  SubContainer: {
    flex: 1,
  },
  AllUserConationer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  ActiveUserContainer: {
    width: 180,
    height: 180,
    borderWidth: 1,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraConationer: {
    // flex: 1,
    // height:"100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  Camerastyle: {
    width: "100%",
    height: 600,
  },
  MenuButtons: {
    flexDirection: "row",
    //  backgroundColor:"#333",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#fff",
  },
  btnContainer: {
    alignItems: "center",
    flex: 1,
  },
  BtnStyle: {
    width: 40,
    height: 40,
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
  Startmeetingcontainer: {
    // padding: 15,
  },
});
