import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';

const Routes = createStackNavigator({
  Home,
});

export default createAppContainer(Routes);
