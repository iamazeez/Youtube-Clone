import React,{useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text,View,TextInput,FlatList,ActivityIndicator} from 'react-native';

import MiniCard from './MiniCard';

//GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY] HTTP/1.1



Ionicons.loadFont();

const SearchScreen = () => {
    const [value,setValue] = useState('');
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    
    //Enter your api key here
    const apiKey = "";

    const fetchData = () => {
        setLoading(true);
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=${apiKey}`)
        .then(res => res.json())
        .then(result => {
            setData(result.items)
            setLoading(false);
           // console.log(result);
        }).catch(err => console.log(err));
    }

    if(data == ""){
        setData('songs');
        fetchData();
    }

     return (
         <View style={{flex:1}}>
         <View style={{
            height:55,
            backgroundColor:'red',
            flexDirection:'row',
            justifyContent:'space-between',
            elevation:4,
            alignItems:'center',
            padding:8
        }}>

        <Ionicons name='md-arrow-back' color='#fff' size={28} />
        <TextInput value={value} onChange={(text) => setValue(text)} style={{width:'70%', backgroundColor:"#fff"}}  />
        <Ionicons name='md-send' onPress={() => fetchData()} color='#fff' size={28} />
        </View>
        { loading ? <ActivityIndicator size="large" color="red" /> : null }
        <FlatList 
        data={data}
        renderItem={({item}) => {
            return <MiniCard 
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            />
        }}
        keyExtractor={({item})=>item.id.videoId}
        />

        
        </View>
     )
}

export default SearchScreen;