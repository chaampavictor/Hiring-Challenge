import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, AsyncStorage, FlatList, Dimensions } from 'react-native';
import { getResults, deleteResult, deleteStudent } from '../redux/actions/types';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Container, Header, Content, Tab, Tabs, CardItem, Body, Fab, Icon, Left, Right } from 'native-base';


export default function Profile(props) {
    const dispatch = useDispatch();
    const { navigation } = props;

    const [isFetching, setIsFetching] = useState(false);

    // Access Redux Store State
    const resultReducer = useSelector((state) => state.resultReducer);
    const { results } = resultReducer;

    let studentId = navigation.getParam('id', null)
    let name = navigation.getParam('name', null)
    let age = navigation.getParam('age', null)
    let gender = navigation.getParam('gender', null)
    let year = navigation.getParam('year', null)
    let studentnumber = navigation.getParam('studentnumber',null)


    const studentObject = [{
        id: studentId,
        name: name,
        year: year,
        studentnumber: studentnumber,
        gender: gender,
        age: age
    }]

    useEffect(() => getData(), [])

    const getData = () => {
        setIsFetching(true);

        AsyncStorage.getItem('results', (err, results) => {
            if (err) {
                alert(err.message)
            }
            else if (results !== null) {
                dispatch(getResults(JSON.parse(results)))
            }
        

            setIsFetching(false)
        })
    }

    const renderItem = ({ item, index }) => {
        if (item.student === studentId) {
            return (
                <Card>
                    <CardItem>
                        <Left>
                            <Text>{item.subject}</Text>
                        </Left>
                        <Left>
                            <Text>{item.mark}</Text>
                        </Left>
                        <Right>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ width: 50, }} >

                                    <TouchableOpacity onPress={() => { OnEditResult(item) }}>
                                        <Icon active name="paper" tyle="color:blue" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: 50 }}>

                                    <TouchableOpacity onPress={() => { onDeleteResult(item.id) }}>
                                        <Icon active name="trash" tyle="color:red" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Right>
                    </CardItem>
                </Card>


            )
        }
    }

    const onEditStudent = (studentObject) => {
        navigation.navigate('NewStudent', { student: studentObject[0] })
    }

    const onDeleteStudent = (id) => {
        AsyncStorage.getItem('students', (err, students) => {
            if (err) {
                alert(err.message)
            }
            else if (students !== null) {
                students = JSON.parse(students)

                // Find index of result passed
                const index = students.findIndex((obj) => obj.id === id)

                // Remove Result
                if (index !== -1) {
                    students.splice(index, 1)
                }

                navigation.navigate('Home')

                // Update local storage
                AsyncStorage.setItem('students', JSON.stringify(students), () => dispatch(deleteStudent(id)));
            }
        })
    }

    const OnEditResult = (item) => {
        navigation.navigate('NewResult', { result: item })
    }

    const onDeleteResult = (id) => {
        AsyncStorage.getItem('results', (err, results) => {
            if (err) {
                alert(err.message)
            }
            else if (results !== null) {
                results = JSON.parse(results)

                // Find index of result passed
                const index = results.findIndex((obj) => obj.id === id)

                // Remove Result
                if (index !== -1) {
                    results.splice(index, 1)
                }

                // Update local storage
                AsyncStorage.setItem('results', JSON.stringify(results), () => dispatch(deleteResult(id)));
            }
        })
    }

    if (isFetching) {
        return (
            <View>
                <Text>Loading</Text>

            </View>
        )
    } else {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <TouchableWithoutFeedback button onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name='arrow-back' style={styles.headerIcon} />
                        </TouchableWithoutFeedback>
                    </Left>
                    <Body>
                        <Text style={styles.headerText}>THEBE</Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Tabs>
                    <Tab heading="Results">


                    <Button rounded large  style={styles.price_Button} onPress={() => navigation.navigate('NewResult', { id: studentId })}>
                    <Icon name='add' />
            <Text style={styles.headerIcon}> Add Results</Text>
          </Button>
                        <FlatList
                            data={results}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => `results_${index}`}
                        />
                    </Tab>
                    <Tab heading="Profile">
                        <Card>
                            <CardItem>
                                <Text>Name:{name}</Text>
                            </CardItem>

                            <CardItem>
                                <Text>Student ID:{studentnumber}</Text>
                            </CardItem>

                            <CardItem>
                                <Text>Age:{age}</Text>
                            </CardItem>

                            <CardItem>
                                <Text>Gender:{gender}</Text>
                            </CardItem>

                            <CardItem>
                                <Text>Year Of Study:{year}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Button Primary  full onPress={() => { onEditStudent(studentObject) }}>
                                       
                                        <Text  style={styles.Button_text}>EDIT</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Button danger full onPress={() => { onDeleteStudent(studentId) }}>
                                       
                                        <Text  style={styles.Button_text}>DELETE</Text>
                                    </Button>
                                </Right>
                            </CardItem>
                        </Card>
                    </Tab>
                </Tabs>
            </Container>

        )
    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },

    resulTxt: {},

    cardStyle: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        justifyContent: 'space-between'
    },

    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    headers: {
        marginTop: 10,
        // backgroundColor: '#fff',
        // height:30
    },
    header: {
        marginTop: 30,
        // backgroundColor: '#fff',

    },

    headerIcon: {
        color: '#fff'
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20

    },
    price_Button: {
        width: '90%',
        marginTop: 15,
        marginLeft: '4%',
        // marginBottom: 30,
        // backgroundColor: '#29ab87',
        borderWidth: 1,
        // borderColor: '#29ab87',
        // borderRadius: 30,
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Button_text: {
        color: '#fff',
        fontSize: 20,
    },
});










