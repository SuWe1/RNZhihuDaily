import React ,{ Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    WebView,
} from 'react-native';

import LoadingView from './Loading';
 var NEWS_DETAIL_API_URL ='http://news-at.zhihu.com/api/4/news/';//json
 var DEFAULT_URL = 'http://daily.zhihu.com/story/';//webview api
export default class NewsDetail extends Component{
    // getInitialState(){
    //     return {
    //         newsData :{},
    //         loaded: false,
    //     }
    // }
    constructor(props){
        super(props);
        newsData={};
        this.state={
            loaded: false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this); 
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
        fetch(NEWS_DETAIL_API_URL+this.props.news.id)
        .then((response) => response.json())
        .then((responseData) =>{
            this.setState({
                newsData : responseData,
                loaded :true,
            });
        })
        .done();
    }

    render(){
        if(!this.state.loaded){
            return (
                <LoadingView/>
            );
        }
        var news=this.props.news;
        var newsContent =this.state.newsData.body;//新闻内容
        //    <ScrollView style={styles.pageContainer}>
        //       <View style={styles.container}>
        //         <Text style={styles.newsTitle}>{news.title}</Text>
        //       </View>

        //       <View style={styles.container}>
        //         <Image source={{uri: news.image}} style={styles.newPic}></Image>
        //       </View>

        //       <View style={styles.container}>
        //         <Text style={styles.newsContent}>{newsContent}</Text>
        //       </View>
        //     </ScrollView>
        return(
            <View style={{flex:1}}>
        <Text style={{height:40}}>简单的网页显示</Text>
          <WebView style={styles.webview_style} 
          source={{uri:DEFAULT_URL+this.props.news.id}}
          startInLoadingState={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          >
          </WebView>
      </View>
        );
    }
}
const styles= StyleSheet.create({
    pageContainer: {

    },
    container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    newsTitle : {
        color : '#4f4f4f',
        fontSize : 18,
        textAlign : 'left',
        marginTop : 10,
        marginBottom : 10,
        fontWeight : 'bold'
    },
    newsPic : {
        width : 180,
        height : 120,
        margin: 10,
    },
    newsContent : {
        margin : 10,
        marginTop : 10,
        flex: 1,
        color : '#4f4f4f',
        fontSize : 16,
        textAlign : 'left',
        writingDirection : 'ltr',
        lineHeight : 20
    },
    webview_style:{  
        marginTop : -38,
       backgroundColor:'#00ff00',   
    },
});