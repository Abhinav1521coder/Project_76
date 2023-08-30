import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPicScreen from "./screens/DailyPic";
import StarMapScreen from "./screens/StarMap";
import SpaceCraftsScreen from "./screens/SpaceCrafts";

 function App() {
  return (
    <NavigationContainer>
      <StackNavigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <StackScreen name="Home" component={HomeScreen}/>
        <StackScreen name="DailyPic" component={DailyPicScreen}/>
        <StackScreen name="StarMap" component={StarMapScreen}/>
        <StackScreen name="SpaceCrafts" component={SpaceCraftsScreen}/>
      </StackNavigator>
    </NavigationContainer>
  );
}

export default App;
