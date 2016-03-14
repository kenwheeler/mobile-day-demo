import React, { Component, PropTypes } from 'react-native';

import FlexboxLayoutDemo from './scenes/flexbox-layout';
import ListViewDemo from './scenes/list-view';
import TextInputDemo from './scenes/text-input';
import LayoutAnimationDemo from './scenes/layout-animation';
import PanResponderDemo from './scenes/pan-responder';

import Button from './common/button';

const {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

export default class HomeScreen extends Component {
  _pushNext(component, title) {
    this.props.navigator.push({
      component,
      title,
      props: this.props
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          <Button
            onPress={this._pushNext.bind(this, FlexboxLayoutDemo, 'Flexbox Demo')}>
            Flexbox
          </Button>
          <Button
            onPress={this._pushNext.bind(this, ListViewDemo, 'List View Demo')}>
            List View
          </Button>
          <Button
            onPress={this._pushNext.bind(this, TextInputDemo, 'Text Input')}>
            Text Input
          </Button>
          <Button
            onPress={this._pushNext.bind(this, LayoutAnimationDemo, 'Layout Animation')}>
            Layout Animation
          </Button>
          <Button
            onPress={this._pushNext.bind(this, PanResponderDemo, 'Pan Responder & Animated')}>
            Pan Responder & Animated
          </Button>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    alignItems: 'stretch'
  },
  scrollView: {
    backgroundColor: '#efefef',
    flex: 1
  },
  contentContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
