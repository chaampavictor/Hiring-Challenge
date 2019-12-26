import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from '../components/LoadingScreen';
import HomeScreen from '../components/Home';
import NewStudentScreen from '../components/NewStudent';
import NewResultScreen from '../components/NewResult';
import StudentDetails from '../components/StudentDetails';
import Profile from '../components/Profile';



const AppStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: `HomePage`
        })
    },
    NewStudent: {
        screen: NewStudentScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Create Student`
        })
    },
    NewResult: {
        screen: NewResultScreen,
        navigationOptions: ({ navigation }) => ({
            title: `Add Student Results`
        })
    },
    StudentDetails: {
        screen: StudentDetails,
        navigationOptions: ({ navigation }) => ({
            title: `Student Details`
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
