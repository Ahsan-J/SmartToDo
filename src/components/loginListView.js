import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Button,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale, moderateScale } from '../config/sizeHelper'
import { deleteUser } from '../realmDB/user.js';
import {navigate} from '../redux/reduxNavigation'
import { SignIn } from '../redux/actions/user';

class loginListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal:false,
    }
  }
  logIn = () => {
    this.props.setActiveUser(this.props.user)
    navigate("Home")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:scale(60),height:scale(60),width:scale(60),backgroundColor:'#c3c3c3'}}>
            { this.props.user.avatar ? 
              <Image source={{uri:this.props.user.avatar}} style={{width:scale(60),height:scale(60),borderRadius:scale(60)}}/>
              :
              <Icon name="user" size={30} color="#ffffff"/>}
        </View>
        <TouchableOpacity style={{flex:0.85,justifyContent:'center'}} activeOpacity={0.6} onPress={this.logIn}>
            <View style={{flex:0.9,flexDirection:'row',justifyContent:'center'}}>
                <View style={{flex:0.9}}>
                    <Text style={{fontSize:moderateScale(20)}}>{this.props.user.name}</Text>
                    <Text style={{fontSize:moderateScale(12),marginLeft:1}}>{this.props.user.email}</Text>
                </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:0.15,justifyContent:'center',alignItems:'center'}} onPress={()=>{this.setState({modal:true})}}>
          <Icon name="times" size={20} color="#c3c3c3"/>
        </TouchableOpacity>
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modal}
          onRequestClose={() => {
            this.setState({modal:false})
          }}>
          <TouchableWithoutFeedback  onPress={()=>{this.setState({modal:false})}}>
            <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center'}}>
              <View style={{flex:0.30,flexDirection:'row',justifyContent:'center'}}>
                <View style={{flex:0.85,backgroundColor:'#ffffff',borderRadius:20,justifyContent:'space-around',alignItems:'center'}}>
                  <Text style={{fontSize:20,color:'#000000',marginTop:moderateScale(5)}}>Are you sure you want to delete?</Text>
                  <Text style={{width:scale(250),textAlign:'center'}}>This will remove all the task user has stored from the device</Text>  
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'space-around',flexDirection:'row'}}>
                      <Button onPress={()=>{this.setState({modal:false})}} title="Cancel"/>
                      <Button onPress={()=>{this.setState({modal:false});this.props.deleteUser(this.props.user)}} title="Delete"/>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser : (user)=>{dispatch(deleteUser(user))},
    setActiveUser : (user)=>{dispatch(SignIn(user))}
  }
}
const mapStateToProps = (state) => {
  return {
    
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(loginListView);

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent: 'center',
        flexDirection:'row',
        backgroundColor: '#F5FCFF',
      },
});
