import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import { fetchData } from '../services/api';
import Error from '../components/Error';
import Loader from '../components/Loader';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [sortBy, setSortBy] = useState('publishedAt');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchDataAndSetArticles = async () => {
      const data = await fetchData(
        'bitcoin',
        page,
        pageSize,
        sortBy,
        sortOrder
      );
      setArticles((prevArticles) => [
        ...prevArticles,
        ...data.map((article) => ({ ...article, id: uuidv4() })),
      ]);
      setLoading(false);
    };

    fetchDataAndSetArticles();
  }, [page, pageSize, sortBy, sortOrder]);

  const loadMoreArticles = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const sortArticles = (param) => {
    if (param === sortBy) {
      setSortOrder((prevSortOrder) =>
        prevSortOrder === 'asc' ? 'desc' : 'asc'
      );
    } else {
      setSortBy(param);
      setSortOrder('asc');
      setPage(1);
    }
    setArticles([]);
    setLoading(true);
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
      <View style={styles.sortButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === 'publishedAt' && styles.sortButtonActive,
            sortOrder === 'desc' &&
              sortBy === 'publishedAt' &&
              styles.sortButtonDesc,
          ]}
          onPress={() => sortArticles('publishedAt')}>
          <Text style={styles.sortButtonText}>Sort by Published At</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === 'title' && styles.sortButtonActive,
            sortOrder === 'desc' && sortBy === 'title' && styles.sortButtonDesc,
          ]}
          onPress={() => sortArticles('title')}>
          <Text style={styles.sortButtonText}>Sort by Title</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sortButton,
            sortBy === 'author' && styles.sortButtonActive,
            sortOrder === 'desc' &&
              sortBy === 'author' &&
              styles.sortButtonDesc,
          ]}
          onPress={() => sortArticles('author')}>
          <Text style={styles.sortButtonText}>Sort by Author</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <Loader />
      ) : articles.length === 0 ? (
        <Error text="No articles available..." />
      ) : (
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text>No articles available.</Text>}
          onEndReached={loadMoreArticles}
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
  sortButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  sortButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#FACC15',
  },
  sortButtonActive: {
    backgroundColor: '#EA580C',
    color: '#fff',
  },
  sortButtonDesc: {
    backgroundColor: 'darkgray',
  },
  sortButtonText: {
    fontWeight: 'bold',
  },
});
