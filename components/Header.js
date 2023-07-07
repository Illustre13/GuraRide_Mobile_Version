import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation} from '@react-navigation/native';
//import { useIsDrawerOpen} from '@react-navigation/drawer';

const Header = () => {
  const navigation = useNavigation();
  const [drawerOpen, setDrawerOpen] = useState(false);
//   const isDrawerOpen = useIsDrawerOpen();

//   useEffect(() => {
//     setDrawerOpen(isDrawerOpen);
//   }, [isDrawerOpen]);

  const toggleDrawer = () => {
    if (drawerOpen) {
      navigation.closeDrawer();
    } else {
      navigation.openDrawer();
    }
    setDrawerOpen(!drawerOpen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo-black-GURARIDE.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity onPress={toggleDrawer} style={styles.menuIcon}>
          <Image
            source={drawerOpen ? require('../assets/menu_cross.png') : require('../assets/bars-solid.png')}
            style={styles.menuIconImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logo: {
    width: '50%',
    height: '100%',
  },
  menuIcon: {
    width: '50%',
    height: '80%',
    marginLeft: 60,
  },
  menuIconImage: {
    width: '100%',
    height: '100%',
  },
});

export default Header;
