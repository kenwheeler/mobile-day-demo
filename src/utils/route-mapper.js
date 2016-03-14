'use strict';

let React = require('react-native');

let {
  AppRegistry,
  Image,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

export default {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Image
          style={styles.icon}
          source={{uri: "http://i.imgur.com/pxLfV00.png"}}
        />
      </TouchableOpacity>
    );
  },
  RightButton: function(route, navigator, index, navState) {
    return null;
  },
  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  }
};

let styles = StyleSheet.create({
  navBarText: {
    fontSize: 16,
    marginVertical: 10
  },
  navBarTitleText: {
    color: '#ffffff',
    fontWeight: '500'
  },
  navBarLeftButton: {
    padding: 10
  },
  navBarRightButton: {
    padding: 10
  },
  navBarButtonText: {
    color: '#ffffff'
  },
  icon: {
    width: 24,
    height: 24
  }
});
