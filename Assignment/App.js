import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {View } from 'react-native';
import 'tailwindcss/tailwind.css';
import TabNavigation from './Apps/Navigations/TabNavigation';

export default function App() {
  return (
    <View className="flex-1  bg-white">
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}


