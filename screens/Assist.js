import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, TextInput, TouchableOpacity, } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { withNavigation } from 'react-navigation';

// import * as Font from 'expo-font'
class Assist extends Component {





    render() {



        return (
            <View>
                <View>



                    <Card style={styles.card}>
                        <CardItem>
                            <Body>
                                <Text style={styles.text}>Offer Assisted Self Test Kit</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
   
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')} activeOpacity={0.4} style={styles.price_Button}>
                                <Text style={styles.Button_text}>
                                    Proceed
                             </Text>
                            </TouchableOpacity >
                        </CardItem>
                    </Card>
                </View>




            </View>
        )
    }
}
export default withNavigation(Assist)// Don’t forget to use export default!


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20
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
      Button_text:{
          color: 'white',
      },
      text:{
        fontSize: 30,
        fontWeight: 'bold', 
    },
    card:{
        marginTop:90
    }
});

