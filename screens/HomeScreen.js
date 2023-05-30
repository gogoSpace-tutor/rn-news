import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Article from '../components/Article'

const HomeScreen = () => {
  return (
    <SafeAreaView >
      <Article/>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})