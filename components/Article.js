import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const newsImage = { uri: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'};

const Article = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={newsImage}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>News Application</Text>
      <Text style={styles.description}>Here we'll have a discription </Text>
    </SafeAreaView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  imageContainer: {
    width: '90%',
    aspectRatio: 16 / 9, // Пропорції зображення
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  }
});
