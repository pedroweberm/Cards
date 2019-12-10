import React from 'react'

import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { withNavigation } from 'react-navigation'

import progressBar from '../assets/progressBar.png'
import avatar from '../assets/avatar.png'
import { normalize } from '../utils/normalize'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  upperContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButtons: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
  },
  profileButtonContainer: {
    flex: 3,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  button: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    minWidth: normalize(125),
    minHeight: normalize(75),
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
  },
  profileButton: {
    borderRadius: 8,
    backgroundColor: '#9e9e9e',
    minWidth: normalize(200),
    minHeight: normalize(175),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  progressBar: {
    width: normalize(400),
    height: normalize(100),
    marginBottom: normalize(-40),
    marginLeft: normalize(-20),
  },
  profileIcon: {
    height: normalize(60),
    width: normalize(60),
    marginRight: normalize(15),
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginLeft: normalize(15),
  },
})

const BottomArea = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.upperContainer}>
        <View style={styles.leftButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DeckScreen')}>
            <Text style={styles.buttonText}>Decks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('GoalsScreen')}>
            <Text style={styles.buttonText}>Objetivos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileButtonContainer}>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('ProfileScreen')}>
            <View style={styles.profileInfo}>
              <Image source={avatar} style={styles.profileIcon} />
              <Text style={styles.buttonText}>Perfil</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <Image source={progressBar} style={styles.progressBar} />
      </View>
    </View>
  )
}

export default withNavigation(BottomArea)
