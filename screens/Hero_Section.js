import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Header from '../components/Header';

const Hero_Section = () => {
  return (
    <View style={styles.container}>
    <ImageBackground
      source={require('../assets/gride-hero-GURARIDE.jpeg')}
      style={styles.container}
    >
      {/* Other components */}
      <View style={styles.overlay} />
      <Header />
      <View style={styles.content}>
        <Text style={styles.heading}>Ride With{'\n'}Pride!</Text>
        <Text style={styles.description}>
        Bike Sharing. Scooter Sharing. {'\n'}Anywhere. Anytime
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Download Now</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  content: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -300,

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
  button: {
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(250, 250,0, 0.5)', // Adjust the opacity and color as desired
  },
});

export default Hero_Section;
