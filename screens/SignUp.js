import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Ionicons } from 'react-native-vector-icons';


const SignUp_Screen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in with username:', username, 'and password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevValue) => !prevValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
      <Image
          source={require('../assets/logo-black-GURARIDE.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
     <ScrollView  style={styles.loginForm}>
     <View style={styles.formContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 20, paddingBottom: 20}}>Create Your Account</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginTextSection}>
            <TouchableOpacity>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Don't have an Account? Sign Up Here.</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Back to Homepage</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.loginLine}>
          <View style={{borderColor: 'black', borderBottomWidth: 1, marginLeft: 30, flex: 1, flexDirection: 'column', alignContent:'center'}}>
          </View>
          <View style={{}}>
              <View style={{backgroundColor: '#D9D9D9', borderRadius: 40}}>
              <Text>OR</Text>
                </View>
          </View>
          <View style={{borderColor: 'black', borderBottomWidth: 1, marginRight: 30, flex: 1, flexDirection: 'column', alignContent:'center'}}>
          </View>
      </View>
          <View>
              <TouchableOpacity style={styles.googleButton}>
                <Ionicons name="logo-google" size={20} color="black" />
                  <Text style={styles.loginButtonText}>Login with Google     </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fbButton}>
                <Ionicons name="logo-facebook" size={20} color="blue" />
                  <Text style={styles.loginButtonText}>Login with Facebook</Text>
                </TouchableOpacity>
          </View>
     </ScrollView>
     
      <View style={styles.loginFooter}> 
        <Text>
        © ITH 2023. All Rights Reserved.
        </Text>
        <Text>
        Privacy · Terms · FAQ
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  loginHeader: {
    width: '100%',
    flex: 1/4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  loginFooter: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1/12,
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  loginForm: {
    backgroundColor: '#FAFF02',
    flex: 4,
    width: '100%',

  },
  formContainer: {
    width: '80%',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    width: '95%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  eyeIcon: {
    marginLeft: -40,
    marginBottom: 10,
    padding: 5,
  },

  googleButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: 220,
    height: 40,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fbButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: 220,
    height: 40,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  loginButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 5,
    width: '100%',
  },
  loginButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,

  },
  logo: {
    width: '90%',
    height: 90,
    justifyContent:'center',
    marginTop: 5,
  },
  loginTextSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    fontSize: 10,
  },
  loginLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 5,
  },
});

export default SignUp_Screen;
