import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  react
} from 'react-native';

var List = React.createClass({
	

  getInitialState:function () {
  	var ds = new ListView.DataSource({
  		rowHasChanged:(r1, r2) => r1 !== r2
  	})

  	return{
  		dataSource: ds.cloneWithRows([
					// {
					// "_id":"650000198004296652","thumb":"http://dummyimage.com/1200x600/d6105f)","video":"http://v2.mukewang.com/6ae55890-3157-4b72-b2ac-3abb0bc6969f/L.mp4?auth_key=1478593262-0-0-2ddaa5876432f784a04f87cff2f19791"
					// }
					// ,
					// {
					// "_id":"45000019981208118X","thumb":"http://dummyimage.com/1200x600/a4803e)","video":"http://v2.mukewang.com/6ae55890-3157-4b72-b2ac-3abb0bc6969f/L.mp4?auth_key=1478593262-0-0-2ddaa5876432f784a04f87cff2f19791"
					// }
    ]),
  	}
  },


   renderRow:function (row) {
   	// return{
   	// 	<TouchableHighlight>
	   // 		<View style = {styles.item}>
				// <Text style = {styles.title}>
				// 	{row._id}
				// </Text>
				// <Image
				// source = {{uri: row.thumb}}
				// style = {styles.thumb}
				// >
				// <Icon
				// name = ''
				// size = {28}
				// style = {styles.play} 
				// />
				// </Image>
				// <View style>
				// >
	   // 		</View>
   	// 	</TouchableHighlight>
   	// }
   },

  render:function () {
      return(
		<View style = {styles.container}>
			<View style = {styles.header}>
				<Text style = {styles.headerTitle}>列表页面</Text>
			</View>
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
				enableEmptySections = {true}
			/>

		</View>
      )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header:{
  	paddingTop: 25,
  	paddingBottom: 12,
  	backgroundColor: '#ee735c'
  },
  headerTitle:{
  	color: '#fff',
  	fontSize: 16,
  	textAlign: 'center',
  	fontWeight: '600'
  }
});

module.exports = List;