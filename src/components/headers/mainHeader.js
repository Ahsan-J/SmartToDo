import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View,
 TouchableOpacity,
 Image,
} from 'react-native';
import {} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { MenuTrigger,Menu,MenuOption,MenuOptions } from 'react-native-popup-menu';
import { scale, verticalScale } from '../../config/sizeHelper';

// Props to handle : 
// callBack = Function to be executed on Left Button (Recommended to pass Navigation back button from parent)
// bgColor = to handle overall Containing Color
// textColor = to handle Text color
// iconColor = to handle Icon Color
// title = Title to be Inserted
// callBackRight = Function to be executed on Right Button (Probably Settings)

class HeaderWithTitle extends Component {

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
      <View style={[{flex:0.1, flexDirection:'row',backgroundColor : bgColor }]}>
        { this.props.callBack
          ?
            <TouchableOpacity style={styles.menuBtnContainer} onPress={this.onBackPress}>
                <View style={[{flex:1}, styles.center]}>
                    <Icon name="bars" size={25} color={iconColor}/>
                </View>
            </TouchableOpacity>
          : null
        }
        <View style={{flex:titleContainer, justifyContent:'center'}} >
            <Text allowFontScaling={false} style={[styles.title, {color:textColor}]}> {title}</Text>
        </View>
        { this.props.callBackRight
            ?
            <View style={styles.menuBtnContainer}>
              <Menu customStyles={{OptionTouchableComponent:'TouchableOpacity'}}>
                <MenuTrigger>
                    <Icon name="user-circle" size={25} color={iconColor}/>
                </MenuTrigger>
                <MenuOptions customStyles={optionStyles}>
                  <MenuOption onSelect={() => alert(`Save`)}>
                    <Text style={{color: '#ffffff',letterSpacing:-0.4,fontSize:18,fontWeight:'600',margin:10,textAlign:'center'}}>AHSAN AHMED</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => alert(`Save`)}>
                    <Text style={{color: '#ffffff',letterSpacing:-0.4,fontSize:18,fontWeight:'600',margin:10,textAlign:'center'}}>AHSAN AHMED</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => alert(`Subscription`)} customStyles={menuOptionStyle} >
                    <Text style={{color: '#5c5c5c',textAlign:'center',fontSize:12,margin:4,letterSpacing:-0.4}}>Subscription</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => alert(`Change Password`)} customStyles={menuOptionStyle} >
                    <Text style={{color: '#5c5c5c',textAlign:'center',fontSize:12,margin:4,letterSpacing:-0.4}}>Change Password</Text>
                  </MenuOption>
                  <MenuOption onSelect={() => alert(`Logout`)} customStyles={menuOptionStyle}>
                    <Text style={{color: '#5c5c5c',textAlign:'center',fontSize:12,margin:4,letterSpacing:-0.4}}>Logout</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
            : null
        }
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderWithTitle);

const optionStyles = {
  optionsContainer: {
    backgroundColor: 'transparent',
    // padding: 5,
    width:scale(150),
    // marginTop:verticalScale(30)
  },
  optionsWrapper: {
    // backgroundColor: 'purple',
  },
  optionWrapper: {
    backgroundColor: 'transparent'
  },
  optionTouchable: {
    underlayColor: 'transparent',
    activeOpacity: 0,
  },
  optionText: {
    color: 'brown',
  },
};

const menuOptionStyle = {
  optionWrapper:{
    backgroundColor: '#eb912f',
    borderColor:'#5c5c5c',
    borderTopWidth:1,
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
    alignItems:'center',
    justifyContent:'center'
  },
  title : {
      fontWeight:'600',
      textAlign:'center',
      fontSize:20,
  },
  anchorStyle: {
    backgroundColor: 'blue',
  },

});
