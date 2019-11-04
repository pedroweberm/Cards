import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
    marginVertical: 10,
    height: 300,
    width: 300,
    borderRadius: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: '#333',
    fontFamily: 'Papyrus',
    fontWeight: 'bold',
  },
});

const Card = ({cardText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{cardText}</Text>
    </View>
  );
};

export default Card;
