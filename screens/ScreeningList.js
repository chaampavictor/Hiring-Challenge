import React, { Component } from 'react'
import { FlatList, View, StatusBar, StyleSheet, AsyncStorage, ScrollView, TouchableWithoutFeedback, TouchableHighlight, } from 'react-native'
import uuidv1 from 'uuid/v1';
import { Container, Title, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Button, Fab } from "native-base";
import { withNavigation, } from 'react-navigation';
import moment from "moment";



export class ScreenList extends Component {
    static navigationOptions = {
        header: null
    }

    
    
    render() {
        return (
            <View style={styles.mainView}>
                <Header style={styles.header}>
                    <Left>
                        <TouchableWithoutFeedback button onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name='arrow-back' style={styles.headerIcon} />
                        </TouchableWithoutFeedback>
                    </Left>
                    <Body>
                        <Text style={styles.headerText}>VISCO EA U2U</Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <ScrollView>
                    <View>
                        {
                            this.props.screenProps.cities.sort((a, b) => a.date < b.date).map((city, index) => (
                                <View key={city.id} >
                                    <View style={styles.cityContainer}>
                                        <Card>
                                            <CardItem>
                                                <Left>
                                                    <Text style={styles.city}>{city.name}</Text>
                                                </Left>
                                                <Right>
                                                    <Text style={styles.mainTime}> {moment(city.date).format("llll") && moment(city.date).format("llll").toLocaleString()}</Text>
                                                    <Text style={styles.mainTime}> {moment(city.date).fromNow() && moment(city.date).fromNow().toLocaleString()}</Text>
                                                </Right>
                                            </CardItem>

                                            <CardItem>
                                                <Left>
                                                    <Text style={styles.country}><Text style={styles.span}>age: </Text>{city.age}</Text>
                                                    <Text style={styles.country}><Text style={styles.span}>gender: </Text>{city.gender}</Text>
                                                </Left>
                                                <Right>
                                                    <Text style={styles.country} ><Text style={styles.span}>status: </Text>{city.status}</Text>
                                                </Right>
                                            </CardItem>
                                        </Card>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>


                <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#29ab87' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('Tool')}>
            <Icon name="add" />
          </Fab>
        </View>
            </View>
        )
    }

}



const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,

    },
    city: {
        fontSize: 17,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    date: {
        color: '#696969',

        fontSize: 10,
        justifyContent: 'center',
        textAlign: 'center'

    },
    country: {
        fontSize: 15,
        // color: '#696969',
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center'
    },
    mainTime: {
        fontSize: 10,
    },
    span: {
        paddingRight: 20,
        // color: '#696969',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 11,
    },
    mainView: {
        flex: 1
    },
    header: {
        marginTop: 10,
        backgroundColor: '#fff',
        // height:30
    },
    header: {
        marginTop: 30,
        backgroundColor: '#fff',

    },
    headerIcon: {
        color: '#29ab87'
    },
    headerText: {
        color: '#29ab87',
        fontWeight: 'bold',
        fontSize: 20

    }

})

export default withNavigation(ScreenList)