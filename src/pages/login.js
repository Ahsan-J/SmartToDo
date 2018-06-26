import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale, getDeviceWidth, moderateScale, verticalScale } from '../config/sizeHelper'
import { getAllUsers } from '../realmDB/user.js';
import Header from '../components/headers/header'
import LoginListView from '../components/loginListView.js'
import NewAccount from '../components/newAccount.js'

class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.getAllUsers()
  }
  render() {
    return (
      <View style={styles.container}>
        <Header bgColor="#2E3534" textColor="#ffffff" title="Your Smart ToDo"/>
        <View style={{flex:0.9,flexDirection:'row',justifyContent:'center'}}>
          <View style={{flex:0.85,justifyContent:'center'}}>
            <View style={{flex:0.9}}>
              <FlatList
                data={this.props.users}
                ListHeaderComponent={()=>{return <View style={{borderColor:'#c3c3c3',marginBottom:scale(8)}}><Text style={{fontSize:moderateScale(20)}}>Login to Access Smart Features</Text></View>}}
                renderItem={({item,index}) => <LoginListView user={item}/> }
                ListFooterComponent={()=>{return <NewAccount/>}}
                ItemSeparatorComponent={()=>{return <View style={{margin:3}}></View>}}
                keyExtractor={(item, index) => {return item.id}}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
  // async showPicker(stateKey, options) {
  //   try {
  //     const {action, minute, hour} = await TimePickerAndroid.open(options);
  //     var newState = {};
  //     if (action === TimePickerAndroid.timeSetAction) {
  //       newState[stateKey + 'Text'] = _formatTime(hour, minute);
  //       newState[stateKey + 'Hour'] = hour;
  //       newState[stateKey + 'Minute'] = minute;
  //     } else if (action === TimePickerAndroid.dismissedAction) {
  //       newState[stateKey + 'Text'] = 'dismissed';
  //     }
  //     this.setState(newState);
  //   } catch ({code, message}) {
  //     console.warn(`Error in example '${stateKey}': `, message);
  //   }
  // }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers : ()=>{return dispatch(getAllUsers())}
  }
}
const mapStateToProps = (state) => {
  return {
    users : state.user.users 
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
});
