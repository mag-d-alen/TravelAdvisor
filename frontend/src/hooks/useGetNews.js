/** @format */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = 'http://localhost:8000/api/api/news';

export default function useGetNews() {
  const [news, setNews] = useState();
  const token = JSON.parse(localStorage.getItem('token'));

  const headerConfig = {
    'auth-token': `${token}`,
  };
  const fetchNews = async () => {
    try {
      const result = await axios.get(url, {
        headers: headerConfig,
      });
      setNews(result.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
    return () => fetchNews();
  }, []);

  return news;
}
