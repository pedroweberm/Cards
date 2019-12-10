import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Main from './pages/Main'
import TestInstructionScreen from './pages/TestInstructionScreen'
import Home from './pages/Home'
import CardDetailsScreen from './pages/CardDetailsScreen'
import HomeSwipe from './pages/HomeSwipe'
import CompleteTestScreen from './pages/CompleteTestScreen'
import DeckScreen from './pages/DeckScreen'
import ProfileScreen from './pages/ProfileScreen'
import GoalsScreen from './pages/GoalsScreen'

const Routes = createStackNavigator(
  {
    Main: { screen: Main },
    TestInstructionScreen: {
      screen: TestInstructionScreen,
    },
    Home: { screen: Home },
    CardDetailsScreen: { screen: CardDetailsScreen },
    HomeSwipe: { screen: HomeSwipe },
    CompleteTestScreen: { screen: CompleteTestScreen },
    DeckScreen: { screen: DeckScreen },
    ProfileScreen: { screen: ProfileScreen },
    GoalsScreen: { screen: GoalsScreen },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
)

export default createAppContainer(Routes)
