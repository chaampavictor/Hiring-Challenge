import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, Button } from "native-base";
// import Meteor from 'react-native-meteor'
import {WebView,StyleSheet, ScrollView, View, Alert, TextInput, TouchableOpacity, } from 'react-native';



console.disableYellowBox = true;

export default class Treatment extends Component {
	static navigationOptions = {
		title: 'Treatment',
		headerStyle: {
			backgroundColor: '#fff',
		},
		headerTintColor: '#29ab87',
	}
  
  render() {
    return (
        <View style={styles.container} >
        <WebView
          style={styles.WebViewStyle}
          source={{ uri: 'https://github.com/chaampavictor/screening_tool' }}
          javaScriptEnabled={true}
          domStorageEnabled={true} />
      </View>
    );
  }
}
const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
      },
    });