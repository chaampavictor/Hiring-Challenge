import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, TextInput, TouchableOpacity, } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Youngscreening from './Youngscreening';
import { withNavigation } from 'react-navigation';

// import * as Font from 'expo-font'
class YOUNG extends Component {


  state = {

    status: false,
    // statas: true,
    yesTotest: '',
    noToOne: ''

  }


  ShowHideTextComponentView = () => {

    if (this.state.status == true) {
      this.setState({ status: false })
    }
    else {
      this.setState({ status: true })
    }
  }


  state = {
    yesTotest: ''
  }



  negativeClickded = () => {
    Alert.alert(
      "",
      "Do not test unless for HIV unless new exposure RISK",
      [
        { text: "No Exposure",  onPress: () => this.props.navigation.navigate('Home'), },
        { text: "Exposure",  onPress: () => this.props.navigation.navigate('Proceed'), },

      ],

      { cancelable: false }

    );
  };


  NoARTclicked = () => {
    Alert.alert(
      "",
      "Link Child to ART",
      [
        { text: "OK", onPress: () => this.props.navigation.navigate('Home'), }
      ],

      { cancelable: false }

    );
  };

  YesARTclicked = () => {
    Alert.alert(
      "",
      "Offer adherence counselling to caregiver, and confirm childs ART enrollment number.",
      [
        { text: "OK", onPress: () => this.props.navigation.navigate('Home'),}
      ],

      { cancelable: false }

    );
  };



  render() {
    const { name, number, age, status, yesTotest, confirmPositivetest, noTotest } = this.state
console.log(this.props.navigation);


    return (
      <View>
        <View>



          <Card>
            <CardItem>
              <Body>
                <Text>Has this child ever been Tested before?</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Left>



                <TouchableOpacity onPress={() => this.setState({ yesTotest: 'no', status: true })} value={yesTotest}>
                  <Text style={styles.text}>
                    No
            </Text>
                </TouchableOpacity>
              </Left>

              <Right>
                <TouchableOpacity onPress={() => this.setState({ yesTotest: 'yes', status: true })} value={yesTotest}>
                  <Text style={styles.text}>
                    Yes
            </Text>
                </TouchableOpacity>

              </Right>
            </CardItem>
          </Card>
        </View>


        {
          status ?
            yesTotest === 'yes' ?
              // the condition goes here
              yesTotest &&
              <View>


                <Card>
                  <CardItem>
                    <Body>
                      <Text>Where the Results confirmed Positive or Negative?</Text>
                    </Body>
                  </CardItem>

                  <CardItem>
                    <Left>


                      <TouchableOpacity onPress={this.negativeClickded} >
                        <Text style={styles.text}>
                       Negative
            </Text>
                      </TouchableOpacity>
                    </Left>

                    <Right >






                      <TouchableOpacity onPress={confirmPositivetest => this.setState({ confirmPositivetest: confirmPositivetest })} value={confirmPositivetest}>
                        <Text style={styles.text}>
                       Positive
            </Text>
                      </TouchableOpacity >

                    </Right>
                  </CardItem>
                </Card>

              </View>
              :

              <View>
                <Youngscreening />
              </View>
            :
            null

        }


        {
          // the condition goes here
          confirmPositivetest &&
          <View>
            <Card>
              <CardItem>
                <Body>
                  <Text>Is the child currently on ART?</Text>
                </Body>
              </CardItem>

              <CardItem>
                <Left>
                  <TouchableOpacity onPress={this.NoARTclicked}>
                    <Text style={styles.text}>
                      No
            </Text>
                  </TouchableOpacity>
                  {/* <Button success  >
                    <Text>No</Text>
                  </Button> */}
                </Left>

                <Right>
                  <TouchableOpacity onPress={this.YesARTclicked}>
                    <Text style={styles.text}>
                      Yes
            </Text>
                  </TouchableOpacity>
                  {/* <Button danger >
                    <Text>Yes</Text>
                  </Button> */}
                </Right>
              </CardItem>
            </Card>
          </View>
          ||

          <View></View>
        }

      </View>
    )
  }
}
export default withNavigation(YOUNG)// Don’t forget to use export default!


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
    fontSize: 20
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold', 
},
});

