import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
// import { getNews } from '../services/api';
import axios from 'axios';
// const axios = require('axios');

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=393772655bb24d5aab65ed7352adba89'
      )
      .then(function (response) {
        // console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  article: {},
});
