import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import { scale, getDeviceWidth, moderateScale, getDeviceHeight } from '../config/sizeHelper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Collapsible from 'react-native-collapsible'
import Header from '../components/headers/header'
import { open } from '../config/globalDrawer';
import { getAllListItem } from '../realmDB/list';
import ListForm from '../components/listForm'

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible : false
    }
  }

  componentDidMount(){
    this.props.getAllListItem(this.props.user);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header 
          iconColor="#ffffff" 
          bgColor="#2E3534" 
          textColor="#ffffff" 
          title="Tasks" 
          iconName="bars" 
          iconNameRight="plus-circle" 
          callBack={open}
          noFlex = {true}
          callBackRight={()=>{this.setState({modalVisible:true})}} 
        />
        <View style={{flex:0.9}}>
          <ListItem/>
        </View>
        <ListForm modalVisible={this.state.modalVisible} closeModal={()=>{this.setState({modalVisible:false})}}/>
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllListItem : ()=>{dispatch(getAllListItem())}
  }
}
const mapStateToProps = (state) => {
    return {
      user : state.user.activeUser
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Task);

class ListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked:true,
      isCollapsed:true
    }
  }
  render(){
    return (
        <View style={{height:(this.state.isCollapsed)?scale(100):scale(40),width:getDeviceWidth()*0.95,alignSelf:'center',marginTop:moderateScale(5),marginBottom:moderateScale(5),}}>
          <View style={{height:scale(40)}}>
            <View style={{flex:1,flexDirection:'row'}}>
              <TouchableOpacity onPress={()=>{let value = !this.state.checked;this.setState({checked:value})}} style={{flex:0.1,backgroundColor:'#f4f4f4',justifyContent:'center',alignItems:'center',borderBottomLeftRadius:(this.state.isCollapsed)?moderateScale(7):moderateScale(0),borderTopLeftRadius:moderateScale(7)}}>
                {this.state.checked?
                <Icon name="check-square-o" size={moderateScale(25)} color="#20b2aa"/>
                :
                <Icon name="square-o" size={moderateScale(25)} color="#c3c3c3"/>
                }
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={()=>{let value = !this.state.isCollapsed;this.setState({isCollapsed:value})}} style={{flex:0.7,backgroundColor:'#dedede',justifyContent:'center'}}>
                <Text 
                  style={{fontSize:moderateScale(22),marginLeft:moderateScale(10),textDecorationLine:(this.state.checked)?'line-through':'none'}}
                  numberOfLines ={1}
                  ellipsizeMode="tail"
                  >Task</Text>
              </TouchableOpacity>
              <View style={{flex:0.2,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderBottomRightRadius:(this.state.isCollapsed)?moderateScale(7):moderateScale(0),borderTopRightRadius:moderateScale(7)}}>
                <Text style={{fontSize:moderateScale(18),color:'#ffffff',fontWeight:'bold'}}>HIGH</Text>
              </View>
            </View>
          </View>
          <Collapsible collapsed={this.state.isCollapsed} style={{borderBottomRightRadius:moderateScale(7),borderBottomLeftRadius:moderateScale(7),backgroundColor:'#eeeeee'}}>
            <View style={{flex:1,padding:moderateScale(5),flexDirection:'row'}}>
              <View style={{flex:0.85}}>
                <View style={{flexDirection:'row',flex:1,justifyContent:'center'}}>
                  <View style={{flex:0.95}}>
                    <Text>Task</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                  <View style={{flexDirection:'row',flex:0.5,justifyContent:'space-around'}}>
                    <Text>Synced :</Text>
                    <Text>fdsfs</Text>
                  </View>
                  <View style={{flexDirection:'row',flex:0.5,justifyContent:'space-around'}}>
                    <Text>Expire Time :</Text>
                    <Text>fdsfs</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                  <View style={{flexDirection:'row',flex:0.5,justifyContent:'space-around'}}>
                    <Text>Created at :</Text>
                    <Text>fdsfs</Text>
                  </View>
                  <View style={{flexDirection:'row',flex:0.5,justifyContent:'space-around'}}>
                    <Text>Updated at :</Text>
                    <Text>fdsfs</Text>
                  </View>
                </View>
              </View>
              <View style={{flex:0.15,borderColor:'#e3e3e3',borderLeftWidth:1,justifyContent:'space-evenly'}}>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
                  <Icon name="pencil" size={moderateScale(20)} color="#c3c3c3"/>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
                  <Icon name="times" size={moderateScale(20)} color="#c3c3c3"/>
                </TouchableOpacity>
              </View>
            </View>
          </Collapsible>
        </View>
    );
  }
}

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
