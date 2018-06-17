import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale, getDeviceWidth, moderateScale, verticalScale } from '../config/sizeHelper'

class loginListView extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.user);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:scale(60),height:scale(60),width:scale(60),backgroundColor:'#c3c3c3'}}>
            <Icon name="user" size={30} color="#ffffff"/>
            {/* <Icon name="star" size={10} color="#ffffff" style={{alignSelf:'flex-end'}} /> */}
        </View>
        <TouchableOpacity style={{flex:1,justifyContent:'center'}} activeOpacity={0.6}>
            <View style={{flex:0.8,flexDirection:'row',justifyContent:'center'}}>
                <View style={{flex:0.9}}>
                    <Text style={{fontSize:moderateScale(20)}}>{}</Text>
                    <Text style={{fontSize:moderateScale(12),marginLeft:1}}>email address</Text>
                </View>
            </View>
        </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(loginListView);

const styles = StyleSheet.create({
    container: {
        flex: 0.16,
        justifyContent: 'center',
        // alignItems: 'center',
        // marginTop:2,
        // marginBottom:2,
        flexDirection:'row',
        backgroundColor: '#F5FCFF',
      },
});
