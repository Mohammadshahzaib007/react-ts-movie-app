import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { useParams } from "react-router";
import axios from "axios";

type ParamTypes = {
  gener: string;
  name: string;
  generId: string;
  movieId: string;
};

// state type
type StateType = {
  backdropPath?: string;
  budget: number;
  id: number;
  originalTitle: string;
  originalLanguage: string;
  overview: string;
  popularity: number;
  posterPaht: string;
  releaseDate: string;
  revenue: number;
  status: string;
  tagLine: string;
  voteAverage: number;
  voteCount: number;
};

function MovieView() {
  const { movieId } = useParams<ParamTypes>();

  const [state, setState] = useState<StateType>({} as StateType);

  // fetching data
  const fetchMovieDetails = async () => {
    const API_KEY = "6515b23812ca7dab83ed7195e34625d1";

    const API_LINK = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;

    try {
      const res = await axios(API_LINK);

      const data = res.data;
      console.log(data);

      const neededData: StateType = {
        backdropPath: data.backdrop_path,
        budget: data.budget,
        id: data.id,
        originalTitle: data.original_title,
        originalLanguage: data.original_language,
        overview: data.overview,
        popularity: data.popularity,
        posterPaht: data.poster_path,
        releaseDate: data.release_date,
        revenue: data.revenue,
        status: data.status,
        tagLine: data.tagline,
        voteAverage: data.vote_average,
        voteCount: data.vote_count,
      };

      setState(neededData);
    } catch (error) {}
  };
  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",

        background: `url(http://image.tmdb.org/t/p/w1280${state?.backdropPath})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Container>
        <h1>I am movie view page </h1>
      </Container>
    </section>
  );
}

export default MovieView;

// https://api.themoviedb.org/3/movie/527774?api_key=e366d974f73ae203397850eadc7bce1f&append_to_response=videos
// http://image.tmdb.org/t/p/w1280/6zvLHD4rbHUNuRQLoIC2rkV8ayi.jpg
