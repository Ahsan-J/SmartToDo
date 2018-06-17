import axios from 'axios';
import {Base_Url} from '../../config/config.js';
import {navigate} from '../reduxNavigation'
import {ToastAndroid} from 'react-native'

export function getData(){
    return dispatch =>{        
        
        axios({
            method:'GET',
            url:'data.json',
        }).then(function(response){
            ToastAndroid.show(""+JSON.stringify(response.data ),ToastAndroid.LONG)
            console.log(response.data);
        }).catch(function(response){
            console.log(response);
        })
    }
}
