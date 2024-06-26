import { Image, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import CardScreen from '../Screens/CardScreen';
import StatScreen from '../Screens/StatScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import homeIcon from '../../assets/home.png';
import Mycard from '../../assets/myCards.png';
import Statistics from '../../assets/statictics.png';
import Settings from '../../assets/settings.png';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} className=''>
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
        <Tab.Screen name='My card' component={CardScreen}
        options={{
          tabBarLabel:({color}) =>(
             <Text style={{color:color}}>My Card</Text>
          ),
          tabBarIcon: ({ color, size }) => (
             <Image source={Mycard} style={{ width: size, height: size, tintColor: color }} />
           ),
        }}
        />
        <Tab.Screen name='Statistics' component={StatScreen} 
        options={{
          tabBarLabel:({color}) =>(
             <Text style={{color:color}}>Statistics</Text>
          ),
          tabBarIcon: ({ color, size }) => (
             <Image source={Statistics} style={{ width: size, height: size, tintColor: color }} />
           ),
        }}
        />
        <Tab.Screen name='Settings' component={SettingsScreen} 
        options={{
          tabBarLabel:({color}) =>(
             <Text style={{color:color}}>Settings</Text>
          ),
          tabBarIcon: ({ color, size }) => (
             <Image source={Settings} style={{ width: size, height: size, tintColor: color }} />
           ),
        }}
        />
    </Tab.Navigator>
  )
}