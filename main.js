'use strict';

let React = require('react-native');

let {
  AppRegistry,
  Platform,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React;

import HomeScreen from './src/index';
import RouteMapper from './src/utils/route-mapper';

class App extends React.Component {
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
    backgroundColor: '#e74c3c'
  }
});

AppRegistry.registerComponent('main', () => App);
