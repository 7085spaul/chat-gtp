import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardCard = ({ title, count }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count} items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 16,
    color: '#555',
  },
});

export default DashboardCard;
