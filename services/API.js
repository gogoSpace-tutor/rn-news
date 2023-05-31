const axios = require('axios');
const [articles, setArticles] = useState([]);

export const getNews = () => {
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
