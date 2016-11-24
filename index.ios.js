/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NewsList from './App/NewsList';
import TabBar from './App/TabBar';
import NewsDetail from './App/NewsDetail';
export default class zhihuDaily extends Component {
  render() {
    return (
      // <NewsList/>
      <TabBar style={styles.container}/>
      // <NewsDetail/>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

AppRegistry.registerComponent('zhihuDaily', () => zhihuDaily);
