import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Main from './pages/Main'
import Profile from './pages/Profile'
import Cadastrar from './pages/Cadastrar'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: "DevRadar",
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
        Cadastrar: {
            screen: Cadastrar,
            navigationOptions: {
                title: 'Cadastrar'
            }
        }

    }, {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#7d40e7'
            },
            headerTintColor: '#fff'
        }
    })
);

export default Routes