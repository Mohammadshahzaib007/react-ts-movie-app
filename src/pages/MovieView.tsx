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


function MovieView() {
  const { movieId } = useParams<ParamTypes>();

  const [state, setState] = useState();

  // fetching only movie title, image path, and rating
  const fetchMovieDetails = async () => {
    const API_KEY = "6515b23812ca7dab83ed7195e34625d1";

    const API_LINK = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;

    try {
      const res = await axios(API_LINK);

      const data = res.data;

      let neededData = [];
      setState(data);
      console.log(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        //  @ts-ignore
        background: `url(http://image.tmdb.org/t/p/w1280${state?.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
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