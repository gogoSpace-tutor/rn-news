import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import { fetchData } from '../services/api';
import Error from '../components/Error';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    const fetchDataAndSetArticles = async () => {
      const data = await fetchData('bitcoin', page, pageSize);
      setArticles((prevArticles) => [...prevArticles, ...data]);
      setLoading(false);
    };

    fetchDataAndSetArticles();
  }, [page, pageSize]);

  const loadMoreArticles = () => {
    setPage((prevPage) => prevPage + 1);
  };

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
          onEndReached={loadMoreArticles} // Implement infinite scrolling
          onEndReachedThreshold={0.5}
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
