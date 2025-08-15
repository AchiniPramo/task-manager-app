import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack ,Tabs} from "expo-router";

const Layout = () => {
// ( 
//    <>
//   <Slot />
//   <Text>Welcome to the App</Text>
//   </>
//    )

 return <Tabs>
   <Tabs.Screen name = "home" options={{title : "Hello"}}/>
   <Tabs.Screen name = "tasks" />
   <Tabs.Screen name = "profile" />
   <Tabs.Screen name = "setting" />
     

   </Tabs>
}

export default Layout;