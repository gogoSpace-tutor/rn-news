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

export const fetchData = async (searchText) => {
  try {
    const response = await getNews(searchText);
    return response.data.articles;
  } catch (error) {
    console.log(error);
    return [];
  }
};
