import React, { Component, PropTypes } from 'react-native';

const {
  TextInput,
  StyleSheet,
  View
} = React;

export default class FlexboxLayoutDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.column, styles.teal, styles.flex2]}/>
          <View style={[styles.column, styles.teal]}/>
        </View>
        <View style={[styles.row, styles.flex2]}>
          <View style={[styles.column, styles.yellow]}/>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, styles.blue]}/>
          <View style={[styles.column, styles.blue]}/>
          <View style={[styles.column, styles.blue, styles.flex2]}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    flex: 1,
    flexDirection: "column",
    padding: 10,
    marginTop: 65
  },
  row: {
    flexDirection: "row",
    flex: 1
  },
  flex2: {
    flex: 2
  },
  column: {
    flex: 1,
    margin: 10
  },
  teal: {
    backgroundColor: "#1abc9c"
  },
  yellow: {
    backgroundColor: "#f1c40f"
  },
  blue: {
    backgroundColor: "#3498db"
  }
});
