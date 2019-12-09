import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import TestInstructionScreen from './pages/TestInstructionScreen'
import Home from './pages/Home'
import CardDetailsScreen from './pages/CardDetailsScreen'
import HomeSwipe from './pages/HomeSwipe'
import CompleteTestScreen from './pages/CompleteTestScreen'

const Routes = createStackNavigator(
  {
    Main,
    TestInstructionScreen,
    Home,
    CardDetailsScreen,
    HomeSwipe,
    CompleteTestScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
)

export default createAppContainer(Routes)
