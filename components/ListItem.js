
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Container, Header, Content, Card, CardItem, Icon, Right, Left, Button } from 'native-base';


export default function ListItem({ item, index, navigation, onDelete, onEdit }) {


    return (
        <View style={styles.row}>

            <Card>


                <CardItem>
                    <Left>
                        <Text>{item.name}</Text>
                    </Left>

                    <Right>
                    <Icon active name="person" />
                    </Right>
                </CardItem>
            </Card>
          
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#ccc",
        backgroundColor: '#FFF',
        padding: 10
    },

    container: {
        padding: 10
    },

    author: {
        marginTop: 25,
        marginBottom: 10,
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 15,
        color: '#FFF',
        textAlign: "right"
    },

    quote: {
        marginTop: 5,
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 17,
        lineHeight: 21,
        color: '#FFF',
    },

    buttons: {
        width: 190,
        flexDirection: 'row'
    },

    rightAction: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 95,
    },

    editAction: {
        backgroundColor: '#497AFC'
    },

    deleteAction: {
        backgroundColor: '#dd2c00'
    },

    actionText: {
        color: '#fff',
        fontWeight: '600',
        padding: 20,
    }
});













// import React, { useRef } from 'react';
// import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
// import { RectButton } from 'react-native-gesture-handler';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import { Container, Title, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right, Button, Fab } from "native-base";


// export default function ListItem({ item, index, navigation, onDelete, onEdit }) {


//     return (
//         <View>
//             <View style={styles.container}>

//                     <Left>
//                         <Text style={styles.city}>{item.name}</Text>
//                         </Left>               

//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     row: {
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         borderBottomColor: "#ccc",
//         backgroundColor: '#FFF',
//         padding: 10
//     },

//     container: {

//         // padding: 10
//     },

//     author: {
//         marginTop: 25,
//         marginBottom: 10,
//         fontFamily: 'HelveticaNeue-Medium',
//         fontSize: 15,
//         color: '#FFF',
//         textAlign: "right"
//     },

//     quote: {
//         marginTop: 5,
//         fontFamily: 'HelveticaNeue-Medium',
//         fontSize: 17,
//         lineHeight: 21,
//         color: '#FFF',
//     },

//     buttons: {
//         width: 190,
//         flexDirection: 'row'
//     },

//     rightAction: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         flex: 1,
//         width: 95,
//     },

//     editAction: {
//         backgroundColor: '#497AFC'
//     },

//     deleteAction: {
//         backgroundColor: '#dd2c00'
//     },

//     actionText: {
//         color: '#fff',
//         fontWeight: '600',
//         padding: 20,
//     }
// });