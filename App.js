/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Dimensions,
  View,
} from 'react-native';

//Import Screens
import Home from './src/screens/Home';



const App = () => {
    return (
       <View style={styles.fullScreen}>
         <Home />
       </View>
    )
}

const styles = StyleSheet.create({
  fullScreen:{
      flex:1,
      backgroundColor:'#fff'
  }

});

export default App;
