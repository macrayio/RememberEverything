import React from 'react'
import { Platform, View } from 'react-native'
import { Constants } from 'expo'

import Main from './src/screens'

const App = () => (
  <View
    style={{
      // This is needed to avoid app crossing the status bar in some android phones
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    }}
  >
    <Main />
  </View>
)

export default App
