import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  Navigator,
} from 'react-native';
 import NewsDetail from './NewsDetail';
 import LoadingView from './Loading';

 var NEWS_LIST_API_URL= 'http://news-at.zhihu.com/api/4/news/latest';//the latest news
//  var NEWS_LIST_API_URL= ' https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

 export default class NewsList extends Component{
    //  getInitialState(){
    //      //初始化数据
    //      //比较两行数据是否是同一个数据（===符号只比较基本类型数据的值，和引用类型的地址）来判断某行数据是否变化了。
    //      return{
    //          dataSource :new ListView.DataSource({
    //              rowHasChanged: (row1,row2) => row1!==row2
    //          }),
    //          loaded: false,
    //      }
    //  }
    constructor(props){
        super(props);
          this.state={
              dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2,
              }),
              loaded: false,
          };
          // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
         // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
         this.fetchData = this.fetchData.bind(this); 
        //  this.onPressNews=this.onPressNews.bind(this);
    }

     componentDidMount () {
         this.fetchData();
     }
     
     fetchData(){
         fetch(NEWS_LIST_API_URL)
          .then((response) => response.json())
          .then((responseData) => {
              this.setState({
                  dataSource :this.state.dataSource.cloneWithRows(responseData.stories),//把数据填入初始化的数据源去。stories
                  loaded:true,
              });
          })
          .catch((err) =>{
              console.log(err);
          })
          .done();
     }

     render(){
         if(!this.state.loaded){
             return(
                 <LoadingView/>
             );
         }
         return(
             //dataSource是列表的数据源，
             //而renderRow则逐个解析数据源中的数据，然后返回一个设定好格式的组件来渲染。
             //renderRow={ this.renderNews}，里面渲染的列里面的this不再是最外层的this，需要改成this.renderNews.bind(this)。
             <ListView
             dataSource={this.state.dataSource}
             renderRow={this.renderNews.bind(this)}
             style={styles.listView}/>
         );
     }

     renderNews(news){
         return(
             <TouchableOpacity onPress={() => this.onPressNews(news)}   >
               <View style={styles.pageContainer}>
                  <View style={[styles.container ,styles.newsItemContainer]}>
                     <Image
                     source={{uri: news.images[0]}}
                    // source={{uri: news.posters.thumbnail}}
                     style={styles.newsPic}
                     />
                     <View style={styles.rightContainer}>
                         <Text style={styles.newsTitle}>{news.title}</Text>
                         <Text style={styles.newsSummary}>{news.title}</Text>
                     </View>
                  </View>
               </View>
             </TouchableOpacity>
         );
     }

     onPressNews(news) {
        this.props.navigator.push({
            title: "News Detail",
            component: NewsDetail,
            passProps: {news},
        });
    }
 }

 const styles = StyleSheet.create({
    pageContainer: {
        marginLeft : 10,
        marginRight : 10,
    },
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    rightContainer: {
        flex: 1,
    },
    newsItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
    },
    listView: {
        marginTop : 65,
        backgroundColor: '#ffffff',
    },
    newsPic : {
        width : 90,
        height : 60,
        margin: 8,
    },
    newsTitle : {
        color : '#4f4f4f',
        fontSize : 15,
        textAlign : 'left',
    },
    newsSummary : {
        color : '#bababa',
        fontSize : 10,
        textAlign : 'left',
    },
});
