import React from 'react'
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux'
import { MenuProvider } from 'react-native-popup-menu';
import SplashScreen from 'react-native-splash-screen';
import Drawer from 'react-native-drawer'

import Navigator from './src/navigator';
import appStore from './src/redux/store.js'
import {setTopLevelNavigator} from './src/redux/reduxNavigation'
import {scale} from './src/config/sizeHelper.js'
// import { initDB } from './src/realmDB/db';
// import {setGlobalDrawerr} from './src/config/globalDrawer'
// import DrawerMenu from './src/components/DrawerMenu.js'
// initDB();
import DropdownAlert from 'react-native-dropdownalert';
import { setTopLevelAlert } from './src/redux/reduxDropDownAlert';

class SmartToDo extends React.Component{
    componentDidMount(){
        // SplashScreen.hide();
    }
    render(){
        return (
            <Provider store={appStore}>
                {/* <Drawer ref={drawerRef => {setGlobalDrawerr(drawerRef)}} type="overlay" openDrawerOffset={0.75} content={<DrawerMenu/>} tapToClose={true}> */}
                    <MenuProvider backHandler={true}>
                        <DropdownAlert ref={alertRef => {setTopLevelAlert(alertRef)}} />
                        <Navigator ref={navigatorRef => {setTopLevelNavigator(navigatorRef)}}/>
                    </MenuProvider>
                {/* </Drawer> */}
            </Provider>
        );
    }
} 

AppRegistry.registerComponent('SmartToDo', () => SmartToDo);
