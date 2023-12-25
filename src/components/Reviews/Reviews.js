import { Card, CardContent, Typography } from '@mui/material';
import { fetchReviewsMovie } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviewList, setreviewList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const result = async () => {
      try {
        const review = await fetchReviewsMovie(movieId);
        if (review) {
          setreviewList(review);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, [movieId]);

  return (
    <div>
      {reviewList.length > 0 ? (
        <ul>
          {reviewList.map(part => {
            return (
              <Card
                key={part.id}
                sx={{ marginBottom: '16px', marginRight: '40px' }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {part.author}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    {part.content}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </ul>
      ) : (
        <p>There is no review for this movie yet</p>
      )}
    </div>
  );
}
