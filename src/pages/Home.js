import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Card from '../components/Card';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#333',
    flex: 1,
  },
});

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Card cardText={'Entender para ser enyendido'} />
    </View>
  );
};

export default Home;
