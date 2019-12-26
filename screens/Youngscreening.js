import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';

// import * as Font from 'expo-font'
import { Container, Header, Content, Text, Card, CardItem, Icon, Left, Body, Right } from 'native-base';

class Youngscreening extends Component {

  state = {

    status: false,
    yesToOne: '',
    statusKnown: '',
    parentStatus: '',
    AdmittedChild: '',
    TBsymptoms: '',
    ChildRashes: '',
    EarPus: '',
    secondstatus: '',
    thirdstatus: '',
    fourthstatus: '',
    fifthstatus: '',
    sixthstatus: ''

  }

  negativeClickded = () => {
    Alert.alert(
      'This proces cannot be undone',
      'Are You Sure',
      [

        { text: "Yes", onPress: () => this.props.navigation.navigate('Home'), },
        {
          text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel',
        },

      ],

      { cancelable: false }

    );
  };


  render() {
    const { EarPus, sixthstatus, ChildRashes, fifthstatus, fourthstatus, thirdstatus, parentStatus, secondstatus, status, statusKnown, AdmittedChild, TBsymptoms } = this.state

    return (
      <View>
        <Text style={styles.textView}>Screening For HIV Testing</Text>

        <Card>
          <CardItem>
            <Body>
              <Text>Is the child's biological mother HIV+ or status Unkown?</Text>
            </Body>
            <Right>

              <TouchableOpacity onPress={() => this.setState({ statusKnown: 'no', status: true })} value={statusKnown}>
                <Text style={styles.text}>
                  No
            </Text>
              </TouchableOpacity>

            </Right>
            <Right>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                <Text style={styles.text}>
                  Yes
            </Text>
              </TouchableOpacity>

            </Right>
          </CardItem>
          <CardItem footer bordered>
            {
              status ?
                statusKnown === 'yes' ?
                  null
                  :
                  <View>
                    <Text> Do not Test</Text>
                  </View>
                : null
            }
          </CardItem>
        </Card>






        {
          status ?
            statusKnown === 'yes' ?
              null
              :
              <View>
                <Card>
                  <CardItem>
                    <Body>
                      <Text>Are one or both of the child's Biological parents deceased?</Text>
                    </Body>
                    <Right>
                      <TouchableOpacity onPress={() => this.setState({ parentStatus: 'no', secondstatus: true })} value={parentStatus}>
                        <Text style={styles.text}>No</Text>
                      </TouchableOpacity>
                    </Right>
                    <Right>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                        <Text style={styles.text}>
                          Yes
            </Text>
                      </TouchableOpacity>
                    </Right>
                  </CardItem>
                  <CardItem footer bordered>
                    {
                      secondstatus ?
                        parentStatus === 'yes' ?
                          null
                          :
                          <View>
                            <Text> Do not Test</Text>
                          </View>
                        : null
                    }
                  </CardItem>
                </Card>
              </View>
            : null
        }





        {
          secondstatus ?
            parentStatus === 'yes' ?
              null
              :
              <View>
                <Card>
                  <CardItem>
                    <Body>
                      <Text>Does the child have any TB symptoms including cough,fever,weight loss or night sweats?</Text>
                    </Body>
                    <Right>
                      <TouchableOpacity onPress={() => this.setState({ TBsymptoms: 'no', thirdstatus: true })} value={TBsymptoms}>
                        <Text style={styles.text}>No</Text>
                      </TouchableOpacity>
                    </Right>
                    <Right>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                        <Text style={styles.text}>
                          Yes
            </Text>
                      </TouchableOpacity>
                    </Right>
                  </CardItem>
                  <CardItem footer bordered>
                    {
                      thirdstatus ?
                        TBsymptoms === 'yes' ?
                          null
                          :
                          <View>
                            <Text> Do not Test</Text>
                          </View>
                        : null
                    }
                  </CardItem>
                </Card>

              </View>
            : null
        }






        {
          thirdstatus ?
            TBsymptoms === 'yes' ?
              null
              :
              <View>
                <Card>
                  <CardItem>
                    <Body>
                      <Text>In the last 6 months,has the child been sick more than other children or been admitted to hospital?</Text>
                    </Body>
                    <Right>
                      <TouchableOpacity onPress={() => this.setState({ AdmittedChild: 'no', fourthstatus: true })} value={AdmittedChild}>
                        <Text style={styles.text}>No</Text>
                      </TouchableOpacity>
                    </Right>
                    <Right>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                        <Text style={styles.text}>
                          Yes
            </Text>
                      </TouchableOpacity>
                    </Right>
                  </CardItem>
                  <CardItem footer bordered>
                    {
                      fourthstatus ?
                        AdmittedChild === 'yes' ?
                          null
                          :
                          <View>
                            <Text> Do not Test</Text>
                          </View>
                        : null
                    }
                  </CardItem>
                </Card>

              </View>
            : null
        }



        {
          fourthstatus ?
            AdmittedChild === 'yes' ?
              null
              :
              <View>
                <Card>
                  <CardItem>
                    <Body>
                      <Text>Has this child had frequent rashes or other skin problems?</Text>
                    </Body>
                    <Right>
                      <TouchableOpacity success onPress={() => this.setState({ ChildRashes: 'no', fifthstatus: true })} value={ChildRashes}>
                        <Text style={styles.text}>No</Text>
                      </TouchableOpacity>
                    </Right>
                    <Right>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                        <Text style={styles.text}>
                          Yes
            </Text>
                      </TouchableOpacity>
                    </Right>
                  </CardItem>
                  <CardItem footer bordered>
                    {
                      fifthstatus ?
                        ChildRashes === 'yes' ?
                          null
                          :
                          <View>
                            <Text> Do not Test</Text>
                          </View>
                        : null
                    }
                  </CardItem>
                </Card>
              </View>
            : null
        }




        {
          fifthstatus ?
            ChildRashes === 'yes' ?
              null
              :
              <View>

                <Card>
                  <CardItem>
                    <Body>
                      <Text>Has the child had pus coming from his or her ear?</Text>
                    </Body>
                    <Right>
                      <TouchableOpacity onPress={this.negativeClickded}>
                        <Text style={styles.text}>No</Text>
                      </TouchableOpacity>
                    </Right>
                    <Right>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                        <Text style={styles.text}>
                          Yes
            </Text>
                      </TouchableOpacity>
                    </Right>
                  </CardItem>
                  <CardItem footer bordered>
                    {
                      sixthstatus ?
                        EarPus === 'yes' ?
                          null
                          :
                          <View>
                            <Text> Do not Test</Text>
                          </View>
                        : null
                    }
                  </CardItem>
                </Card>
              </View>
            : null
        }



      </View>
    )
  }
}

export default withNavigation(Youngscreening) // Don’t forget to use export default!


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


