import React, { Component } from 'react'
import { FlatList, View, StatusBar, StyleSheet, AsyncStorage, ScrollView, Alert, TouchableOpacity, TouchableWithoutFeedback, TextInput } from 'react-native'
import YOUNG from './Young';
import ADULT from './Adult';
import Assist from './Assist'
import { Container, Header, Content, Card, CardItem, Text, Left, Body, Right, Button } from 'native-base';

export class ScreeningTool extends Component {
  static navigationOptions = {
    title: 'VISCO EA U2U',
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#29ab87',
  }

  state = {
    name: '',
    number: '',
    age: 0,
    yesTotest: ''
  }


  clearMale = () => {
    this.setState({
      female: ''
    })
    return null
  }



  clearFemale = () => {
    this.setState({
      male: ''
    })
    return null
  }

  render() {
    const { name, number, age, yesTotest, confirmPositivetest, noTotest, female, male } = this.state
    return (

      <View style={styles.container}>
        <ScrollView>
          <Card>
            <TextInput
              keyboardType='numeric'
              placeholder='Enter the age'
              onChangeText={_age => this.setState({ age: _age })}
              returnKeyType="done"
              returnKeyLabel="done"
              value={this.state.age}
              style={styles.input}
            />
          </Card>




          {
            age !== 0 && age < 16 ?
              <View>
                <YOUNG />
              </View>
              : age > 24 && age < 46 ?
                <View>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text>Select Client Gender</Text>
                      </Body>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <TouchableOpacity onPress={female => this.setState({ female: female }) || this.clearFemale()} value={female}>
                          <Text style={styles.text}>
                            Female
                           </Text>
                        </TouchableOpacity>
                      </Left>
                      <Body>
                        <TouchableOpacity onPress={male => this.setState({ male: male }) || this.clearMale()} value={male}>
                          <Text style={styles.text}>
                            male
                         </Text>
                        </TouchableOpacity>
                      </Body>
                    </CardItem>
                  </Card>

                  {
                    female &&
                    <View>
                      <ADULT />
                    </View>
                    ||
                    null
                  }


                  {
                    male &&
                    <View>
                      <Assist />
                    </View>
                    ||
                    null
                  }


                </View>
                : age > 15 && age ?
                  <View>
                    <ADULT />
                  </View>
                  : null
          }
        </ScrollView>
      </View>
    )
  }

}



const styles = StyleSheet.create({
  card: {
    backgroundColor: "#29ab87",
    marginTop: 60,
    height: 75,

  },
  text:{
    fontSize: 20,
    fontWeight: 'bold', 
},
  cardText: {
    color: 'white',
    justifyContent: 'center',
    fontSize: 20,
    textAlign: 'center'
  },
  country: {
    color: 'rgba(0, 0, 0, 5)'
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    paddingHorizontal: 8,
    height: 50
  },
  container: {
    backgroundColor: "#f9f9fa",
    // flex: 1,
    // justifyContent: 'center'
  },

})

export default ScreeningTool
