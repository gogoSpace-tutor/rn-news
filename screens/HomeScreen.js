import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Article from '../components/Article';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Article style={styles.article} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  article: {},
});
