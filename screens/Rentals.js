import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Rentals_Screen = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header />
        <Text>Rentals Screen</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    marginTop: 20,
  },
});
  export default Rentals_Screen;