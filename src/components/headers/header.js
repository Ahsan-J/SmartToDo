import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View,
 TouchableOpacity
} from 'react-native';
import {} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { getDeviceHeight } from '../../config/sizeHelper';

// Props to handle : 
// callBack = Function to be executed on Back Button (Recommended to pass Navigation back button from parent)
// bgColor = to handle overall Containing Color
// textColor = to handle Text color
// iconColor = to handle Icon Color
// noFlex = to handle between flex or height

class HeaderWithTitle extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const titleContainer = this.props.callBack ? 0.74 : 1;
    let bgColor = this.props.bgColor ? this.props.bgColor : '#ffffff';
    let textColor = this.props.textColor ? this.props.textColor : '#000000';
    let iconColor = this.props.iconColor ? this.props.iconColor : "#000000";
    let title = this.props.title || "" 

    return (
      <View style={[{flexDirection:'row',backgroundColor : bgColor },this.props.noFlex?{height:getDeviceHeight()*0.09}:{flex:0.1}]}>
        { this.props.callBack && this.props.iconName
          ?
          <TouchableOpacity style={styles.menuBtnContainer} onPress={this.props.callBack}>
            <View style={[{flex:1}, styles.center]}>
              <Icon name={this.props.iconName} size={25} color={iconColor}/>
            </View>
          </TouchableOpacity>
           : null
        }
          <View style={{flex:titleContainer, justifyContent:'center'}} >
           <Text allowFontScaling={false} style={[styles.title, {color:textColor}]}> {title}</Text>
          </View>
          { this.props.callBackRight && this.props.iconNameRight
            ?
                <TouchableOpacity style={styles.menuBtnContainer} onPress={this.props.callBackRight}>
                    <View style={[{flex:1}, styles.center]}>
                        <Icon name={this.props.iconNameRight} size={25} color={iconColor}/>
                    </View>
                </TouchableOpacity>
            : <View style={styles.menuBtnContainer}></View>
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
