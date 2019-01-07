import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { Font } from 'expo'
import Landing from './Landing'
import Home from './Home'

class Main extends React.Component{
  state = {fontload: false}
  async componentDidMount() {
    await Font.loadAsync({
      'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
      'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });
    this.setState({fontload: true})
  }
  render(){
    if(this.state.fontload){
      return(
        <Router>
        <Stack key="root" hideNavBar>
          <Scene key="landing" component={Landing}  />
          <Scene key="home" component={Home} initial/>
        </Stack>
      </Router>
      )
    }else{
      return null
    }
    
  }
}

export default Main
