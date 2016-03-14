import React, { Component, PropTypes } from 'react-native';

const {
  ListView,
  RecyclerViewBackedScrollView,
  StyleSheet,
  View,
  Text
} = React;

const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const generateRows = () => Array.apply(null, Array(100)).map((_, val) => val);

export default class ListViewDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ds: dataSource.cloneWithRows(generateRows())
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          dataSource={this.state.ds}
          renderRow={(index) => (
            <View style={styles.row}>
              <Text style={styles.rowText}>Cell #{index}</Text>
            </View>
          )}
          renderScrollComponent={(props) => <RecyclerViewBackedScrollView {...props} />}
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}/>
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
  listView: {
    backgroundColor: '#efefef',
    flex: 1
  },
  row: {
   flexDirection: 'row',
   justifyContent: 'center',
   padding: 10,
   backgroundColor: '#F6F6F6'
 },
 rowText: {
   flex: 1
 },
 separator: {
   height: 1,
   backgroundColor: '#CCCCCC'
 }
});
