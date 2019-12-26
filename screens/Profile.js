import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text, Body, Button } from "native-base";
// import Meteor from 'react-native-meteor'
import { StyleSheet, ScrollView, View, Alert, TextInput, TouchableOpacity, } from 'react-native';


export default class Profile extends Component {
	static navigationOptions = {
		title: 'Profile',
		headerStyle: {
			backgroundColor: '#fff',
		},
		headerTintColor: '#29ab87',
	}
    logUserOut = () => {
        Meteor.logout()
        return this.props.navigation.navigate('Login')
    }
  render() {
    return (
      <Container>
        <Content padder>
          <Card transparent>
           <Text>Coming Soon</Text>
          </Card>
        </Content>
      </Container>
    );
  }
}