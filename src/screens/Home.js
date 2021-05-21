import React from 'react';

import {Text,View,ScrollView,FlatList} from 'react-native';

//Components Here
import Header from './../components/Header';
import Card from './../components/Card';
import {useSelector} from 'react-redux';

const Home = () =>{

    const cardData = useSelector(state => {
        return state.cardData;
    });

    console.log('Card data = ' + cardData)
   
    return (
      <View style={{flex:1}}>
          <Header />
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

export default Home;