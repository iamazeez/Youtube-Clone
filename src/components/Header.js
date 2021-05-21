import React from 'react';

import {Text,View} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';



const appColor = '#212121';
AntDesign.loadFont();
Ionicons.loadFont();
MaterialIcons.loadFont();

const Header = () => {
    const {colors} = useTheme();
    const navigation = useNavigation();

    const currentTheme = useSelector(state => {
        return state.theme;
    });
    const dispatch = useDispatch();

    return (
        <View style={{
            height:55,
            backgroundColor:colors.headerColor,
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
             <Ionicons name='md-search' onPress={() => navigation.navigate('search')} size={28} color='#fff' />
             <MaterialIcons onPress={() => dispatch({type:'change-theme',payload:!currentTheme})} name='account-circle' size={28} color='#fff' />
             </View>
        </View>
    )
}

export default Header;