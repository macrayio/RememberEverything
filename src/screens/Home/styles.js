import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    fontFamily: 'Lato-Regular'
  },
  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: `${25}%`,
    backgroundColor: '#2A314C',
    paddingLeft: 15,
    paddingRight: 15
  },
  Navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: `${10}%`,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 5
  },
  todos: {
    height: `${70}%`,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,

  },
  hello: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Lato-Regular'
  },
  round: {
    backgroundColor: '#666D88',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  tasks: {
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  tood: {
    paddingTop: 28,
    paddingBottom: 28,
    borderWidth: 1,
    borderBottomColor: '#eee',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    color: '#5B5D61',
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'Lato-Regular'

  },
  dark: {
    color: '#5B5D61',
    fontFamily: 'Lato-Regular'
  },
  number: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Lato-Regular'
  },
  white: {
    color: '#fff',
    fontFamily: 'Lato-Regular'
  },
  active: {
    backgroundColor: '#FFAB66',
    fontFamily: 'Lato-Regular'
  },
  fab: {
    backgroundColor: '#B25E7C',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    position: 'absolute',
    bottom: 20,
    right: 40
  }
})

export default styles
