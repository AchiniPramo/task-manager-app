import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack ,Tabs} from "expo-router";
import {MaterialIcons} from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
// ( 
//    <>
//   <Slot />
//   <Text>Welcome to the App</Text>
//   </>
//    )

 return <SafeAreaView className="flex-1 bg-white">
   <Tabs screenOptions={{
      headerShown: false, 
      tabBarActiveTintColor: "#2ecc72",
      tabBarInactiveTintColor: "#2c3e50", 
      tabBarStyle:{backgroundColor: "#ecf0f1"}}}>
   <Tabs.Screen name = "home" options={{title : "Home", tabBarIcon: (data) => <MaterialIcons name="home-filled" size={data.size} color={data.color} />}}/>
   <Tabs.Screen name = "tasks" options={{title : "Task", tabBarIcon: (data) => <MaterialIcons name="check-circle" size={data.size} color={data.color} />}} />
   <Tabs.Screen name = "profile" options={{title : "Profile", tabBarIcon: (data) => <MaterialIcons name="person" size={data.size} color={data.color} />}} />
   <Tabs.Screen name = "setting" options={{title : "Setting", tabBarIcon: (data) =><MaterialIcons name="settings" size={data.size} color={data.color} />}} />
   </Tabs>
   </SafeAreaView>
}

export default Layout;