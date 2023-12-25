import { StyledLink } from 'components/TrendMovies/TrendMovies.styled';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function MovieSearchList({ items }) {
  const location = useLocation();

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      {items ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {items.map(item => (
            <Card
              key={item.id}
              sx={{ maxWidth: 200, margin: 2, backgroundColor: 'grey' }}
            >
              <StyledLink to={`${item.id}`} state={{ from: location }}>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="300"
                  width="200"
                  image={
                    item.poster_path
                      ? imgBaseUrl + item.poster_path
                      : 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
                  }
                />

                <CardContent>
                  <Typography
                    variant="body2"
                    component="div"
                    textAlign={'center'}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </StyledLink>
            </Card>
          ))}
        </div>
      ) : (
        <p>Loading, please wait.....</p>
      )}
    </div>
  );
}
