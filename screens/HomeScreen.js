import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import { fetchData } from '../services/api';
import Error from '../components/Error';

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

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : articles.length === 0 ? (
        <Error />
      ) : (
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
          initialNumToRender={10}
          windowSize={5}
          maxToRenderPerBatch={5}
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
