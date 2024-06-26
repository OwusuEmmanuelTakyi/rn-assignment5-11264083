import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <View className='flex-row items-center  justify-between pt-10 pl-4 pr-7'>
      <View className='flex-row items-center'>
        <Image
          source={require('../../assets/profile.png')}
          className='w-12 h-12 rounded-full'
        />
        <View className='ml-5'>
          <Text className='text-sm text-gray-500'>Welcome back,</Text>
          <Text className='text-lg font-semibold'>Eric Atsu</Text>
        </View>
      </View>
      <FontAwesomeIcon icon={faSearch} size={20} className='text-gray-600 mr-5' />
    </View>
  );
};

export default Header;
