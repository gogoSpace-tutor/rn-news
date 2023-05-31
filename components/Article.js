import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const newsImage = {
  uri: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
};

const Article = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={newsImage} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>News Application</Text>
        <Text style={styles.description}>Here we'll have a discription </Text>

        <View style={styles.data}>
          <Text style={styles.heading}>
            by: <Text style={styles.value}>Author</Text>
          </Text>
          <Text style={styles.date}>June 01 2023</Text>
        </View>

        <View style={styles.sourceContainer}>
          <Text>
            source: <Text style={styles.source}>some source</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,

    backgroundColor: '#fff',
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  imageContainer: {
    width: '95%',
    aspectRatio: 16 / 9,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: '700',
  },
  date: {
    fontWeight: '700',
    color: 'red',
    fontSize: 16,
  },
  source: {
    marginTop: 10,
    color: 'red',
    fontSize: 16,
  },
  sourceContainer: {
    marginTop: 10,
  },
});
