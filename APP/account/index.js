// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// var Account = React.createClass({
//   render:function () {
//       return(
//       <View style = {styles.container}>
//       <Text>账户页面</Text>
//       </View>
//       )
//   }
// })

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.nameT}!</Text>
    );
  }
}

class Account extends Component {
  render() {
    return (
      <View style={styles.tabContent}>
        <Greeting nameT='Rexxar' />
        <Greeting nameT='Jaina' />
        <Greeting nameT='Valeera' />
         <Greeting nameT='Rexxar' />
        <Greeting nameT='Jaina' />
        <Greeting nameT='Valeera' />
         <Greeting nameT='Rexxar' />
        <Greeting nameT='Jaina' />
        <Greeting nameT='Valeera' />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    backgroundColor: '#FF0000'
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

module.exports = Account;