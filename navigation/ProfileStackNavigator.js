import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/Profile";
import Profile_Update from "../screens/ProfileUpdate";
import Contact from "../screens/ContactUs";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const ProfileMainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, screenOptionStyle}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileUpdate" component={Profile_Update} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, screenOptionStyle}}>
      <Stack.Screen name="Contact US" component={Contact} />
    </Stack.Navigator>
  );
}

export { ProfileMainStackNavigator, ContactStackNavigator };