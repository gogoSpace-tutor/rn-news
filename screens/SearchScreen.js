import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { fetchData } from '../services/api';
import Article from '../components/Article';
import Error from '../components/Error';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const newsImage = {
    uri: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
  };

  const fetchDataAndSetArticles = async () => {
    try {
      setLoading(true);
      const data = await fetchData(searchText);
      setArticles(data);
    } catch (error) {
      console.log(error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataAndSetArticles();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={fetchDataAndSetArticles}
      />
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
          ListEmptyComponent={<Text>No articles available...</Text>}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  errorMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
