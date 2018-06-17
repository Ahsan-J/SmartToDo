import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux';
import {scale,getDeviceWidth,moderateScale, verticalScale} from '../config/sizeHelper'

class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Screen03
        </Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
