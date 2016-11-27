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
  View,
  Navigator
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import NewsList from './App/NewsList';
export default class zhihuDaily extends Component {
  render() {
    return (
      // <NewsList/>
      <ScrollableTabView
      tabBarPosition="bottom"
      renderTabBar={() => <DefaultTabBar/>}>
      <Text tabLabel='favorites'/>
      <Text tabLabel='history'/>
      <Text tabLabel='more'/>
    </ScrollableTabView>
    );
  }
}



AppRegistry.registerComponent('zhihuDaily', () => zhihuDaily);
