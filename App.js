/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();
//Import Screens
import Home from './src/screens/Home';
import SearchScreen from './src/screens/SearchScreen';
import Subscribe from './src/screens/subscribe';
import Explore from './src/screens/explore';
import VideoPlayer from './src/screens/videoPlayer';

//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './src/reducers/reducer';

const store = createStore(reducer);


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
  <Tabs.Navigator 
  screenOptions={({ route }) => ({
    tabBarIcon: ({ color }) => {
      let iconName;

      if (route.name === 'home') {
        iconName = 'home';
      } else if (route.name === 'explore') {
        iconName = 'explore';
      }else if(route.name === 'subscribe'){
        iconName = 'subscriptions';
      }

      // You can return any component that you like here!
      return <MaterialIcons name={iconName} size={32} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'red',
    inactiveTintColor: 'gray',
  }}>
        <Tabs.Screen name='home' component={Home} />
        <Tabs.Screen name='explore' component={Explore} />
        <Tabs.Screen name='subscribe' component={Subscribe} />
  </Tabs.Navigator>
  )
}

const App = () => {


    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode='none'>
              <Stack.Screen name='rootHome' component={RootHome} />
              <Stack.Screen name='search' component={SearchScreen} />
              <Stack.Screen name='videoPlayer' component={VideoPlayer} />  
          </Stack.Navigator> 
       </NavigationContainer>
      </Provider>
 
    )
}

const styles = StyleSheet.create({
  fullScreen:{
      flex:1,
      backgroundColor:'#fff'
  }

});

export default App;
