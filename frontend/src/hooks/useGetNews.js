/** @format */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const NEWS_KEY = process.env.REACT_APP_NEWS_KEY;
const newsUri = `https://newsapi.org/v2/top-headlines?language=en&q=covid&sortBy=popularity&apiKey=${NEWS_KEY}`;

export default function useGetNews() {
  const [news, setNews] = useState();
  const fetchNews = async () => {
    try {
      const result = await axios.get(newsUri);

      setNews(result.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
    return () => fetchNews();
  }, []);
  console.log(news);
  return news;
}
