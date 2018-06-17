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
import {navigate} from '../redux/reduxNavigation.js'

class Account extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={()=>{navigate('Register')}}>
        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',borderRadius:scale(60),height:scale(60),width:scale(60),backgroundColor:'#c3c3c3'}}>
          <Icon name="plus" size={30} color="#ffffff"/>
          {/* <Icon name="star" size={10} color="#ffffff" style={{alignSelf:'flex-end'}} /> */}
        </View>
        <View style={{flex:1,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
          <View style={{flex:0.9}}>
            <Text style={{fontSize:moderateScale(18)}}>Add an Account </Text>
          </View>
        </View>
      </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(Account);

const styles = StyleSheet.create({
    container: {
        flex: 0.16,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderTopWidth:1,
        borderColor:'#c3c3c3',
        paddingTop:scale(15),
        marginTop:scale(15),
        flexDirection:'row',
        backgroundColor: '#F5FCFF',
      },
});
