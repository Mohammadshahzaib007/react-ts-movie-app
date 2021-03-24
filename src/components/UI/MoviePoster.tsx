import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    width: 245,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    margin: '20px 10px',
    height: 450,
  },
});

type Props = {
  imageUrl: string;
  movieTitle: string;
  rating: number;
};

export default function MoviePoster(props: Props) {
  const classes = useStyles();

  const { imageUrl, movieTitle, rating } = props;

  return (
    <Card className={classes.root}>
      <Card elevation={0}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="350"
            image={imageUrl}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
      <Typography
        align="center"
        color="textSecondary"
        style={{
          fontWeight: 600,
          textTransform: "uppercase",
          padding: "10px",
          marginTop: "20px",
        }}
        noWrap
      >
        {movieTitle}
      </Typography>

      <Rating
        style={{ margin: "0 auto", marginBottom: "20px", marginTop: "5px" }}
        name="half-rating-read"
        defaultValue={rating}
        precision={0.1}
        readOnly
      />
    </Card>
  );
}
