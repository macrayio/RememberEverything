import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import CardStackStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator'

import Landing from './Landing'
import Home from './Home'

const Main = () => (
  <Router>
    <Stack
      key="root"
      hideNavBar
      transitionConfig={() => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal
      })}
    >
      <Scene key="landing" component={Landing} initial />
      <Scene key="home" component={Home} />
    </Stack>
  </Router>
)

export default Main
