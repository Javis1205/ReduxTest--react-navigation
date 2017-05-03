import { StackNavigator } from 'react-navigation';

import Login              from '../screens/Login';
import Welcome            from '../screens/Welcome';

const RootNavigation = StackNavigator ({
    Unauthorized: {screen : Welcome},
    Authorized  : {screen : Login  },
},{
    headerMode : 'screen'
});

export default RootNavigation ;