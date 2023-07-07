import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Profile_Screen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <Text>Profile Screen</Text>
        <Button
        title="Go to Profile Update Screen"
        onPress={() => navigation.navigate("ProfileUpdate")} // We added an onPress event which would navigate to the About screen
      />
      </View>
    );
  }
  const styles = StyleSheet.create({
});
  export default Profile_Screen;