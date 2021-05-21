import React from 'react';

import {Text,View,Image,Dimensions,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useTheme} from '@react-navigation/native';
MaterialIcons.loadFont();


const Card = (props) => {
    const navigation = useNavigation();
 
    const {colors} = useTheme();


    return (
        <TouchableOpacity onPress={() => navigation.navigate('videoPlayer',{videoId:props.videoId,title:props.title})}>
            <View style={{elevation:2}} >
                <Image
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style={{width:Dimensions.get('screen').width,height:200}}
                />
                <View style={{flexDirection:'row',margin:8,alignItems:'center'}}>
                    <View style={{alignItems:'center'}}>
                        <MaterialIcons name='account-circle' size={32} color='red' />
                    </View>
                    
                    <View style={{marginLeft:15}}>
                        <Text 
                        style={{fontSize:16,width:Dimensions.get('screen').width-80,color:colors.textColor}}
                        ellipsizeMode='tail'
                        numberOfLines={2}
                        >{props.title}</Text>
                        <Text style={{fontSize:12,color:colors.textColor}}>{props.channel}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>    
    )
}

export default Card;