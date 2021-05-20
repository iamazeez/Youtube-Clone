import React from 'react';
import {Text,View,Dimensions} from 'react-native';
import { webview } from 'react-native-webview';


const VideoPlayer = ({route}) => {
    return (
        <View style={{flex:1}}>
             <View style={{width:'100%',height:200}}>
                  <webview javascriptEnabled={true}
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

        </View>
    )
}

export default VideoPlayer;