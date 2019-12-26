import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View, AsyncStorage, TextInput, TouchableOpacity } from 'react-native';
import {useDispatch} from 'react-redux';
import { addStudent, updateStudent } from '../redux/actions/types';
import { Form, Item, Input, Button, Text as NBText, Card, CardItem, Icon, Header, Label, Picker } from 'native-base'

export default function AddStudent(props) {
    const dispatch = useDispatch();
    const {navigation} = props;

    let student = navigation.getParam('student', null);

    const [isSaving, setIsSaving] = useState(false)
    const [name, setName] = useState(student ? student.name : "")
    const [year, setYear] = useState(student ? student.year : "")
    const [gender, setGender] = useState(student ? student.gender : "")
    const [age, setAge] = useState(student ? student.age : "")
    const [studentnumber, setStudentnumber] = useState(student ? student.studentnumber: "")

    const SubmitStudent = () => {
        let edit = student !== null;
        let student_ = {};

        if (edit) {
            student_ = student;
            student_['name'] = name;
            student_['year'] = year;
            student_['gender'] = gender;
            student_['age'] = age;
            student_['studentnumber'] = studentnumber;
        } else {
            let id = new Date().getTime();
            student_ = {
                "id": id,
                "name": name,
                "year": year,
                "gender": gender,
                "age": age,
                "studentnumber": studentnumber
            };
        }

        AsyncStorage.getItem('students', (err, students) => {
            if (err) {
                alert(err.message)
            }
            else if (students !== null) {
                students = JSON.parse(students);

                if (!edit) {
                    // Add new students to the top
                    students.unshift(student_);
                } else {
                    // Find index of the passed student
                    const index = students.findIndex((obj) => obj.id === student_.id);

                    // If the student exists, replace it
                    if (index !== -1) {
                        students[index] = student_;
                    }
                    // navigation.goBack()
                }

                AsyncStorage.setItem('students', JSON.stringify(students), () => {
                    if (!edit) {
                        dispatch(addStudent(student_));
                    } else {
                        dispatch(updateStudent(student_));
                        navigation.navigate('Profile')
                    }

                    navigation.goBack()
                })
            }
        })
    }


     return (
        <View style={styles.container}>
        <Text style={styles.heading}>Add/Update Student Info</Text>
        <Card style={styles.card}>
            <Item fixedLabel>
                <Label>Full Name:</Label>
                <Input
                    required
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </Item>

            <Item fixedLabel>
                <Label>Student #:</Label>
                <Input
                    value={studentnumber}
                    onChangeText={(text) => setStudentnumber(text)}
                    />
            </Item>

            <Item fixedLabel>
                <Label>Age:</Label>
                <Input
                    value={age}
                    onChangeText={(text) => setAge(text)}
                    keyboardType={'numeric'}
                />
            </Item>

            <Item fixedLabel>
                <Label>Year Of Study:</Label>
                <Input
                    required
                    value={year}
                    onChangeText={(text) => setYear(text)}
                />
            </Item>


            <Item picker fixedLabel>
                <Label>Gender:</Label>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Select your SIM"
                    selectedValue={gender}
                    onChangeText={(text) => setGender(text)}
                >
                    <Picker.Item label="" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
            </Item>


            <Item fixedLabel>
                <Label>Gender:</Label>
                <Input
                    value={gender}
                    onChangeText={(text) => setGender(text)}
                />
            </Item>


           
        

            <CardItem>
                <TouchableOpacity onPress={SubmitStudent} activeOpacity={0.4} style={styles.price_Button}>
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
