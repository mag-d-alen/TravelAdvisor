/** @format */
import React from 'react';
import styled from '@emotion/styled';
import {
  Card,
  Typography,
  CardMedia,
  CardActions,
  Collapse,
  IconButton,
  CardContent,
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { author, content, source, description, title, urlToImage } =
    props.article;
  return (
    <StyledCard>
      <CardMedia component='img' height='80' alt={title} src={urlToImage} />
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
  );
}

const StyledCard = styled(Card)`
  margin-bottom: 0.7rem;
`;
