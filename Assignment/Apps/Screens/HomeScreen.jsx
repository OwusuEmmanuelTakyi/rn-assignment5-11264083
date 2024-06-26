import { View, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../HomeScreen/Header'
import ActionButtons from '../HomeScreen/ActionButtons';
import TransactionItem from '../HomeScreen/TransactionItem';

const transactions = [
    {
      id: 1,
      icon: require('../../assets/apple.png'), // Adjust the path as needed
      name: 'Apple Store',
      category: 'Entertainment',
      amount: -5.99,
    },
    {
      id: 2,
      icon: require('../../assets/spotify.png'), // Adjust the path as needed
      name: 'Spotify',
      category: 'Music',
      amount: -12.99,
    },
    {
      id: 3,
      icon: require('../../assets/moneyTransfer.png'), // Adjust the path as needed
      name: 'Money Transfer',
      category: 'Transaction',
      amount: 300,
    },
    {
      id: 4,
      icon: require('../../assets/grocery.png'), // Adjust the path as needed
      name: 'Grocery',
      category: '',
      amount: -88,
    },
  ];
export default function HomeScreen() {
    const [showSettings, setShowSettings] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (showSettings) {
    return <SettingsScreen isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
  }
  return (
    <View>
        <View className="mt-20px">
           <Header />
        </View> 

        <View className='pt-10 items-center w-150'>
        <Image
          source={require('../../assets/Card.png')}
          className=' '
        />
        </View>
        <ActionButtons />
        <ScrollView>
        <View className='mt-4'>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              icon={transaction.icon}
              name={transaction.name}
              category={transaction.category}
              amount={transaction.amount}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}