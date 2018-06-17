import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './pages/login.js'
import Screen02 from './pages/screen02.js'
import Screen03 from './pages/screen03.js'
import Register from './pages/register.js';

export default createStackNavigator(
    {
        Login:{
            screen:Login
        },
        Register:{
            screen:Register
        },
        Screen02:{
            screen:Screen02
        },
        Screen03:{
            screen:Screen03
        }
    },
    {
        initialRouteName:'Login',
        headerMode:'none',
        navigationOptions: {
            
        },
    }
);