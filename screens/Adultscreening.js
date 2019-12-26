import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, Header, Content, Button, Text, Card, CardItem, Icon, Left, Body, Right } from 'native-base';

class Adultscreening extends Component {

  state = {
    status: false,
    fifthStatus: false,
    fourthStatus: false,
    thirdStatus: false,
    secondstatus: false,
    yesToOne: '',
    noToOne: '',
    secondQuestion: '',
    thirdQuestion: '',
    fourthQuestion: '',
    fifthQuestion: '',
    visibleModalId: null,
  }

  negativeClickded = () => {
    Alert.alert(
      'This proces cannot be undone',
      'Are You Sure',
      [
      
        { text: "Yes",  onPress: () => this.props.navigation.navigate('Home'), },
        {
          text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel',
        },

      ],

      { cancelable: false }

    );
  };

  render() {
    const { yesToOne, secondQuestion, status, secondstatus, thirdQuestion, thirdStatus, fourthQuestion, fourthStatus, fifthQuestion, fifthStatus } = this.state
    return (
      <View>
        <Text style={styles.textView}>Screening For HIV Testing</Text>
        <Card>
          <CardItem>
            <Body>
              <Text>Do you have any of the following symptoms?</Text>
              <Text note> *current cough *weight loss *chest pains *feaver *night sweat</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                <Text style={styles.text}>
                  Yes
            </Text>
              </TouchableOpacity>
            </Right>
            <Right>
              <TouchableOpacity onPress={() => this.setState({ yesToOne: 'no', status: true })} value={yesToOne}>
                <Text style={styles.text}>
                  No
            </Text>
              </TouchableOpacity>
            </Right>
          </CardItem>
        </Card>

        {
              status ?
                yesToOne === 'yes' ?
                  null
                  :
                  <View>
                    <Card>
          <CardItem>
            <Body>
              <Text>Do you have any of the following on your private parts?</Text>
              <Text note> *Sores *Blisters *Unusual discharge</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                <Text style={styles.text}>
                  Yes
            </Text>
              </TouchableOpacity>
            </Right>
            <Right>
              <TouchableOpacity onPress={() => this.setState({ secondQuestion: 'no', secondstatus: true })} value={secondQuestion}>
                <Text style={styles.text}>
                  No
            </Text>
              </TouchableOpacity>
            </Right>
          </CardItem>
        </Card>
                  </View>
                : null
            }




{
              secondstatus ?
                secondQuestion === 'yes' ?
                  null
                  :
                  <View>
                   <Card>
          <CardItem>
            <Body>
              <Text>In the last 6 months, have been exposed to HIV through a needle stick,an injection or a piercing?</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                <Text style={styles.text}>
                  Yes
            </Text>
              </TouchableOpacity>
            </Right>
            <Right>
              <TouchableOpacity onPress={() => this.setState({ thirdQuestion: 'no', thirdStatus: true })} value={thirdQuestion}>
                <Text style={styles.text}>
                  No
            </Text>
              </TouchableOpacity>
            </Right>
          </CardItem>
        </Card>
                  </View>
                : null
            }



{
              thirdStatus ?
                thirdQuestion === 'yes' ?
                  null
                  :
                  <View>
                    <Card>
          <CardItem>
            <Body>
              <Text >In the last 6 months, have you had sex with someone whose HIV status you didn't know or who was HIV-Positive?</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                <Text style={styles.text}>
                  Yes
            </Text>
              </TouchableOpacity>
            </Right>
            <Right>
              <TouchableOpacity onPress={() => this.setState({ fourthQuestion: 'no', fourthStatus: true })} value={fourthQuestion}>
                <Text style={styles.text}>
                  No
            </Text>
              </TouchableOpacity>
            </Right>
          </CardItem>
        </Card>
                  </View>
                : null
            }


{
              fourthStatus ?
                fourthQuestion === 'yes' ?
                  null
                  :
                  <View>
                   <Card>
          <CardItem>
            <Body>
              <Text>Are you pregnant or breastfeeding?</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                <Text style={styles.text}>
                  Yes
            </Text>
              </TouchableOpacity>
            </Right>
            <Right>
              <TouchableOpacity onPress={this.negativeClickded}>
                <Text style={styles.text}>
                  No
            </Text>
              </TouchableOpacity>
            </Right>
          </CardItem>
        </Card>
                  </View>
                : null
            }
      
       
      
       
      </View>
    )
  }
}

export default withNavigation(Adultscreening)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    height: 50,
    margin: 10
  },
  textView: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});


