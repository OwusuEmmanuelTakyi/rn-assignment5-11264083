import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TransactionItem = ({ icon, name, category, amount }) => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </View>
    <Text style={[styles.amount, { color: amount < 0 ? '#ef4444' : '#10b981' }]}>
      {amount < 0 ? `- $${Math.abs(amount).toFixed(2)}` : `$${amount.toFixed(2)}`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    fontSize: 14,
    color: '#6b7280',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TransactionItem;
