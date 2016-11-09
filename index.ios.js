/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  View
} from 'react-native';


var List    = require('./APP/creation/index')

var Edit    = require('./APP/edit/index')

var Account = require('./APP/account/index')
  

var TestReactNative = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarExample',

  getInitialState: function() {
    return {
     selectedTab: 'list',
     notifCount: 0,
     presses: 0,
     };
  },

 // _renderContent: function(color: string, pageText: string, num?: number) {
 //    return (
 //      <View style={[styles.tabContent, {backgroundColor: color}]}>
 //        <Text style={styles.tabText}>{pageText}</Text>
 //        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
 //      </View>
 //    );
 //  },

render: function() {
    return (
      <TabBarIOS

              unselectedTintColor ="#999999"
              tintColor           ="#3EA1DF"
              barTintColor        ="white">

        <TabBarIOS.Item
              icon         ={require('./APP/Resources/tabbar/tabbar_home_normal.png')}
              selectedIcon ={require('./APP/Resources/tabbar/tabbar_home_selected.png')}
              name         ="list"
              
              title        ="列表"
              selected     ={this.state.selectedTab === 'list'}
              onPress      ={() => {
              this.setState({
              selectedTab: 'list',
              });
              }}>
              <List />
        </TabBarIOS.Item>

        <TabBarIOS.Item
              icon         ={require('./APP/Resources/tabbar/tabbar1.png')}
              selectedIcon ={require('./APP/Resources/tabbar/tabbar2.png')}
              name         ="edit"
              title        ="制作视频"
              selected     ={this.state.selectedTab === 'edit'}
              onPress      ={() => {
              this.setState({
              selectedTab: 'edit',
              notifCount: this.state.notifCount + 1,
              });
              }}>
              <Edit />
        </TabBarIOS.Item>

        <TabBarIOS.Item
             icon         ={require('./APP/Resources/tabbar/tabbar_mine_normal.png')}
             selectedIcon ={require('./APP/Resources/tabbar/tabbar_mine_seleted.png')}
             name         ="account"
             title        ="账户"
             selected     ={this.state.selectedTab === 'account'}
             onPress      ={() => {
             this.setState({
             selectedTab: 'account',
             });
             }}>
             <Account />
         </TabBarIOS.Item>
         
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
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
});

AppRegistry.registerComponent('TestReactNative', () => TestReactNative);
