/** @format */

const dotenv = require('dotenv');
dotenv.config();
const router = require('express').Router();
const verify = require('./verifyToken');
const NEWS_KEY = process.env.NEWS_KEY;
const newsUri = `https://newsapi.org/v2/top-headlines?language=en&q=covid&sortBy=popularity&apiKey=${NEWS_KEY}`;
const countryUri =
  'https://test.api.amadeus.com/v1/duty-of-care/diseases/covid19-area-report?countryCode=';
const tokenUri = 'https://test.api.amadeus.com/v1/security/oauth2/token';

const data = `grant_type=client_credentials&client_id=${process.env.AMADEUS_KEY}&client_secret=${process.env.AMADEUS_SECRET}`;

const fetch = require('cross-fetch');
const axios = require('axios');

const fetchNews = async () => {
  try {
    const response = await fetch(newsUri);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const fetchToken = async () => {
  try {
    const response = await axios.post(tokenUri, data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    return response.data.access_token;
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

router.get('/country/:id', async (req, res) => {
  const code = req.params.id;
  const token = await fetchToken();
  try {
    const countryData = await axios.get(`${countryUri}${code}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.send(countryData.data.data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
