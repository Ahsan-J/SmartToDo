import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import CryptoJS from 'crypto-js';
import ShortId from 'shortid';
import { scale, getDeviceWidth, moderateScale, verticalScale, getDeviceHeight } from '../config/sizeHelper'
import { saveListItem, getAllListItem, registerUser, getAllUsers } from '../realmDB/db';
import Header from '../components/headers/header'
import LoginListView from '../components/loginListView.js'
import NewAccount from '../components/newAccount.js'
import {validateEmail} from '../config/validation.js'
import { dropDownAlert } from '../redux/reduxDropDownAlert';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name : '',
        email : '',
        password:'',
        confirmPassword:'',
        uri:null,
    }
  }
  _showImagePicker = ()=>{
    var options = {
        title: 'Select Avatar',
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      };
      
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else {
          let source = { uri: response.uri };
        }
      });
  }
  _submitRegistration = ()=>{
    if(this.state.name.trim()==undefined||this.state.name.trim()==null||this.state.name.trim()==''){
        //error
        dropDownAlert({
            type:'error',
            title:'Name is Empty',
            message:'Name is required to distinguish your Identity'
        })
        return
    }
    if(this.state.email.trim()==undefined||this.state.email.trim()==null||this.state.email.trim()==''){
        dropDownAlert({
            type:'error',
            title:'Email is Empty',
            message:'Email is required to seperate your Task'
        })
        return
    }
    else if(!validateEmail(this.state.email.trim())){
        //error
        dropDownAlert({
            type:'error',
            title:'Email is Invalid',
            message:'Email you used might be invalid'
        })
        return
    }
    if(this.state.password.trim()==undefined||this.state.password.trim()==null||this.state.password.trim()==''){
        //error
        dropDownAlert({
            type:'error',
            title:'Password is Empty',
            message:'Password is required to secure your Task'
        })
        return
    }
    else if(this.state.confirmPassword.trim()==undefined||this.state.confirmPassword.trim()==null||this.state.name.trim()==''){
        //error
        dropDownAlert({
            type:'error',
            title:'Confirm Password is Empty',
            message:'Confirm Password is required to validate the Pasword'
        })
        return
    }
    else if(!this.state.confirmPassword===this.state.password){
        //error
        dropDownAlert({
            type:'error',
            title:'Password Mismatch',
            message:'Password and Confirm Pasword do not match'
        })
        return
    }
    var user = {
        id          :       ShortId.generate(),
        name        :       this.state.name,
        email       :       this.state.email,
        avatar      :       this.state.uri,
        password    :       CryptoJS.AES.encrypt(this.state.password, 'smart_is_cool').toString(),
    }
    registerUser(user);
    // dropDownAlert({
    //     type:'success',
    //     title:'Welcome '+this.state.name,
    //     message:'Feel free to use our App'
    // })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header noFlex callBack={this.props.navigation.goBack} iconColor="#ffffff" bgColor="#2E3534" textColor="#ffffff" title="Registration"/>
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',padding:2}}>
        <View style={{flex:0.9}}>
          <KeyboardAvoidingView style={{flex:1}} behavior={null} enabled>
            <ScrollView contentContainerStyle={{justifyContent:'space-between'}} showsVerticalScrollIndicator={false}>
            <View style={{height:getDeviceHeight()*0.15,justifyContent:'space-around',borderBottomWidth:1,borderColor:'#c3c3c3'}}>
              <Text style={{fontSize:moderateScale(20)}}>Register Yourself!</Text>
              <Text>Help us by providing some unique information about yourself</Text>
            </View>
            <View style={{height:getDeviceHeight()*0.6,justifyContent:'space-around'}}>
                <View style={{flex:0.15,flexDirection:'row',alignItems:'flex-end'}}>
                    <TouchableOpacity activeOpacity={0.6} style={{justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:scale(60),height:scale(60),width:scale(60),backgroundColor:'#c3c3c3'}} onPress={this._showImagePicker}>
                       <Icon name="camera" size={30} color="#ffffff"/>
                    </TouchableOpacity>
                    <View style={{flex:1,justifyContent:'center'}} activeOpacity={0.6}>
                        <View style={{flex:0.8,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{flex:0.9}}>
                                <TextInput 
                                  style={{paddingHorizontal:10,fontSize:18}}
                                  placeholder="Name"
                                  onChangeText={(text) => this.setState({name:text})}
                                  value={this.state.name}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:0.15,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:1,justifyContent:'center',}} activeOpacity={0.6}>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <TextInput 
                                  style={{paddingHorizontal:10,fontSize:18}}
                                  placeholder="Email Address"
                                  onChangeText={(text) => this.setState({email:text})}
                                  value={this.state.email}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:0.15,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:1,justifyContent:'center'}} activeOpacity={0.6}>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <TextInput 
                                  style={{paddingHorizontal:10,fontSize:18}}
                                  placeholder="Password"
                                  secureTextEntry={true}
                                  onChangeText={(text) => this.setState({password:text})}
                                  value={this.state.password}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:0.15,flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:1,justifyContent:'center'}} activeOpacity={0.6}>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{flex:1}}>
                                <TextInput 
                                  style={{paddingHorizontal:10,fontSize:18}}
                                  placeholder="Confirm Password"
                                  secureTextEntry={true}
                                  onChangeText={(text) => this.setState({confirmPassword:text})}
                                  value={this.state.confirmPassword}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:0.1,flexDirection:'row',justifyContent:'flex-end'}}>
                    <View style={{flex:0.5}}>
                        <Button title="Register Myself" onPress={this._submitRegistration}/>
                    </View>
                </View>
            </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
        </View>
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
const mapStateToProps = (state) => {
  return {
    
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
