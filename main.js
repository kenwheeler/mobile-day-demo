'use strict';

let React = require('react-native');

let {
  AppRegistry,
  Platform,
  Navigator,
  StyleSheet,
  Text,
  View,
  PropTypes
} = React;

const UI_COLOR = "#21257c";

import HomeScreen from './src/index';
import RouteMapper from './src/utils/route-mapper';

class App extends React.Component {
  static childContextTypes = {
    uiColor: PropTypes.string
  };
  getChildContext() {
    return {
      uiColor: UI_COLOR
    }
  }
  _renderScene(route, navigator) {
    var Component = route.component;
    return (
      <Component {...route.props} navigator={navigator} route={route} />
    );
  }
  render() {
    return (
      <Navigator
        initialRoute={{
          component: HomeScreen,
          title: 'Demo'
        }}
        renderScene={this._renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={RouteMapper}
            navigationStyles={Navigator.NavigationBar.StylesIOS}
            style={styles.navBar}
          />
        }
      />
    );
  }
}

let styles = StyleSheet.create({
  navBar: {
    backgroundColor: UI_COLOR
  }
});

AppRegistry.registerComponent('main', () => App);
