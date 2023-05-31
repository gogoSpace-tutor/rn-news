const axios = require('axios');
const { useState } = require('react');

const [articles, setArticles] = useState([]);
const getNews = () => {
  // Make a request for a user with a given ID
  axios
    .get('https://newsapi.org/v2/everything')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});

  // Want to use async/await? Add the `async` keyword to your outer function/method.
  // async function getUser() {
  //   try {
  //     const response = await axios.get('/user?ID=12345');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
};
