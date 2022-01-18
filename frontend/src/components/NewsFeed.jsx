/** @format */

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import useGetNews from '../hooks/useGetNews.js';
import ArticleCard from './ArticleCard';

export default function NewsFeed() {
  const news = useGetNews();

  return (
    <StyledBox>
      {news &&
        news
          .slice(0, 3)
          .map((article) => (
            <ArticleCard article={article} key={Math.random()} />
          ))}
    </StyledBox>
  );
}
const StyledBox = styled(Box)`
  margin: 1rem;
`;
