import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp, faArrowDown, faDollarSign, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';


const ActionButton = ({ icon, label }) => (
  <TouchableOpacity className='items-center mx-2'>
    <View className='w-16 h-16 rounded-full bg-gray-100 justify-center items-center'>
      <FontAwesomeIcon icon={icon} size={24} className='text-gray-600' />
    </View>
    <Text className='mt-2 text-sm text-gray-800'>{label}</Text>
  </TouchableOpacity>
);

const ActionButtons = () => {
  return (
    <View className='flex-row justify-around mt-4'>
      <ActionButton icon={faArrowUp} label="Sent" />
      <ActionButton icon={faArrowDown} label="Receive" />
      <ActionButton icon={faDollarSign} label="Loan" />
      <ActionButton icon={faCloudUploadAlt} label="Topup" />
    </View>
  );
};

export default ActionButtons;
