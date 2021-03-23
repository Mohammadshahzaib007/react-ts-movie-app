import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useParams } from "react-router";
import axios from "axios";
import MoviePoster from "../components/UI/MoviePoster";

// param types for react router
interface ParamTypes {
  gener: string;
  name: string;
}

function CategoryView() {
  //we are getting this thing with the help of query params
  const { gener, name } = useParams<ParamTypes>();



//   useEffect(() => {
//       const API_KEY = '6515b23812ca7dab83ed7195e34625d1'
//     const fetchData = async () => {
//       const res = await axios(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
//       );

//       console.log(res);
//     };

//     fetchData();
//   });

  return (
    <Container>
      <h1>
       
        <MoviePoster movieTitle="shahzaib" rating={1} imageUrl="dlajkladksjf;lkaj" />
      </h1>
    </Container>
  );
}

export default CategoryView;

// api key ===>>> 6515b23812ca7dab83ed7195e34625d1

// EXAMPLE API REQUEST
// https://api.themoviedb.org/3/movie/550?api_key=6515b23812ca7dab83ed7195e34625d1

// for getting popular movies
// https://api.themoviedb.org/3/movie/popular?api_key=e366d974f73ae203397850eadc7bce1f
