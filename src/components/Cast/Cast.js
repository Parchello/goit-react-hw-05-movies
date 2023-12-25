import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCreditsMovie } from 'api';
import { Card, CardContent, List, Typography } from '@mui/material';

const imgProfURL = 'https://image.tmdb.org/t/p/w200';

export default function Cast() {
  const [selectedCast, setSelectedCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const result = async () => {
      try {
        const elements = await fetchCreditsMovie(movieId);
        if (elements) {
          setSelectedCast(elements);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId, selectedCast]);

  return (
    <div>
      {selectedCast ? (
        <List
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {selectedCast.map(card => {
            const { character, name, profile_path, credit_id } = card;
            return (
              <Card key={credit_id} sx={{ width: 250, margin: 2 }}>
                <img
                  src={
                    profile_path
                      ? imgProfURL + profile_path
                      : 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'
                  }
                  alt={name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }} // Задайте розміри та обмежте розмір
                />
                <CardContent>
                  <Typography variant="h6" noWrap>
                    {name}
                  </Typography>
                  <Typography noWrap>{`Character: ${character}`}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </List>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
