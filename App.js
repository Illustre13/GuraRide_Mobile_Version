import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {name as appName} from './app.json';
import { AppRegistry } from 'react-native';
import AppStack from './navigation/AppStack';
import AuthStack from './navigation/AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 AppRegistry.registerComponent(appName, () => Hero_Section);
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
    // <Hero_Section />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
