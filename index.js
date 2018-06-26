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
// import { initDB } from './src/realmDB/user.js';
import {setGlobalDrawer, open} from './src/config/globalDrawer'
import DrawerMenu from './src/components/drawerMenu.js'
import DropdownAlert from 'react-native-dropdownalert';
import { setTopLevelAlert } from './src/config/dropDownAlert';

class SmartToDo extends React.Component{
    componentDidMount(){
        // SplashScreen.hide();
    }
    render(){
        return (
            <Provider store={appStore}>
                <MenuProvider backHandler={true}>
                    <Drawer 
                    ref={drawerRef => {setGlobalDrawer(drawerRef)}} 
                    type="overlay" 
                    openDrawerOffset={0.25} 
                    content={<DrawerMenu/>}
                    tapToClose={true}
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    styles={drawerStyles}
                    // disabled={true}
                    tweenHandler={(ratio) => ({
                        main: { opacity:(2-ratio)/2 }
                    })}
                    >
                        <DropdownAlert ref={alertRef => {setTopLevelAlert(alertRef)}} />
                        <Navigator ref={navigatorRef => {setTopLevelNavigator(navigatorRef)}}/>
                    </Drawer>
                </MenuProvider>
            </Provider>
        );
    }
} 

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, },
    main: {paddingLeft: 3,},
    // drawerOverlay: { zIndex:100 },
    // mainOverlay: { zIndex:100 },
}

AppRegistry.registerComponent('SmartToDo', () => SmartToDo);
