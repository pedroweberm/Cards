import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Home from './pages/Home'
import CardDetailsScreen from './pages/CardDetailsScreen'
import HomeSwipe from './pages/HomeSwipe'

const Routes = createStackNavigator(
  {
    Main,
    Home,
    CardDetailsScreen,
    HomeSwipe,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
)

export default createAppContainer(Routes)
