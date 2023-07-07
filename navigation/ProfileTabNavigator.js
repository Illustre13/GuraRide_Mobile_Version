import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileMainStackNavigator, ContactStackNavigator } from "./ProfileStackNavigator";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
  <Tab.Screen
    name="Profile"
    component={ProfileMainStackNavigator}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="person-outline" size={size} color={color} />
      ),
    }}
  />
  <Tab.Screen
    name="Contact US"
    component={ContactStackNavigator}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="mail-outline" size={size} color={color} />
      ),
    }}
  />
</Tab.Navigator>
  );
};

export default BottomTabNavigator;