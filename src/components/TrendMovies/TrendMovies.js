import { useLocation } from 'react-router-dom';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { StyledLink } from './TrendMovies.styled';

export const TrendMovies = ({ elems }) => {
  const location = useLocation();
  const imgUrl = 'https://image.tmdb.org/t/p/w200';
  return (
    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {elems.map(element => (
        <Card
          key={element.id}
          sx={{ maxWidth: 200, margin: 2, backgroundColor: 'grey' }}
        >
          <StyledLink to={'/movies/' + element.id} state={{ from: location }}>
            <CardMedia
              component="img"
              alt={element.title}
              height="300"
              width="200"
              image={imgUrl + element.poster_path}
            />
            <CardContent>
              <Typography variant="body2" component="div">
                {element.title}
              </Typography>
            </CardContent>
          </StyledLink>
        </Card>
      ))}
    </div>
  );
};
