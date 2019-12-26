
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, SafeAreaView, View, Text, ActivityIndicator, TouchableOpacity, Dimensions, TouchableHighlight, AsyncStorage,ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Container, Header, Content, Tab, Tabs, CardItem, Body, Fab, Icon, Left, Right } from 'native-base';

import { getStudents, deleteStudent } from '../redux/actions/types';
import ListItem from '../components/ListItem';

export default function Home(props) {
    
    const dispatch = useDispatch();
    const {navigation} = props;

    const [isFetching, setIsFetching] = useState(false);

    // Access Redux Store State
    const studentReducer = useSelector((state) => state.studentReducer);
    const { students } = studentReducer;

    useEffect(() => getData(), [])

    const getData = () => {
        setIsFetching(true);

        AsyncStorage.getItem('students', (err, students) => {
            if (err) {
                alert(err.message)
            }
            else if (students !== null) {
                dispatch(getStudents(JSON.parse(students)))
            }

            setIsFetching(false);
        })
    }

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile', {
                    id: item.id,
                    name: item.name,
                    age: item.age,
                    gender: item.gender,
                    year: item.year,
                    studentnumber: item.studentnumber
                })}
            >
                <ListItem item={item} index={index} navigation={navigation} onDelete={onDelete} onEdit={onEdit} />
            </TouchableOpacity>
        )
    }

    const onEdit = (item) => {
        navigation.navigate('AddStudent', {student: item, title: 'Edit Student'})
        alert(JSON.stringify(item))
    }

    const onDelete = (id) => {
        AsyncStorage.getItem('students', (err, students) => {
            if (err) {
                alert(err.message)
            }
            else if (students !== null) {
                students = JSON.parse(students);

                // Find index of student passed
                const index = students.findIndex((obj) => obj.id === id)

                // Remove Student
                if (index !== -1) {
                    students.splice(index, 1)
                }

                // Update local storage
                AsyncStorage.setItem('students', JSON.stringify(students), () => dispatch(deleteStudent(id)));
            }
        })
    }

    if (isFetching) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true} />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
<Header style={styles.header}>
                    <Body>
                        <Text style={styles.headerText}>THEBE </Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>


<ScrollView>
                <FlatList
                    data={students}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `students_${index}`}
                />
</ScrollView>

<View style={{ flex: 1 }}>
                    <Fab
                        position="bottomRight"
                        onPress={() => navigation.navigate('AddStudent', {title: "New Student"})}>
                        <Icon name="add" />
                    </Fab>
                </View>
              
            </View>
        )
    }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#F5F5F5'
    },

  
    headers: {
        marginTop: 10,
       
    },
    header: {
        marginTop: 30,

    },

    headerIcon: {
        color: '#fff'
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20

    },

});