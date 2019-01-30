import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Svg } from 'expo'
import styles from './styles'

export default class Home extends React.Component {
  state = {
    a: 'b'
  }

  render() {
    const { a } = this.state
    console.log(a)
    return (
      <View style={styles.container}>
        <ScrollView bounces showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.today}>Monday</Text>
            <Text style={styles.date}>30th Jan 2019</Text>
          </View>
          <View style={styles.todos}>
            <View style={styles.box}>
              <View style={styles.svg}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Svg.Path
                    d="M11.7988 3.82617L16.5488 8.57617L6.23242 18.8926L2.00195 19.375C1.70508 19.3997 1.45768 19.3132 1.25977 19.1152C1.06185 18.9173 0.97526 18.6699 1 18.373L1.48242 14.1426L11.7988 3.82617ZM19.4805 3.12109L17.2539 0.894531C16.9076 0.548177 16.487 0.375 15.9922 0.375C15.4974 0.375 15.0768 0.548177 14.7305 0.894531L12.6152 3.00977L17.3652 7.75977L19.4805 5.64453C19.8268 5.29818 20 4.8776 20 4.38281C20 3.88802 19.8268 3.46745 19.4805 3.12109Z"
                    fill="#565656"
                  />
                </Svg>
              </View>
              <TextInput style={styles.input} maxLength={50} multiline />
            </View>

            <View style={styles.box}>
              <View style={styles.svg}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Svg.Circle cx="10" cy="10" r="8" fill="white" stroke="#E00445" strokeWidth="4" />
                </Svg>
              </View>
              <Text style={styles.text}>Wrigth here shit</Text>
            </View>

            <View style={styles.box}>
              <View style={styles.svg}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Svg.Circle cx="10" cy="10" r="8" fill="white" stroke="#E00445" strokeWidth="4" />
                </Svg>
              </View>
              <Text style={styles.text}>
                bla bal Shawn macray is the name of our developer front end!
              </Text>
            </View>

            <View style={styles.box}>
              <View style={styles.svg}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Svg.Circle cx="10" cy="10" r="8" fill="white" stroke="#E00445" strokeWidth="4" />
                </Svg>
              </View>
              <Text style={styles.text}>
                bla bal Shawn macray is the name of our developer front end!
              </Text>
            </View>

            <View style={styles.box}>
              <TouchableOpacity style={styles.svg}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Svg.Circle cx="10" cy="10" r="8" fill="white" stroke="#E00445" strokeWidth="4" />
                </Svg>
              </TouchableOpacity>
              <Text style={styles.text}>
                bla bal Shawn macray is the name of our developer front end!
              </Text>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.fab}>
          <Svg
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Svg.Rect
              x="1"
              y="1"
              width="51"
              height="51"
              rx="25.5"
              fill="#E00445"
              fillOpacity="0.75"
              stroke="#E00445"
              strokeWidth="2"
            />
            <Svg.Path
              d="M35.5 23.75H28.75V17C28.75 16.5938 28.5938 16.25 28.2812 15.9688C28 15.6562 27.6562 15.5 27.25 15.5H25.75C25.3438 15.5 24.9844 15.6562 24.6719 15.9688C24.3906 16.25 24.25 16.5938 24.25 17V23.75H17.5C17.0938 23.75 16.7344 23.9062 16.4219 24.2188C16.1406 24.5 16 24.8438 16 25.25V26.75C16 27.1562 16.1406 27.5156 16.4219 27.8281C16.7344 28.1094 17.0938 28.25 17.5 28.25H24.25V35C24.25 35.4062 24.3906 35.75 24.6719 36.0312C24.9844 36.3438 25.3438 36.5 25.75 36.5H27.25C27.6562 36.5 28 36.3438 28.2812 36.0312C28.5938 35.75 28.75 35.4062 28.75 35V28.25H35.5C35.9062 28.25 36.25 28.1094 36.5312 27.8281C36.8438 27.5156 37 27.1562 37 26.75V25.25C37 24.8438 36.8438 24.5 36.5312 24.2188C36.25 23.9062 35.9062 23.75 35.5 23.75Z"
              fill="white"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    )
  }
}
