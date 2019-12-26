import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Form, Item, Input, Button, Text as NBText, Card, CardItem, Icon, Header, Label, Picker } from 'native-base'
import uuidv4 from 'uuid/v4'
import moment from "moment";
import Meteor from "react-native-meteor";
// import { colors } from '../theme'
export class AddTaskScreen extends Component {

	state = {
		name: '',
		age: '',
		results: '',
		gender: '',
		date: '',
		currentDate: moment(new Date()).format("YYYY-MM-DD"),
 	 
	}

	onChangeText = (key, value) => {
		this.setState({
			[key]: value
		})
	}

	submit = () => {
		// if (this.state.name === '' || this.state.age === '' || this.state.results === '' || this.state.gender === '') return
		const city = {
			name: this.state.name,
			age: this.state.age,
			status: this.state.results,
			gender: this.state.gender,
			locations: [],
			id: uuidv4(),
			date: new Date()
		}

		this.props.screenProps.addCity(city)
		this.setState({
			name: '',
			age: '',
			results: '',
			gender: '',
			date: ''
		}, () => {
			this.props.navigation.navigate('List')
		})

	
	}


	render() {
		console.log('props', this.props);

		return (
			<View style={styles.container}>
				<Text style={styles.heading}>Confirm Client Details</Text>
				<Card style={styles.card}>
					<Item fixedLabel>
						<Label>Name:</Label>

						<Input
							required
							value={this.state.name}
							onChangeText={val => this.onChangeText('name', val)}
						/>
					</Item>

					<Item picker fixedLabel>
						<Label>Gender:</Label>
						<Picker
							mode="dropdown"
							iosIcon={<Icon name="arrow-down" />}
							style={{ width: undefined }}
							placeholder="Select your SIM"
							placeholderStyle={{ color: "#bfc6ea" }}
							placeholderIconColor="#007aff"
							selectedValue={this.state.gender}
							onValueChange={val => this.onChangeText('gender', val)}
						>
							<Picker.Item label="" value="" />
							<Picker.Item label="Male" value="male" />
							<Picker.Item label="Female" value="female" />
						</Picker>
					</Item>




					<Item fixedLabel>
						<Label>Age:</Label>

						<Input
							value={String(this.state.age)}
							onChangeText={val => this.onChangeText('age', val)}
							keyboardType={'numeric'}
						/>
					</Item>

				
					<Item picker fixedLabel>
						<Label>Results:</Label>
						<Picker
							mode="dropdown"
							iosIcon={<Icon name="arrow-down" />}
							style={{ width: undefined }}
							placeholderStyle={{ color: "#bfc6ea" }}
							placeholderIconColor="#007aff"
							selectedValue={this.state.results}
							onValueChange={val => this.onChangeText('results', val)}>
							<Picker.Item label="" value="" />
							<Picker.Item label="Reactive" value="reactive" />
							<Picker.Item label="Non-Reactive" value="non-reactive" />
							<Picker.Item label="Indeterminate" value="indeterminate" />
						</Picker>
					</Item>


					<CardItem>
						<TouchableOpacity onPress={this.submit} activeOpacity={0.4} style={styles.price_Button}>
							<Text style={styles.Button_text}>
								Submit
							</Text>
						</TouchableOpacity >
					</CardItem>
				</Card>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'white',
		margin: 10,
		paddingHorizontal: 8,
		height: 50,
		borderColor: '#f9f9fa',
		borderWidth: 1,
		marginBottom: 20
	},
	price_Button: {

		width: '90%',
		marginTop: 15,
		marginBottom: 10,
		backgroundColor: '#29ab87',
		borderRadius: 4,
		padding: 17,
		flexDirection: 'row',
		justifyContent: 'center',

	},
	Button_text: {
		color: 'white',
	},
	card: {
		borderRadius: 10,
		shadowOpacity: .3,
		shadowRadius: 3,
		elevation: 5,
	},

	container: {
		backgroundColor: "#f9f9fa",
		flex: 1,
		justifyContent: 'center'
	},
	heading: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
		color: '#29ab87'
	}
})


export default AddTaskScreen