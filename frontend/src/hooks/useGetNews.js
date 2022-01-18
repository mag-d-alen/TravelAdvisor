/** @format */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const NEWS_KEY = '45eef3aec94b4f2c9adc74833617e141';
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
