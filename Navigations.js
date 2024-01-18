import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import MeetingRooms from './screens/MeetingRooms';

const Navigations = () => {
   
      const Stack = createStackNavigator();
    
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Room"
              component={MeetingRooms}
              options={{
                title: "Start a meeting",
                headerStyle: {
                  backgroundColor: "#1c1c1c",
                  shadowOpacity: 0,
                },
                headerTintColor: "#fff",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
  
    
}

export default Navigations

const styles = StyleSheet.create({})