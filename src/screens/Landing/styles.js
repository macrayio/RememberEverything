import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  appNameContainer: {
    backgroundColor: '#2A314C',
    height: '40%'
  },
  appName: {
    marginTop: '30%',
    padding: 15
  },
  nameBig: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Montserrat-Regular'
  },
  nameSmall: {
    fontSize: 30,
    marginBottom: '-2%',
    color: 'white',
    fontFamily: 'Montserrat-Regular'
  },
  button: {
    marginTop: '40%',
    height: '12%',
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#2A314C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  buttonText: {
    color: 'white',
    fontSize: 23
  },
  madeByText: {
    marginTop: '35%',
    color: '#5B5D61',
    fontSize: 19
  },
  appBelowContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
