import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Header from '../components/Header';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login_Screen from './Login';

// const Stack = createNativeStackNavigator();
// function MyStack() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login_Screen} />
//       </Stack.Navigator>
//     );

// }
const HomePage = () => {
    const navigation = useNavigation();
    const goToLogin = () => {
        navigation.navigate(Login_Screen);
      };
    
  return (
    <View style={styles.container}>
        {/* <NavigationContainer>
        <MyStack />
        </NavigationContainer> */}
   
    <ImageBackground
      source={require('../assets/gride-hero-GURARIDE.jpeg')}
      style={styles.container}
    >
      {/* Other components */}
      <View style={styles.overlay} />
      <View style={styles.header}>
        <Image
          source={require('../assets/logo-black-GURARIDE.png')}
          style={styles.logo}
          resizeMode="contain"
        />
     </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Ride With{'\n'}Pride!</Text>
        <Text style={styles.description}>
        Bike Sharing. Scooter Sharing. {'\n'}Anywhere. Anytime
        </Text>
        {/* onPress={goToLogin}  */}
        <TouchableOpacity style={styles.Authbutton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
        <Text>
            Don't have an Account, Create one
            <TouchableOpacity style={{paddingTop: -100}}>
          <Text style={style={fontWeight: 'bold'}}> here.</Text>
        </TouchableOpacity>
        </Text>
       
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download The App Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff122',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      },
  logo: {
    flex: 1,
    justifyContent: 'center',
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  content: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 8,
    marginTop: 30,
    width: 320,
    height: 60,
  },
  heading: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  Authbutton: {
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
    width: 150,
    height: 50,
    alignContent: 'center'
  },
  button: {
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 0,
    marginTop: 30,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(250, 250,0, 0.5)', // Adjust the opacity and color as desired
  },
});

export default HomePage;
