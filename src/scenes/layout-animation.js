import React, { Component, PropTypes } from 'react-native';

const {
  Dimensions,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  UIManager,
  View
} = React;

UIManager.setLayoutAnimationEnabledExperimental &&  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LayoutAnimationDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      height: 100
    };
    this.toggleSize = this.toggleSize.bind(this);
  }
  toggleSize() {
    const { width, height } = this.state;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({
      width: width === 100 ? 300 : 100,
      height: height === 100 ? 200 : 100
    });
  }
  render() {
    const { width, height } = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.textLayout, { width: Dimensions.get('window').width }]}>
          <Text style={styles.text}>Tap The Box</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={this.toggleSize}>
          <View
            style={[styles.box, {
              width,
              height
            }]}
          />
        </TouchableWithoutFeedback>
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
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  textLayout: {
    position: 'absolute',
    top: 100
  },
  box: {
    backgroundColor: 'rgb(22, 107, 187)'
  }
});
