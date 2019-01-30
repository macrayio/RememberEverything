import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D186FF',
    paddingBottom: 10,
    fontFamily: 'Lato-Regular'
  },
  today: {
    fontSize: 36,
    color: '#FFFFFF'
  },
  header: {
    padding: 25
  },
  date: {
    fontSize: 24,
    color: '#FFFFFF'
  },
  box: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  svg: {
    marginRight: 10
  },
  todos: {
    padding: 25,
    marginTop: 5
  },
  fab: {
    position: 'absolute',
    bottom: 40,
    right: 25,
    opacity: 0.75
  },
  text: {
    fontSize: 20,
    color: '#272727',
    width: '90%'
  },
  input: {
    width: '90%'
  }
})

export default styles
