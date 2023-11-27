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
              <li key={part.id}>
                <h3>{part.author}</h3>
                <p>{part.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no review for this movie</p>
      )}
    </div>
  );
}
