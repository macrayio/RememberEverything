import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Page!</Text>
      </View>
    )
  }
}
