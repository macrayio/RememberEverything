import React from 'react'
import { Platform, Text, View } from 'react-native'
import { Constants } from 'expo'

const App = () => {
  return (
    <View
      style={{
        // This is needed to avoid app crossing the status bar in some android phones
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
      }}
    >
      <Text>Dem fuck start</Text>
    </View>
  )
}

export default App
