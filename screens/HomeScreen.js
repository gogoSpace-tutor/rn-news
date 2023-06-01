import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import { fetchData } from '../services/api';
import Error from '../components/Error';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndSetArticles = async () => {
      const data = await fetchData('bitcoin');
      setArticles(data);
      setLoading(false);
    };

    fetchDataAndSetArticles();
  }, []);

  const renderItem = ({ item }) => (
    <Article
      urlToImage={item.urlToImage}
      title={item.title}
      description={item.description}
      author={item.author}
      publishedAt={item.publishedAt}
      sourceName={item.source.name}
      url={item.url}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loader />
      ) : articles.length === 0 ? (
        <Error text="No articles available..." />
      ) : (
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          ListEmptyComponent={<Text>No articles available.</Text>}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
