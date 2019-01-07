import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

import styles from './styles'

const Landing = () => (
  <View style={styles.container}>
    <View style={styles.appNameContainer}>
      <View style={styles.appName}>
        <Text style={styles.nameSmall}>REMEMBER</Text>
        <Text style={styles.nameBig}>EVERYTHING</Text>
      </View>
    </View>
    <View style={styles.appBelowContainer}>
      <TouchableOpacity style={styles.button} onPress={googleSignin}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <Text style={styles.madeByText}>
        Made by
        <Text style={{ fontWeight: 'bold' }}> Macray.io </Text>
      </Text>
    </View>
  </View>
)

const googleSignin = () => {
  Actions.home()
}

export default Landing
