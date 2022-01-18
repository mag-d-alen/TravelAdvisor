/** @format */
import React, { useState } from 'react';
import FullArticleModal from './FullArticleModal';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  Card,
  Typography,
  Collapse,
  IconButton,
  CardContent,
  Button,
  Modal,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
}));

export default function ArticleCard(props) {
  const [expanded, setExpanded] = useState(false);
  const [openFullArticle, setOpenFullArticle] = useState(false);
  const { author, source, description, title, urlToImage, url } = props.article;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleOpenFullArticle = () => {
    setOpenFullArticle(true);
  };

  return (
    <>
      <StyledCard>
        <StyledDiv>
          <img component='img' height='80' alt='press_photo' src={urlToImage} />

          <StyledButton onClick={handleOpenFullArticle}>Read More</StyledButton>
        </StyledDiv>
        <CardContent>
          <Typography gutterBottom component='div'>
            {author}
          </Typography>{' '}
          <Typography gutterBottom component='div'>
            {title}
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardContent>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography gutterBottom variant='body2' color='text.secondary'>
              source: {source.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </StyledCard>
      {openFullArticle && (
        <FullArticleModal open={openFullArticle} url={url} title={title} />
      )}
    </>
  );
}

const StyledCard = styled(Card)`
  margin-bottom: 0.7rem;
`;
const StyledDiv = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

const StyledButton = styled(Button)`
  color: white;
  background-color: #ff6347d8;

  &:hover {
    background-color: #c9442cc5;
  }
`;
