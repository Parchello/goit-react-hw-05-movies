import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=57d7adc99104a21e55a75e015a38e545';

export const GetTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day${API_KEY}`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4',
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchOneMovie = async id => {
  try {
    const response = await axios.get(`movie/${id}?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreditsMovie = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4',
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviewsMovie = async id => {
  try {
    const response = await axios.get(`movie/${id}/reviews?language=en-US`, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4',
      },
    });
    console.log('Response:', response.data.results);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchByQueryMovie = async query => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&page=1&include_adult=false&language=en-US`,
      {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmUxYzljMDVlZjI5OWNjZmFiMWQ4YWQ3MjRmNzU2MSIsInN1YiI6IjY1Mzc4OTQ2MWY3NDhiMDBhZTEyZTE2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_ieqSURgaK9kCC0WXwowgoFGd8OI5KgBv1Xli0uCL4',
        },
      }
    );
    console.log('Response:', response.data.results);

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
