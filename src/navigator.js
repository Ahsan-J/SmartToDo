import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './pages/login.js'
import Home from './pages/home'
import UnSync from './pages/unSync'
import Register from './pages/register.js';
import About from './pages/about';
import DevInfo from './pages/devInfo';
import History from './pages/history';
import Profile from './pages/profile';
import Settings from './pages/settings';
import Term from './pages/terms';
import WebLink from './pages/webLink';


export default createStackNavigator(
    {
        Login:{
            screen:Login
        },
        Register:{
            screen:Register
        },
        Home:{
            screen:Home
        },
        Settings:{
            screen:Settings
        },
        About:{
            screen:About
        },
        DevInfo:{
            screen:DevInfo
        },
        History:{
            screen:History
        },
        Profile:{
            screen:Profile
        },
        Term:{
            screen:Term
        },
        WebLink:{
            screen:WebLink
        },
        UnSync:{
            screen:UnSync
        },
    },
    {
        initialRouteName:'Home',
        headerMode:'none',
        navigationOptions: {
            
        },
    }
);