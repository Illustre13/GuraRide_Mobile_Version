import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Profile_Update_Screen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <Text>Profile Update Screen</Text>
         <Button
        title="Back to Profile"
        onPress={() => navigation.navigate("Profile")} // We added an onPress event which would navigate to the About screen
      />
      </View>
    );
  }
  const styles = StyleSheet.create({

});
  export default Profile_Update_Screen;