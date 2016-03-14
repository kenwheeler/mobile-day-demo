import React, { Component, PropTypes } from 'react-native';

const {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

export default class Button extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.children}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 60,
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: "#e74c3c"
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center"
  }
});
