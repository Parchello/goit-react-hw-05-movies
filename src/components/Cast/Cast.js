import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCreditsMovie } from 'api';

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
        <ul>
          {selectedCast.map(card => {
            const { character, name, profile_path, credit_id } = card;
            return (
              <li key={credit_id}>
                <img
                  src={
                    profile_path ? (
                      imgProfURL + profile_path
                    ) : (
                      <p>no actor image</p>
                    )
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
