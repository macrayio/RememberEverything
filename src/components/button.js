import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '60%',
    height: '10%'
  }
})

const Button = () => (
  <TouchableOpacity style={styles.container} onPress={() => {}}>
    <Text style={styles.text}>Hello</Text>
  </TouchableOpacity>
)

export default Button
