import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import DashboardCard from '../components/DashboardCard';
import NewsCard from '../components/NewsCard';

const DiscoverScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <DashboardCard title="Trending Products" count={20} />
      <DashboardCard title="News Articles" count={50} />
      <NewsCard title="Latest Technology" content="Some exciting news about AI!" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default DiscoverScreen;
