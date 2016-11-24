import React ,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
export default class Loading extends Component{
    render(){
        return (
            <View style={styles.container}>
              <Text>Loading...</Text>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#bababa',
        backgroundColor: '#ffffff',
        fontSize: 12,
    },
});