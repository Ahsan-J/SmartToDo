import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {connect} from 'react-redux';


class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          
        </Text>
        <Text style={styles.instructions}>
          Screen02
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
