import React ,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

import NewsList from './NewsList';
import LoadingView from './Loading';

var TabBarItemIOS = TabBarIOS.Item;
export default class TabBar extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab : 'blueTab',
            presses : 0,
        }
    }

    render(){
        return (
        <View style={{flex:1}}>
            <TabBarIOS selectedTab={this.state.selectedTab}>
              <TabBarItemIOS 
              name="blueTab"
            //   icon={require('./Images/favorites.png')}
              systemIcon="favorites"
              accessibilityLabel ="Blue Tab"
              selected ={this.state.selectedTab == 'blueTab'}
              onPress={() =>{
                  this.setState({
                      selectedTab : 'blueTab',
                  });
              }}
              >
              <NavigatorIOS 
              style={[styles.container,{flex :1,marginTop :0}]}
              initialRoute={{
                  title : 'News',
                  component : NewsList,
              }}
              />
              </TabBarItemIOS>
              <TabBarItemIOS 
              name="redTab"
            //   icon={require('./Images/history.png')}
              systemIcon="history"
              accessibilityLabel ="Red Tab"
              selected ={this.state.selectedTab == 'redTab'}
              onPress={() =>{
                  this.setState({
                      selectedTab : 'redTab',
                  });
              }}
              >
              <LoadingView/>
              </TabBarItemIOS>
              <TabBarItemIOS 
              name="greenTab"
            //   icon={require('./Images/more.png')}
              systemIcon="more"
              accessibilityLabel ="Green Tab"
              selected ={this.state.selectedTab == 'greenTab'}
              onPress={() =>{
                  this.setState({
                      selectedTab : 'greenTab',
                  });
              }}
              >
              <LoadingView/>
              </TabBarItemIOS>
            </TabBarIOS>
        </View>
        );
    }

}
const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});