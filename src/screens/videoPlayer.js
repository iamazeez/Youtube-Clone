import React from 'react';
import {Text,View,Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';
import {useSelector} from 'react-redux'
import Card from './../components/Card';
const VideoPlayer = ({route}) => {

     console.log(route)
     const cardData = useSelector(state => {
          return state;
      });

    return (
        <View style={{flex:1}}>
             <View style={{width:'100%',height:200}}>
                  <WebView javascriptEnabled={true}
                  domStorageEnabled={true}
                  source={{uri:`https://www.youtube.com/embed/${route.videoId}`}}
                  />
             </View>
             <Text 
             style={{fontSize:20,width:Dimensions.get('screen').width - 50,margin:5}}
             ellipsizeMode='tail'
             numberOfLines={3}
             >
                  {route.title}
             </Text>
             
             <FlatList 
          data={cardData}
          renderItem={({item}) => {
            return <Card 
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            />
        }}
        keyExtractor={(item)=>item.id.videoId}    
          />

        </View>
    )
}

export default VideoPlayer;