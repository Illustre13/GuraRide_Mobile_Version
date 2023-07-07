import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ceil, round } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView
            {...props}
            contentContainerStyle={{}}
            >
            <ImageBackground
                source={require('../assets/Ebike-GURARIDE.jpeg')}
                style={styles.drawerHeader}
                >
                    <View style={styles.overlay}>
                    <Image source={require('../assets/_avatar.png')} style={{height: 60, width:60, borderRadius:40}} />
                    <View style={styles.drawerHeaderContent}>
                    <Text>Hello <Text style={{ fontWeight: 'bold' }}>Bertin</Text></Text>
                    <Text>Welcome to <Text style={{ fontWeight: 'bold' }}>GuraRide</Text></Text>
                    </View>
                    
                    </View>
            </ImageBackground>
            <View style={styles.drawerItemList}>
                <DrawerItemList 
                {...props} />
            </View>
            </DrawerContentScrollView>
            <View style={styles.drawerBackText}>
              <TouchableOpacity onPress={()=>{}} style={{paddingVertical: 15}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name='share-social-outline' size={22}/>
                    <Text style={{paddingLeft: 10, fontWeight: 'bold'}}>Share with Friends</Text>
                  </View>
              </TouchableOpacity>
              <Text style={{}}>© ITH 2023. All Rights Reserved.</Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    drawerHeader: {
    padding: 40,
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderContent: {
    paddingLeft: 15,
    paddingTop: 5,
    flex: 1,
    flexDirection: 'column',
  },
  drawerItemList: {
paddingTop: 10,
  },
  drawerBackText: {
    borderTopWidth:1,
    borderTopColor: '#ccc',
    padding:5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(250, 250,0, 0.5)', // Adjust the opacity and color as desired
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
export default CustomDrawer;