import React from 'react';

import {Text,View,ScrollView} from 'react-native';

//Components Here
import Header from './../components/Header';
import Card from './../components/Card';
import SearchScreen from '../components/SearchHeader';
import MiniCard from './../components/MiniCard';

const Home = () =>{
   /*
    return (
      <View style={{flex:1}}>
          <Header />
          <ScrollView>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
          </ScrollView>
      </View>
    )*/

    return (
        <View style={{flex:1}}>
        <SearchScreen />
        <ScrollView>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
        </ScrollView>
        
        </View>
    )

}

export default Home;