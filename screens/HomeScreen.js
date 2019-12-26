
import React, { Component } from 'react'
import { FlatList, View, StatusBar, StyleSheet, AsyncStorage, ScrollView, Platform, Text, TouchableWithoutFeedback, TouchableOpacity, } from 'react-native'
import uuidv1 from 'uuid/v1'
import _values from 'lodash.values';
import { Image } from 'react-native';
import Swiper from "react-native-web-swiper";
import { Container, Content, Card, CardItem, Body, Button, Fab } from "native-base";

export class HomeScreen extends Component {
	static navigationOptions = {
		title: 'VISCO EA U2U',
		headerStyle: {
			backgroundColor: '#fff',
		},
		headerTintColor: '#29ab87',
	}
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Tool')} activeOpacity={0.4} style={styles.price_Button}>
					<Text style={styles.Button_text}>
						Screen For HIV
                             </Text>
				</TouchableOpacity >
				<View style={styles.slideContainer}>
					<TouchableWithoutFeedback button onPress={() => this.props.navigation.navigate('List')}>
						<View style={styles.priceCard_Container} activeOpacity={0.4}>
							<Card style={styles.card}>
								<Text style={styles.price}>Client Summary</Text>
							</Card>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={[styles.slideContainer, styles.slide2]}>
					<TouchableWithoutFeedback button onPress={() => this.props.navigation.navigate('Treatment')}>
						<View style={styles.priceCard_Container} activeOpacity={0.4}>
							<Card style={styles.cards}>
								<Text style={styles.price}>Treatment</Text>
							</Card>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={[styles.slideContainer, styles.slide3]}>
					<TouchableWithoutFeedback button onPress={() => this.props.navigation.navigate('Profile')}>
						<View style={styles.priceCard_Container} activeOpacity={0.4}>
							<Card style={styles.cards}>
								<Text style={styles.price}>User Profile</Text>
							</Card>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={[styles.slideContainer, styles.slide3]}>
					<TouchableWithoutFeedback button>
						<View style={styles.priceCard_Container} activeOpacity={0.4}>
							<Card style={styles.cards}>
								<Text style={styles.price}>Support/Feedback</Text>
							</Card>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View>
					<Text style={styles.Button_Version}>beta version 1.0.5</Text>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	card: {
		marginTop: 50,
		height: 90,
		alignContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		borderRadius: 12,
		// borderWidth: 1.5,
		padding: 35,
		backgroundColor: '#fafaff',
		marginBottom: 10,
	},
	cards: {
		height: 90,
		alignContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		borderRadius: 12,
		// borderWidth: 1.5,
		padding: 35,
		backgroundColor: '#fafaff',
		// marginBottom: 10,
	},

	price_Button: {
		width: '90%',
		marginTop: 15,
		marginLeft: '4%',
		// marginBottom: 30,
		backgroundColor: '#29ab87',
		borderWidth: 1,
		borderColor: '#29ab87',
		borderRadius: 30,
		padding: 17,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	Button_text: {
		color: '#fff',
		fontSize: 20,
	},
	Text: {
		color: '#29ab87',

	},
	Button_Version: {
		marginTop: 100,
		color: '#7d86b0',
		alignContent: 'center',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',

	},

	Text: {
		color: '#29ab87',
	},

	price: {
		fontSize: 20,
		// fontWeight: 'bold',
		color: '#29ab87'
	},
})


export default HomeScreen