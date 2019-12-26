import React, { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableHighlight,TouchableOpacity, View, AsyncStorage } from 'react-native';
import {useDispatch} from 'react-redux';
import { addResult, updateResult } from '../redux/actions/types';
import { Form, Item, Input, Button, Text as NBText, Card, CardItem, Icon, Header, Label, Picker } from 'native-base'


export default function AddResult(props) {
    const dispatch = useDispatch();
    const {navigation} = props;

    let result = navigation.getParam('result', null);
    let student = navigation.getParam('id', null);

    const [isSaving, setIsSaving] = useState(false)
    const [course, setCourse] = useState(result ? result.course : "")
    const [marks, setMark] = useState(result ? result.marks : "")

    const saveResults = () => {
        let edit = result !== null;
        let result_ = {};

        if (edit) {
            result_ = result;
            result_['course'] = course;
            result_['marks'] = marks;
        } else {
            let id = new Date().getTime();
            result_ = {
                "id": id,
                "student": student,
                "course": course,
                "marks": marks,
            };
        }

        AsyncStorage.getItem('results', (err, results) => {
            if (err) {
                alert(err.message)
            }
            else if (results !== null) {
                results = JSON.parse(results);

                if (!edit) {
                    // Add new results to the top
                    results.unshift(result_);
                } else {
                    // Find index of the passed result
                    const index = results.findIndex((obj) => obj.id === result_.id);

                    // If the result exists, replace it
                    if (index !== -1) {
                        results[index] = result_;
                    }
                }

                AsyncStorage.setItem('results', JSON.stringify(results), () => {
                    if (!edit) {
                        dispatch(addResult(result_));
                    } else {
                        dispatch(updateResult(result_));
                    }

                    navigation.goBack()
                })
            }
        })
    }

  

    return (

        <View style={styles.container}>
        <Text style={styles.heading}>Add Student Results</Text>
        <Card style={styles.card}>
            <Item fixedLabel>
                <Label>Course:</Label>
                <Input
                    required
                    value={course}
                    onChangeText={(text) => setCourse(text)}
                />
            </Item>

            <Item fixedLabel>
                <Label>Marks:</Label>
                <Input
                    value={marks}
                    onChangeText={(text) => setMark(text)}
                    />
            </Item>                  
            <CardItem>
                <TouchableOpacity onPress={saveResults} activeOpacity={0.4} style={styles.price_Button}>
                    <Text style={styles.Button_text}>
                        Submit
                    </Text>
                </TouchableOpacity >
            </CardItem>
        </Card>
    </View>
    )
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
		backgroundColor: '#6500ff',
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
		color: '#6500ff'
	}
});
