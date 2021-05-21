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

import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();
//Import Screens
import Home from './src/screens/Home';
import SearchScreen from './src/screens/SearchScreen';
import Subscribe from './src/screens/subscribe';
import Explore from './src/screens/explore';
//import VideoPlayer from './src/screens/videoPlayer';

//redux
import {Provider, useSelector} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import {reducer} from './src/reducers/reducer';
import {changeTheme} from './src/reducers/themeReducer';


const rootReducer = combineReducers({
   cardData:reducer,
   theme:changeTheme
});

const store = createStore(rootReducer);


//Reduc ends

//Dark mode
const custoumDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:'#404040',
    textColor:'#fff'
  }
}
//Light theme
const custoumDefaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:'red',
    textColor:'#000'
  }
 }



//Navigation
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


export default () => {
  return (
    <Provider store={store}>
    <App />
    </Provider>
  )
}



const App = () => {

  let currentTheme = useSelector(state => {
    return state.theme;
  })
  
   
    return (
        <NavigationContainer theme={ currentTheme ? custoumDarkTheme : custoumDefaultTheme }>
          <Stack.Navigator headerMode='none'>
              <Stack.Screen name='rootHome' component={RootHome} />
              <Stack.Screen name='search' component={SearchScreen} />
           {  /*  <Stack.Screen name='videoPlayer' component={VideoPlayer} /> */ }
          </Stack.Navigator> 
       </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  fullScreen:{
      flex:1,
      backgroundColor:'#fff'
  }

});

//export default App;
