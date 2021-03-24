import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import axios from "axios";
import MoviePoster from "../components/UI/MoviePoster";

// param types for react router
type ParamTypes = {
  gener: string;
  name: string;
};

type stateType = Array<{
  movieTitle: string;
  rating: number;
  imagePath: string;
}>;

function CategoryView() {
  //we are getting this thing with the help of query params
  const { gener, name } = useParams<ParamTypes>();

  const [state, setState] = useState<stateType>([]);

  // fetching only movie title, image path, and rating
  const fetchData = async () => {
    const API_KEY = "6515b23812ca7dab83ed7195e34625d1";
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${name}?api_key=${API_KEY}`
    );

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
  };
  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <Container>
      <Grid container>
        <Grid item>
          <MoviePoster
            movieTitle="shahzaib"
            rating={1}
            imageUrl="dlajkladksjf;lkaj"
          />
        </Grid>
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
