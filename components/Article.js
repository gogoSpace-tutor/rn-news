import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import moment from 'moment';
import * as WebBrowser from 'expo-web-browser';

const Article = React.memo(
  ({
    urlToImage,
    title,
    description,
    author,
    publishedAt,
    sourceName,
    url,
  }) => {
    const openNews = async () => {
      if (url) {
        let result = await WebBrowser.openBrowserAsync(url);
      }
    };
    return (
      <Pressable style={styles.container} onPress={openNews}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: urlToImage }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>

          <View style={styles.data}>
            <Text style={styles.heading}>
              by: <Text style={styles.author}>{author}</Text>
            </Text>
            <Text style={styles.date}>
              {moment(publishedAt).format('MMMM Do YYYY')}
            </Text>
          </View>

          <View style={styles.sourceContainer}>
            <Text>
              source: <Text style={styles.source}>{sourceName}</Text>
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
);

export default Article;

const styles = StyleSheet.create({
  container: {
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
  author: {
    fontWeight: '700',
  },
  date: {
    fontWeight: '700',
    color: 'red',
    fontSize: 14,
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
