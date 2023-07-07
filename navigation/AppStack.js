import Reacr from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Hero_Section from '../screens/Hero_Section';
import AboutUs_Screen from '../screens/AboutUs';
import Bike_Screen from '../screens/Bikes';
import Rentals_Screen from '../screens/Rentals';
import ContactUs_Screen from '../screens/ContactUs';
import Logout_Screen from '../screens/Logout';
import Login_Screen from '../screens/Login';
import SignUp_Screen from '../screens/SignUp';
import Profile_Screen from '../screens/Profile';
import ProfileTabNavigator from './ProfileTabNavigator';
import Schedule_Screen from '../screens/Schedule';
import CustomDrawer from '../components/CustomerDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
const AppStack = () => {
    return (
        // <Stack.Navigator screenOptions={{headerShown: false}}>
        //     <Stack.Screen name="Home" component={Hero_Section} />
            
        // </Stack.Navigator>
       <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} 
       useLegacyImplementation 
       initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#86B426',
            drawerActiveTintColor: '#fff',
            drawerLabelStyle: {
                marginLeft: -20,
                fontSize: 12,
            },
             }}>
        <Drawer.Screen name="Home" component={Hero_Section} 
        options={{drawerIcon: (color) => (
            <Ionicons name="home-outline" size={22} color={color} />
        )
        }}/>
        <Drawer.Screen name="Profile" component={ProfileTabNavigator} 
               options={{drawerIcon: (color) => (
                <Ionicons name="person-outline" size={22} color={color} />
            )
            }}/>
              <Drawer.Screen name="Bikes" component={Bike_Screen}
               options={{drawerIcon: (color) => (
                <Ionicons name="bicycle-outline" size={22} color={color} />
            )
            }}
            />
              <Drawer.Screen name="Rental" component={Rentals_Screen}
               options={{drawerIcon: (color) => (
                <Ionicons name="cart-outline" size={22} color={color} />
            )
            }}
            />
             <Drawer.Screen name="Schedule" component={Schedule_Screen}
               options={{drawerIcon: (color) => (
                <Ionicons name="calendar-outline" size={22} color={color} />
            )
            }}
            />
        
        <Drawer.Screen name="About Us" component={AboutUs_Screen}
               options={{drawerIcon: (color) => (
                <Ionicons name="information-circle-outline" size={22} color={color} />
            )
            }}
        />
        <Drawer.Screen name="Contact Us" component={ContactUs_Screen}
               options={{drawerIcon: (color) => (
                <Ionicons name="call-outline" size={22} color={color} />
            )
            }}
        />
               <Drawer.Screen name="Login" component={Login_Screen}
               options={{drawerIcon: (color) => (
                <Ionicons name="log-in-outline" size={22} color={color} />
            )
            }}
            />
                   <Drawer.Screen name="Sign Up" component={SignUp_Screen}
               options={{drawerIcon: (color) => (
                <Ionicons name="person-add-outline" size={22} color={color} />
            )
            }}
            />
        <Drawer.Screen name="Logout" component={Logout_Screen}
               options={{drawerIcon: (color) => (
                <Ionicons name="log-out-outline" size={22} color={color} />
            )
            }}
            />
      </Drawer.Navigator>
    );
};
export default AppStack;