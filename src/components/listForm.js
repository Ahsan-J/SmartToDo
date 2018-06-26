import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Picker,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TimePickerAndroid,
  DatePickerAndroid,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale, getDeviceWidth, moderateScale, getDeviceHeight } from '../config/sizeHelper'
import {navigate} from '../redux/reduxNavigation.js'

class ListForm extends Component{
    constructor(props){
      super(props);
      this.state = {
        task : '',
        dateTime : '',
        priority:'HIGH'
      }
    }
    dateTimePicker = () => {
        let month,day,year,hour,minute,self = this;
        DatePickerAndroid.open({date: new Date()}).then(function(date){
        if (date.action !== DatePickerAndroid.dismissedAction) {
            month = date.month;
            year = date.year;
            day = date.day;
        }
        TimePickerAndroid.open({
            hour: 14,
            minute: 0,
            is24Hour: false, // Will display '2 PM'
        }).then(function(time){
            if(time.action!==TimePickerAndroid.dismissedAction){
                hour = time.hour;
                minute = time.minute;
                self.setState({
                    dateTime :(hour%12) + ' : ' + minute + ' on ' + day + '/' + (month+1) + '/' + year
                })
            }
            });
        })
    }
    render(){
      return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <TouchableOpacity style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center'}} activeOpacity={1} onPress={this.props.closeModal}>
            <View style={{flex:0.5,justifyContent:'center',flexDirection:'row'}}>
              <View style={{flex:0.8}}>
              <KeyboardAvoidingView style={{flex:1,backgroundColor:'#ffffff',padding:moderateScale(15)}} behavior={null} enabled>
                <TouchableOpacity activeOpacity={1} onPress={()=>{}}>
                <View style={{height:getDeviceHeight()*0.1,justifyContent:'space-around',borderBottomWidth:1,borderColor:'#c3c3c3'}}>
                  <Text style={{fontSize:moderateScale(20)}}>Add Task!</Text>
                  <Text>Add Task to prioritize your daily Routines</Text>
                </View>
                <ScrollView contentContainerStyle={{justifyContent:'space-between'}} showsVerticalScrollIndicator={false}>
                  <View style={{height:getDeviceHeight()*0.2,justifyContent:'space-around'}}>
                    <View style={{flex:0.5,flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:1,justifyContent:'center',}}>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <View style={{flex:1}}>
                                    <TextInput 
                                      style={{fontSize:18}}
                                      placeholder="Email Address"
                                      onChangeText={(text) => this.setState({email:text})}
                                      value={this.state.email}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:0.5,flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:1,justifyContent:'center',}}>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity style={{flex:1}} onPress={this.dateTimePicker}>
                                    <TextInput 
                                      style={{paddingHorizontal:10,fontSize:18}}
                                      placeholder="XX : XX"
                                      onChangeText={(text) => this.setState({email:text})}
                                      value={this.state.dateTime}
                                      editable={false}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                  </View>
                </ScrollView>
                  <View style={{height:getDeviceHeight()*0.1}}>
                    <View style={{flex:0.9,flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:1,justifyContent:'center'}} >
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                <View style={{flex:0.5}}>
                                  <Picker
                                    selectedValue={this.state.priority}
                                    style={{ height: 50, width: 100 }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({priority: itemValue})}>
                                    <Picker.Item label="High" value="HIGH" />
                                    <Picker.Item label="Medium" value="MEDIUM" />
                                    <Picker.Item label="Low" value="LOW" />
                                  </Picker>
                                </View>
                                <Text>Button</Text>
                            </View>
                        </View>
                    </View>
                  </View>
                </TouchableOpacity>
                </KeyboardAvoidingView>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      );
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
export default connect(mapStateToProps, mapDispatchToProps)(ListForm);