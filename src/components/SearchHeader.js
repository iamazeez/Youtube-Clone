import React,{useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View,TextInput,FlatList,ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MiniCard from './MiniCard';
import {useSelector,useDispatch} from 'react-redux';

//GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY] HTTP/1.1



Ionicons.loadFont();

const SearchScreen = () => {
    const [value,setValue] = useState('');
    const [loading,setLoading] = useState(false);
    //const [data,setData] = useState([]);
    const dispatch = useDispatch();
    const data = useSelector(state => {
       return state;
    });
    
    const navigation = useNavigation();
    //Enter your api key here
    const apiKey = "AIzaSyDFgaZr6d-fKkKgInhbevK3pEB8gUJKfnM";
    
    const fetchData = () => {
       
        setLoading(true);
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=${apiKey}`)
        .then(res => res.json())
        .then(result => {
           // setData(result.items)
            dispatch({type:'add',payload:result.items})
            setLoading(false);
           //console.log(JSON.stringify(result));
        }).catch(err => console.log('Error => ' + err));
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

        <Ionicons onPress={() => navigation.goBack()} name='md-arrow-back' color='#fff' size={28} />
        <TextInput value={value} onChangeText={(e) => setValue(e)} style={{width:'70%', backgroundColor:"#fff",color:'#000'}}  />
        <Ionicons name='md-send' onPress={() => fetchData()} color='#fff' size={28} />
        </View>
        { loading ? <ActivityIndicator size="large" color="red" /> :  
        <FlatList 
        data={data}
        renderItem={({item}) => {
            return <MiniCard 
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            />
        }}
        keyExtractor={(item)=>item.id.videoId}
        />
    } 
        </View>
     )
}

export default SearchScreen;