import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Container } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function TemporaryDrawer() {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const sideDrawerItems: Array<{
    heading: string;
    links: Array<{ name: string; link: string }>;
  }> = [
    {
      heading: "discover",
      links: [
        { name: "Popular", link: "/discover/popular" },
        { name: "Top Rated", link: "/discover/top-rated" },
        { name: "Upcoming", link: "/discover/upcoming" },
      ],
    },
    {
      heading: "genres",
      links: [
        { name: "action", link: "/genres/action" },
        { name: "advanture", link: "/genres/advanture" },
        { name: "animation", link: "/genres/animation" },
        { name: "comedy", link: "/genres/comedy" },
        { name: "crime", link: "/genres/crime" },
        { name: "Documantry", link: "/genres/documantry" },
        { name: "Drama", link: "/genres/drama" },
        { name: "Family", link: "/genres/family" },
        { name: "fantasy", link: "/genres/fantasy" },
        { name: "history", link: "/genres/history" },
        { name: "horror", link: "/genres/horro" },
        { name: "music", link: "/genres/music" },
        { name: "mistry", link: "/genres/mistry" },
        { name: "romanc", link: "/genres/romanc" },
        { name: "science fiction", link: "/genres/science-fiction" },
        { name: "Tv Movie", link: "/genres/tv-movie" },
        { name: "thriller", link: "/genres/thriller" },
        { name: "war", link: "/genres/war" },
        { name: "western", link: "/genres/western" },
      ],
    },
  ];

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={classes.drawerHeader}>
        <IconButton>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />

      {sideDrawerItems.map((item, i) => {
        return (
          <div key={i} style={{ padding: "10px" }}>
            <Typography
              color="secondary"
              style={{ textTransform: "uppercase", fontSize: "1.25rem" }}
              variant="h4"
              onClick={(e) => e.stopPropagation()}
            >
              {item.heading}
            </Typography>
            <List>
              {item.links.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <TheatersIcon
                        color={index % 2 === 0 ? "primary" : "secondary"}
                      />
                    </ListItemIcon>
                    <ListItemText
                      style={{
                        textTransform: "capitalize",
                        fontSize: "0.875rem",
                      }}
                      primary={link.name}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" color="secondary" elevation={0}>
          <Container>
            <Toolbar disableGutters>
              <IconButton
                onClick={toggleDrawer}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                RT Movie App
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </div>
  );
}
