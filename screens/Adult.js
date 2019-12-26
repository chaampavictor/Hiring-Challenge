import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Alert, TextInput,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Left, Body, Right, Button } from 'native-base';
import Adultscreening from './Adultscreening';
import { withNavigation } from 'react-navigation';

// import * as Font from 'expo-font'
class Adult extends Component {

  constructor() {

    super();

    this.state = {

      status: true,

    }
  }

  state = {
    yestopositive: ''
  }

  clearNoPositive = () => {
    this.setState({
      notopositive: '',
    })
  }
 
  clearYesPositive = () => {
    this.setState({
      yestopositive: '',
    })
  }

  negativeClickded = () => {
    Alert.alert(
      "",
      "Do not test unless for HIV unless new exposure RISK",
      [
        { text: "Exposure",  onPress: () => this.props.navigation.navigate('Proceed') },
        { text: "No Exposure",  onPress: () => this.props.navigation.navigate('Home') }

      ],

      { cancelable: false }

    );
  };

  NoneClickded = () => {
    Alert.alert(
      "",
      "Do not test unless for HIV",
      [
        { text: "OK", onPress: () => this.props.navigation.navigate('Home'), }
        
      ],

      { cancelable: false }

    );
  };


  noARTClicked = () => {
    Alert.alert(
      "",
      "Re-Engage client in ART",
      [
        { text: "OK", onPress: () => this.props.navigation.navigate('Home'), }
      ],

      { cancelable: false }

    );
  };

  ProceedToAdd = () => {
    Alert.alert(
      "",
      "Instruct client to come back for a test after 3 months",
      [
        
        { text: "OK", onPress: () => this.props.navigation.navigate('Home'), }
      ],

      { cancelable: false }

    );
  };


  ProceedToHome = () => {
    Alert.alert(
      "",
      "Do Not Proceed With Test",
      [
        { text: "OK", onPress: () => this.props.navigation.navigate('Home'), }
      ],

      { cancelable: false }

    );
  };

  yesARTclicked = () => {
    Alert.alert(
      "",
      "Offer Adherence Counselling",
      [
        { text: "OK", onPress: () => this.props.navigation.navigate('Home'), }
      ],

      { cancelable: false }

    );
  };

  noTestclicked = () => {
    Alert.alert(
      "",
      "Test Client for HIV",
      [
        { text: "OK",  onPress: () => this.props.navigation.navigate(' Proceed') }
      ],

      { cancelable: false }

    );
  };


  ShowHideTextComponentView = () => {

    if (this.state.status == true) {
      this.setState({ status: false })
    }
    else {
      this.setState({ status: true })
    }
  }

  noToOne = () => {

    if (this.state.altstatus == true) {
      this.setState({ altstatus: false })
    }
    else {
      this.setState({ altstatus: true })
    }
  }




onPressFab = () => {
    this.props.navigation.navigate('Proceed')
}

onPressHome = () => {
  this.props.navigation.navigate('Home')
}

  render() {
    const { name, number, ProceedToScreen, age, yesART, yesTestClicked, yestopositive, confirmPositivetest, notopositive } = this.state


    return (
      <View>
      
        <View>
          <Card>
            <CardItem>
              <Text>At any time in your life, have you ever been told by a healthcare provider that you are hiv-positive?</Text>
            </CardItem>
            <CardItem>
              <Left>
              <TouchableOpacity onPress={yestopositive => this.setState({ yestopositive: yestopositive }) || this.clearNoPositive()} value={yestopositive}>
                  <Text style={styles.text}>
                    Yes
            </Text>
                </TouchableOpacity>
              </Left>
              <Right >
              <TouchableOpacity onPress={notopositive => this.setState({ notopositive: notopositive }) || this.clearYesPositive()} value={notopositive}>
                  <Text style={styles.text}>
                    No
            </Text>
                </TouchableOpacity>
              </Right>
            </CardItem>
          </Card>
        </View>


        {
          yestopositive &&
          <View>
            <Card>
              <CardItem>
                <Text>Are you currently receiving ART?</Text>
              </CardItem>
              <CardItem>
                <Left>
                <TouchableOpacity onPress={this.yesARTclicked}>
                  <Text style={styles.text}>
                    Yes
            </Text>
                </TouchableOpacity>
                </Left>
                <Right >
                <TouchableOpacity  onPress={this.noARTClicked}>
                  <Text style={styles.text}>
                    No
            </Text>
                </TouchableOpacity>
                 
                </Right>
              </CardItem>
            </Card>




          </View>
          ||

          <View></View>
        }


        {
       
          notopositive &&
          <View>
            <Card>
              <CardItem>
                <Text>In the last 3 months, have you been tested for HIV?</Text>
              </CardItem>
              <CardItem>
                <Left>
                <TouchableOpacity  onPress={ProceedToScreen => this.setState({ ProceedToScreen: ProceedToScreen })} value={ProceedToScreen}>
                  <Text style={styles.text}>
                    No
            </Text>
                </TouchableOpacity>
                </Left>
                <Right >
                <TouchableOpacity  onPress={this.ProceedToAdd}>
                  <Text style={styles.text}>
                    Yes
            </Text>
                </TouchableOpacity>
                
                </Right>
              </CardItem>
            </Card>
          </View>
          ||

          <View></View>
        }





{/* 
        {
          yesTestClicked &&
          <View>

            <Card>
              <CardItem>
                <Text>Is there any reason to be tested again?</Text>
              </CardItem>
              <CardItem>
                <Left>
                <TouchableOpacity  onPress={ProceedToScreen => this.setState({ ProceedToScreen: ProceedToScreen })} value={ProceedToScreen}>
                  <Text style={styles.text}>
                    Yes
            </Text>
                </TouchableOpacity>
                </Left>
                <Right >
                <TouchableOpacity onPress={this.ProceedToHome}>
                  <Text style={styles.text}>
                    No
            </Text>
                </TouchableOpacity>
                </Right>
              </CardItem>
            </Card>
          </View>
          ||
          null

        } */}

        {
          ProceedToScreen &&
          <View>
            <Adultscreening />
          </View>
          ||
          null
        }

      </View>
    )
  }
}
export default withNavigation(Adult); // Don’t forget to use export default!


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
