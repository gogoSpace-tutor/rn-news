import axios from 'axios';

export const getNews = (searchText) => {
  const BASE_URL = 'https://newsapi.org/v2/everything';
  return axios.get(BASE_URL, {
    params: {
      q: searchText,
      apiKey: '393772655bb24d5aab65ed7352adba89',
    },
  });
};

export const fetchData = async (
  searchText,
  page = 1,
  pageSize = 10,
  sortBy = 'publishedAt',
  sortOrder = 'desc'
) => {
  try {
    const response = await getNews(searchText);
    let articles = response.data.articles;

    articles = articles.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      } else {
        return a[sortBy] < b[sortBy] ? 1 : -1;
      }
    });

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    articles = articles.slice(startIndex, endIndex);

    return articles;
  } catch (error) {
    console.log(error);
    return [];
  }
};
