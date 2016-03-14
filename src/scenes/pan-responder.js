import React, { Component, PropTypes } from 'react-native';

const {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  View
} = React;

export default class PanResponderDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: new Animated.Value(0)
    }
  }
  componentWillMount() {
    this._x = 0;
    this.state.rotation.addListener((value) => this._x = value.value);
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.state.rotation.setOffset(this._x);
        this.state.rotation.setValue(0);
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.rotation},
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        Animated.decay(
          this.state.rotation,
          { velocity: gestureState.vx }
        ).start();
      }
    });
  }
  componentWillUnmount() {
    this.state.rotation.removeAllListeners();
  }
  render() {
    return (
      <View style={ styles.container } {...this._panResponder.panHandlers}>
        <View style={[styles.textLayout, { width: Dimensions.get('window').width }]}>
          <Text style={styles.text}>Swipe The Pinwheel</Text>
        </View>
        <Animated.View
          style={{
            transform: [{
              rotate: this.state.rotation.interpolate({inputRange: [-800, 0, 800], outputRange: ['-360deg', '0deg', '360deg']})
            }]
          }}>
          <Image
            style={styles.image}
            source={{ uri: 'http://i.imgur.com/7OJMY8q.png' }}/>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    textAlign: "center"
  },
  textLayout: {
    position: 'absolute',
    top: 100
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: 'contain'
  }
});
