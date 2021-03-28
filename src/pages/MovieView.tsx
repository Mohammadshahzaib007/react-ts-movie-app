import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  withStyles,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import StarIcon from "@material-ui/icons/Star";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

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
  runtime: number;
  youtubeTrailerKey: string;
};

const StyledRating = withStyles({
  iconFilled: {
    color: "rgba(245, 0, 86, 0.9);",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

function MovieView() {
  const { movieId } = useParams<ParamTypes>();
  const isSmallDevice = useMediaQuery("(max-width:960px)");
  const [state, setState] = useState<StateType>({} as StateType);
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  const history = useHistory();

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
        runtime: data.runtime,
        youtubeTrailerKey: data.videos.results[0].key,
      };

      setState(neededData);
    } catch (error) {}
  };
  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      <section
        style={{
          background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .7)), url(http://image.tmdb.org/t/p/w1280${state?.backdropPath})`,
        }}
        className="movie-view-bg"
      >
        <Container>
          <Grid container>
            <Grid container justify="center" item xs={12} md={6}>
              <div>
                <img
                  style={{ maxHeight: "28.125rem" }}
                  src={`https://image.tmdb.org/t/p/w500/${state.posterPaht}`}
                  alt=""
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ color: "#fff4f4", padding: "0 10px" }}
            >
              <Typography
                variant="h4"
                style={{
                  textTransform: "uppercase",
                  lineHeight: "1.5",
                  fontWeight: 400,
                  marginTop: isSmallDevice ? "20px" : "0",
                }}
              >
                {state.originalTitle}
              </Typography>
              <Typography
                variant="h4"
                style={{
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {state.tagLine}
              </Typography>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <StyledRating
                  name="customized-empty"
                  style={{ zIndex: 0 }}
                  value={parseFloat((state.voteAverage / 2).toFixed(1))}
                  precision={0.1}
                  readOnly
                  emptyIcon={
                    <StarIcon
                      style={{ color: "rgba(225, 225, 225, .8)" }}
                      fontSize="inherit"
                    />
                  }
                />

                <Typography
                  variant="body1"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {state.originalLanguage} / / {state.runtime} Minutes /{" "}
                  {state.releaseDate && state.releaseDate.slice(0, 4)}{" "}
                </Typography>
              </div>
              <Typography
                variant="body1"
                style={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginTop: "35px",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  marginBottom: "5px",
                }}
              >
                The precis
              </Typography>
              <Typography variant="body1">{state.overview}</Typography>
              <Button
                onClick={() => setIsTrailerModalOpen(true)}
                style={{ marginTop: "40px" }}
                variant="contained"
                color="secondary"
                endIcon={<PlayArrowIcon />}
              >
                Trialer
              </Button>
              <Button
                onClick={() => history.goBack()}
                style={{ marginTop: "40px", marginLeft: "20px" }}
                variant="contained"
                color="secondary"
                startIcon={<KeyboardBackspaceIcon />}
              >
                Go to back
              </Button>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* {isTrailerModalOpen && ( */}
      <div style={{ zIndex: 2, width: "100%", overflowX: "hidden" }}>
        <IconButton
          onClick={() => setIsTrailerModalOpen(false)}
          style={{
            position: "fixed",
            top: "10px",
            left: isTrailerModalOpen ? 10 : "-100%",
            zIndex: 3,
            color: "white",
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>{" "}
        <section
          className="movie-view-bg"
          style={{
            background: "rgba(0, 0, 0, .9)",
            position: "fixed",
            top: 0,
            left: isTrailerModalOpen ? 0 : "-100%",
            transition: "all .3s",
          }}
        >
          <ReactPlayer
            controls
            playing={isTrailerModalOpen}
            url={`https://www.youtube.com/watch?v=${state.youtubeTrailerKey}`}
          />
        </section>
      </div>
      {/* )} */}
    </>
  );
}

export default MovieView;

// https://api.themoviedb.org/3/movie/527774?api_key=e366d974f73ae203397850eadc7bce1f&append_to_response=videos
// http://image.tmdb.org/t/p/w1280/6zvLHD4rbHUNuRQLoIC2rkV8ayi.jpg

// video
// https://api.themoviedb.org/3/movie/297762/videos?api_key=6515b23812ca7dab83ed7195e34625d1&language=en-US

// yt
// https://www.youtube.com/watch?v=1VIZ89FEjYI
