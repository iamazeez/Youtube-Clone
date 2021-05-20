import React from 'react';

import {Text,View,Image,Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();


const Card = () => {
    return (
        <View style={{elevation:2}} >
            <Image
            source={{uri:"https://images.unsplash.com/photo-1607459726370-d1abfcda1370?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}}
            style={{width:Dimensions.get('screen').width,height:200}}
            />
            <View style={{flexDirection:'row',margin:8,alignItems:'center'}}>
                <View style={{alignItems:'center'}}>
                    <MaterialIcons name='account-circle' size={32} color='red' />
                </View>
                
                <View style={{marginLeft:15}}>
                    <Text 
                    style={{fontSize:16,width:Dimensions.get('screen').width-80}}
                    ellipsizeMode='tail'
                    numberOfLines={2}
                    >I am the titleI am the titleI am the titleI am the titleI am the titleI am the titleI am the titleI am the titleI am the titleI am the titleI am the title</Text>
                    <Text style={{fontSize:12}}>I am short Descreption</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;