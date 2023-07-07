import Reacr from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding_Screen from '../screens/OnBoarding_Screen';
import Login_Screen from '../screens/Login';
import SignUp_Screen from '../screens/SignUp';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="OnBoarding" component={OnBoarding_Screen} />
            <Stack.Screen name="Login" component={Login_Screen} />
            <Stack.Screen name="SignUp" component={SignUp_Screen} />
            
        </Stack.Navigator>
    );
};
export default AuthStack;