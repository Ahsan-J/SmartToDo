import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View,
 FlatList,
 TouchableOpacity,
 Image,
} from 'react-native';
import {} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { getDeviceHeight, scale, moderateScale } from '../config/sizeHelper';
import LoginListView from './loginListView'

// Props to handle : 
// callBack = Function to be executed on Back Button (Recommended to pass Navigation back button from parent)
// bgColor = to handle overall Containing Color
// textColor = to handle Text color
// iconColor = to handle Icon Color
// noFlex = to handle between flex or height

const Menu = [
  {
    title:"Tasks",
    screen : "About"
  },
  {
    title:"UnSync Tasks",
    screen : "About"
  },
  {
    title:"Profile",
    screen : "About"
  },
  {
    title:"Web Link",
    screen : "About"
  },
  {
    title:"History",
    screen : "About"
  },
  {
    title:"Settings",
    screen : "About"
  },
  {
    title:"Terms",
    screen : "About"
  },
  {
    title:"About the App",
    screen : "About"
  },
  {
    title:"Dev Info",
    screen : "About"
  },
  {
    title:"Logout",
    screen : "About"
  },
]

class DrawerMenu extends Component {

  constructor(props) {
    super(props);
    this.onBackPress = this.onBackPress.bind(this);
  }

  onBackPress (){
    this.props.callBack();
  }

  render() {
    const titleContainer = this.props.callBack ? 0.74 : 1;
    let bgColor = this.props.bgColor ? this.props.bgColor : '#ffffff';
    let textColor = this.props.textColor ? this.props.textColor : '#000000';
    let iconColor = this.props.iconColor ? this.props.iconColor : "#000000";
    let title = this.props.title || "" 

    return (
      <View style={{flex:1,backgroundColor:'#ffffff'}}>
        <View style={{flex:0.20,borderBottomWidth:1,borderColor:'#c3c3c3'}}>
          <View style={{flexDirection:'row',margin:moderateScale(15)}}>
            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:scale(80),height:scale(80),width:scale(80),backgroundColor:'#c3c3c3'}}>
                { this.props.user.avatar ? 
                  <Image source={{uri:this.props.user.avatar}} style={{width:scale(80),height:scale(80),borderRadius:scale(80)}}/>
                  :
                  <Icon name="user" size={30} color="#ffffff"/>}
            </View>
            <TouchableOpacity style={{flex:1,justifyContent:'center'}} activeOpacity={0.6} onPress={this.logIn}>
                <View style={{flex:0.9,flexDirection:'row',justifyContent:'center'}}>
                    <View style={{flex:0.9,justifyContent:'center'}}>
                        <Text style={{fontSize:moderateScale(30)}}>{this.props.user.name}</Text>
                        {/* <Text style={{fontSize:moderateScale(12),marginLeft:1}}>{this.props.user.email}</Text> */}
                        <Text style={{fontSize:moderateScale(18),marginLeft:1}}>{this.props.user.role}</Text>
                    </View>
                </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:0.8,marginTop:scale(10),justifyContent:'flex-start'}}>
          <FlatList
              data={Menu}
              renderItem={({item,index}) => {return <DrawerMenuItem key={item.screen+item.title} title={item.title} screen={item.screen}/> }}
              keyExtractor={(item, index) => {return item.screen + item.title}}
            />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user : state.user.activeUser,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DrawerMenu);

class DrawerMenuItem extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <TouchableOpacity activeOpacity={0.7} style={{flexDirection:'row',borderColor:"#c3c3c3",height:scale(45),borderTopWidth:0,borderBottomWidth:0,justifyContent:'center'}}>
        <View style={{flex:0.85,justifyContent:'center'}}>
          <Text style={{fontSize:moderateScale(25)}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}



const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#272727' //'#1962dd'
 },
 center: {
  alignItems: 'center',
  justifyContent: 'center'
  },
  menuBtnContainer: {
    flex: .15,
    flexDirection:'row',
  },
  title : {
    fontWeight:'600',
    textAlign:'center',
    fontSize:20,
  },
});
