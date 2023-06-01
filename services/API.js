import axios from 'axios';

export const getNews = (searchText) => {
  const BASE_URL = 'https://newsapi.org/v2/everything';
  return axios.get(BASE_URL, {
    params: {
      q: searchText,
      apiKey: 'b4800d6de30f43328c0d6145f8edcf40',
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
