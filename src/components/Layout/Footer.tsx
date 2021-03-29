import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";

function Footer() {
  return (
    <section style={{padding: '20px 0', background: '#888'}}>
      <Container>
        <Grid container justify="center">
          <Typography variant="caption" style={{color: '#fff'}} align="center">
            {new Date().getFullYear()} &copy; Mohammad Shahzaib
          </Typography>
        </Grid>
      </Container>
    </section>
  );
}

export default Footer;
