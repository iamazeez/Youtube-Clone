import React from 'react';

import {Text,View} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const appColor = '#212121';
AntDesign.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();

const Header = () => {
    return (
        <View style={{
            height:55,
            backgroundColor:'red',
            flexDirection:'row',
            justifyContent:'space-between',
            elevation:4
        }}>
             <View style={{flexDirection:'row', alignItems:'center',margin:5,marginLeft:25}}>
                 <AntDesign name='youtube' size={32} color='#fff' />
                  <Text style={{fontSize:18 ,marginLeft:15,color:'#fff'}}>Youtube</Text>
             </View>
             <View style={{alignItems:'center',margin:5,marginRight:15,width:120,justifyContent:'space-between',flexDirection:'row'}}>
             <Ionicons name='md-videocam' size={28} color='#fff' />
             <Ionicons name='md-search' size={28} color='#fff' />
             <MaterialIcons name='account-circle' size={28} color='#fff' />
             </View>
        </View>
    )
}

export default Header;