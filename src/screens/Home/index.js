import React from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Svg } from 'expo'
import styles from './styles'

export default class Home extends React.Component {
  state = {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerNav}>
          <View>
            <Text style={styles.hello}>Hello, Diana!</Text>
            <Text style={styles.white}>Lets check your tasks!</Text>
          </View>
          <View style={styles.tasks}>
            <View style={styles.round}>
              <Text style={styles.number}>4</Text>
            </View>
            <Text style={styles.white}>Tasks for Today</Text>
          </View>
        </View>
        {/* navbar */}
        <View style={styles.Navbar}>
          <TouchableOpacity style={[styles.btn, styles.active]}>
            <Text style={styles.white}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.dark}>This Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.dark}>This Month</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.todos} showsVerticalScrollIndicator={false}>
          <Text style={styles.tood}>Meet with Google Apis, with kato and kim....</Text>
          <Text style={styles.tood}>Meet with Google Apis</Text>
          <Text style={styles.tood}>Meet with Google Apis</Text>
          <Text style={styles.tood}>Meet with Google Apis</Text>
          <Text style={styles.tood}>Meet with Google Apis</Text>
          <Text style={styles.tood}>Meet with Google Apis</Text>
          <Text style={styles.tood}>Meet with Google Apis, with kato and kim....</Text>
          <Text style={styles.tood}>Meet with Google Apis, with kato and kim....</Text>
          <Text style={styles.tood}>Meet with Google Apis, with kato and kim....</Text>
        </ScrollView>
        <TouchableOpacity style={styles.fab}>
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
      </View>
    )
  }
}
