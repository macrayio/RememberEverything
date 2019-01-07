import React from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import DialogInput from 'react-native-dialog-input'
import { Svg } from 'expo'
import styles from './styles'

export default class Home extends React.Component {
  state = {
    isDialogVisible: false,
    active: 'today',
    tasks: {
      today: [],
      thisWeek: [],
      thisMonth: []
    }
  }

  // componentDidMount = () => {
  //   AsyncStorage.getItem('tasks', (error, tasks) => {
  //     if (!error && !tasks) {
  //       this.setState({ tasks: JSON.parse(tasks) })
  //     }
  //   })
  // }

  // componentDidUpdate = () => {
  //   const { tasks } = this.state
  //   AsyncStorage.setItem('tasks', JSON.stringify(tasks))
  // }

  render() {
    const { isDialogVisible, active, tasks } = this.state
    const activeWord =
      active === 'today' ? 'Today' : active === 'thisWeek' ? 'This week' : 'This Month' // eslint-disable-line no-nested-ternary

    return (
      <View style={styles.container}>
        <View style={styles.headerNav}>
          <View>
            <Text style={styles.hello}>Hello, Diana!</Text>
            <Text style={styles.white}>Lets check your tasks!</Text>
          </View>
          <View style={styles.tasks}>
            <View style={styles.round}>
              <Text style={styles.number}>{tasks[active].length}</Text>
            </View>
            <Text style={styles.white}>
              Tasks for
              {activeWord}
            </Text>
          </View>
        </View>
        {/* navbar */}
        <View style={styles.Navbar}>
          <TouchableOpacity
            style={[styles.btn, active === 'today' ? styles.active : null]}
            onPress={() => this.setState({ active: 'today' })}
          >
            <Text style={active === 'today' ? styles.white : styles.dark}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, active === 'thisWeek' ? styles.active : null]}
            onPress={() => this.setState({ active: 'thisWeek' })}
          >
            <Text style={active === 'thisWeek' ? styles.white : styles.dark}>This Week</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, active === 'thisMonth' ? styles.active : null]}
            onPress={() => this.setState({ active: 'thisMonth' })}
          >
            <Text style={active === 'thisMonth' ? styles.white : styles.dark}>This Month</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.todos} showsVerticalScrollIndicator={false}>
          {tasks[active].map((task, i) => (
            <Text style={styles.tood} key={i}>
              {task}
            </Text>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => this.setState({ isDialogVisible: true })}
        >
          <Svg
            width="34"
            height="27"
            viewBox="0 0 34 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Svg.Line x1="18" y1="4.37114e-08" x2="18" y2="27" stroke="white" strokeWidth="2" />
            <Svg.Line
              x1="34"
              y1="14.5"
              x2="-1.10088e-07"
              y2="14.5"
              stroke="white"
              strokeWidth="2"
            />
          </Svg>
        </TouchableOpacity>
        <DialogInput
          isDialogVisible={isDialogVisible}
          title="Add Task"
          message={`Add task for ${activeWord}`}
          hintInput="you would like to"
          submitInput={inputText => {
            const myTasks = { ...tasks }
            myTasks[active].unshift(inputText)
            this.setState({ tasks: myTasks })
            this.setState({ isDialogVisible: false })
          }}
          closeDialog={() => {
            this.setState({ isDialogVisible: false })
          }}
        />
      </View>
    )
  }
}
