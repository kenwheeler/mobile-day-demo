import React, { Component, PropTypes } from 'react-native';

const {
  TextInput,
  StyleSheet,
  View
} = React;

export default class TextInputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null
    };
  }
  render() {
    return (
      <View style={[styles.container, {
          backgroundColor: this.state.color || '#efefef'
        }]}>
        <TextInput
          style={styles.textInput}
          onChangeText={(color) => this.setState({ color })}
          placeholder="Enter a color value"
          value={this.state.color}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 60,
    paddingHorizontal: 10
  }
});
