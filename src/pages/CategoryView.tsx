import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import axios from "axios";
import MoviePoster from "../components/UI/MoviePoster";
import FullScreenLoader from "../components/UI/FullScreenLoader";

// param types for react router
type ParamTypes = {
  gener: string;
  name: string;
  generId: string
};

type stateType = Array<{
  movieTitle: string;
  rating: number;
  imagePath: string;
}>;

function CategoryView() {
  //we are getting this thing with the help of query params
  const { gener, name, generId } = useParams<ParamTypes>();

  // this is for movie data
  const [state, setState] = useState<stateType>();

  // this is for spying on the loading state
  const [isLoading, setIsLoading] = useState(false);

  // fetching only movie title, image path, and rating
  const fetchData = async () => {
    const API_KEY = "6515b23812ca7dab83ed7195e34625d1";
    let API_LINK = `https://api.themoviedb.org/3/movie/${name}?api_key=${API_KEY}`;
    if (gener === "geners") {
      API_LINK = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${generId}&sort_by=popularity.desc`;
    }

    setIsLoading(true);
    try {
      const res = await axios(API_LINK);
      setIsLoading(false);

      const { results } = res.data;

      let neededData: stateType = [];

      // @ts-ignore
      results.forEach((el) => {
        neededData.push({
          movieTitle: el.original_title,
          rating: el.vote_average,
          imagePath: el.poster_path,
        });
      });

      setState(neededData);
      console.log(results);
    } catch (error) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [name]);

  const renderMovies = () => {
    return state?.map((movie, i) => (
      <MoviePoster
        key={i}
        movieTitle={movie.movieTitle}
        rating={movie.rating}
        imageUrl={`https://image.tmdb.org/t/p/w500/${movie.imagePath}`}
      />
    ));
  };

  return (
    <Container>
      <Grid container>
        {isLoading ? (
          <FullScreenLoader />
        ) : (
          <Grid item container wrap="wrap" justify="center">
            {" "}
            {renderMovies()}{" "}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default CategoryView;

// api key ===>>> 6515b23812ca7dab83ed7195e34625d1

// EXAMPLE API REQUEST
// https://api.themoviedb.org/3/movie/550?api_key=6515b23812ca7dab83ed7195e34625d1

// for getting popular movies
// https://api.themoviedb.org/3/movie/popular?api_key=e366d974f73ae203397850eadc7bce1f

// for catogery
// https://api.themoviedb.org/3/discover/movie?api_key=e366d974f73ae203397850eadc7bce1f&with_genres=37&sort_by=popularity.desc
