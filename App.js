import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Navigations from "./Navigations";
 
 
 
 

export default function App() {
  const Stack = createStackNavigator();
  return <Navigations />
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
