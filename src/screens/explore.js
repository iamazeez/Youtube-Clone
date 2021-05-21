import React from 'react';

import {Text,View,Dimensions,ScrollView,FlatList} from 'react-native';
import Header from './../components/Header';
import Card from './../components/Card';
import {useSelector} from 'react-redux';

const ExploreCard = (props) => {
    return (
        <View style={{margin:2 ,backgroundColor:'red',width:Dimensions.get('screen').width/2 - 10,borderRadius:4}}>
             <Text
             style={{padding:10,textAlign:'center',color:'#fff'}}
             >
                 {props.name}
            </Text>
        </View>
    )
}

const Explore = () => {
   
    const cardData = useSelector(state => {
        return state.cardData;
    });

    return (
        <View style={{flex:1}}>
             <Header />
             <ScrollView>
             <View style={{ marginTop:10,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
             <ExploreCard name='Game' />
             <ExploreCard name='Music' />
             <ExploreCard name='Educational' />
             <ExploreCard name='Funny' />
             <ExploreCard name='Tech' />
             <ExploreCard name='Science' />
             </View>
             
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
</ScrollView>
            
        </View>
    )
}

export default Explore;