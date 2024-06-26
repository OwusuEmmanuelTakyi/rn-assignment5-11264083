import { Image, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import CardScreen from '../Screens/CardScreen';
import StatScreen from '../Screens/StatScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import homeIcon from '../../assets/home.png';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Home' component={HomeScreen} 
           options={{
             tabBarLabel:({color}) =>(
                <Text style={{color:color}}>Home</Text>
             ),
             tabBarIcon: ({ color, size }) => (
                <Image source={homeIcon} style={{ width: size, height: size, tintColor: color }} />
              ),
           }}
        />
        <Tab.Screen name='My card' component={CardScreen} />
        <Tab.Screen name='Statistics' component={StatScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}