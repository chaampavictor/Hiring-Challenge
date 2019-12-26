import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from '../screens/LoadingScreen';
import HomeScreen from '../screens/Home';
import AddStudent from '../screens/AddStudent';
import AddResult from '../screens/AddResult';
import StudentDetails from '../screens/StudentDetails';
import Profile from '../screens/Profile';



const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    AddStudent: {
        screen: AddStudent,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    AddResult: {
        screen: AddResult,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    StudentDetails: {
        screen: StudentDetails,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    }
})

const RoutesStack = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        App: AppStack
    },
    {initialRouteName: 'Loading'}
)

const RootNavigator = createAppContainer(RoutesStack)

export default RootNavigator;
