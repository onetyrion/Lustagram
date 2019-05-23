import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import Follow from './Follow';
import AddPost from './AddPost';

const RoutesAuths = createBottomTabNavigator({
    Home:{
        screen: Home,
    },
    Search:{
        screen: Search,
    },
    AddPost:{
        screen: AddPost,
    },
    Follow:{
        screen: Follow,
    },
    Profile:{
        screen: Profile,
    },
});
export default createAppContainer(RoutesAuths);