/** @format */

const router = require('express').Router();
const verify = require('./verifyToken');
const NEWS_KEY = process.env.NEWS_KEY;
const newsUri = `https://newsapi.org/v2/top-headlines?language=en&q=covid&sortBy=popularity&apiKey=45eef3aec94b4f2c9adc74833617e141`;

const fetch = require('cross-fetch');

const fetchNews = async () => {
  try {
    const response = await fetch(newsUri);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

router.get('/news', async (req, res) => {
  try {
    const news = await fetchNews();
    res.json(news);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
