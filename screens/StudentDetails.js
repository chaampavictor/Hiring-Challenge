import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, SafeAreaView, AsyncStorage, FlatList, Dimensions } from 'react-native';
import { getResults, deleteResult, deleteStudent } from '../redux/actions/types';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content } from 'native-base';

export default function StudentDetails(props) {
    const dispatch = useDispatch();
    const {navigation} = props;

    const [isFetching, setIsFetching] = useState(false);

    // Access Redux Store State
    const resultReducer = useSelector((state) => state.resultReducer);
    const { results } = resultReducer;

    let studentId = navigation.getParam('id', null)
    let name = navigation.getParam('name', null)
    let age = navigation.getParam('age', null)
    let gender = navigation.getParam('gender', null)
    let grade = navigation.getParam('grade', null)

    const studentObject = [{
        id: studentId,
        name: name,
        grade: grade,
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
            // else if (results.student !== studentId) {
            //     return (
            //         <Card>
            //             <Card.Content>
            //                 <Title style={{textDecorationLine: 'underline'}}>Add this student's results</Title>
            //             </Card.Content>
            //             <Card.Actions>
            //             </Card.Actions>
            //         </Card>
            //     )
            // }

            setIsFetching(false)
        })
    }

    const renderItem = ({item, index}) => {
        if (item.student === studentId) {
            return (
                <Card>
                    <Card.Content>
                        <Title style={{textDecorationLine: 'underline'}}><Text style={{fontWeight: 'bold'}}>Subject: </Text>{item.subject}</Title>
                        <View style={{justifyContent: 'center'}}>
                            <Paragraph style={{fontSize: 20}}><Text style={{fontWeight: 'bold', justifyContent:'center'}}>Result: </Text>{item.mark}</Paragraph>
                        </View>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => {
                            onEditResult(item)
                        }}>Edit Result</Button>
                        <Button onPress={() => {
                            onDeleteResult(item.id)
                        }}>Delete Result</Button>
                    </Card.Actions>
                </Card>
            )
        }
    }

    const onEditStudent = (studentObject) => {
        navigation.navigate('AddStudent', {student: studentObject[0]})
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

    const onEditResult = (item) => {
        navigation.navigate('AddResult', {result: item})
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
                <Text>
                    Loading Data
                </Text>
            </View>
        )
    } else {
        return (
            <Container>
                 <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Segments</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Segment>
          <Button first>
            <Text>Puppies</Text>
          </Button>
          <Button>
            <Text>Kittens</Text>
          </Button>
          <Button last active>
            <Text>Cubs</Text>
          </Button>
        </Segment>
        <Content padder>
          <Text>Awesome segment</Text>
        </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: '#F5F5F5'
    },

    resulTxt: {},

    cardStyle: {
        flexDirection: 'row',
        padding: 10,
        margin: 10,
        justifyContent:'space-between'
    },

    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    floatingButton:{
        backgroundColor: '#228B22',
        borderColor: '#228B22',
        height: 55,
        width: 55,
        borderRadius: 55 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 60,
        right: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    }
});