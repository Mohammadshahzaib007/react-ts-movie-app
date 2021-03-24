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
    links: Array<{ id: number; name: string; link: string }>;
  }> = [
    {
      heading: "discover",
      links: [
        {
          id: 125436345,
          name: "Popular",
          link: "/discover/popular",
        },
        {
          id: 5467907,
          name: "Top Rated",
          link: "/discover/top_rated",
        },
        {
          id: 125903894,
          name: "Upcoming",
          link: "/discover/upcoming",
        },
      ],
    },
    {
      heading: "geners",
      links: [
        {
          id: 28,
          name: "action",
          link: "/geners/action",
        },
        {
          id: 12,
          name: "adventure",
          link: "/geners/advanture",
        },
        {
          id: 16,
          name: "animation",
          link: "/geners/animation",
        },
        {
          id: 35,
          name: "comedy",
          link: "/geners/comedy",
        },
        {
          id: 80,
          name: "crime",
          link: "/geners/crime",
        },
        {
          id: 99,
          name: "documentary",
          link: "/geners/documantry",
        },
        {
          id: 18,
          name: "drama",
          link: "/geners/drama",
        },
        {
          id: 10751,
          name: "family",
          link: "/geners/family",
        },
        {
          id: 14,
          name: "fantasy",
          link: "/geners/fantasy",
        },
        {
          id: 36,
          name: "history",
          link: "/geners/history",
        },
        {
          id: 27,
          name: "horror",
          link: "/geners/horror",
        },
        {
          id: 10402,
          name: "music",
          link: "/geners/music",
        },
        {
          id: 9648,
          name: "mystery",
          link: "/geners/mystry",
        },
        {
          id: 10749,
          name: "romance",
          link: "/geners/romance",
        },
        {
          id: 878,
          name: "science fiction",
          link: "/geners/science-fiction",
        },
        {
          id: 10770,
          name: "tv movie",
          link: "/geners/tv-movie",
        },
        {
          id: 53,
          name: "thriller",
          link: "/geners/thriller",
        },
        {
          id: 10752,
          name: "war",
          link: "/geners/war",
        },
        {
          id: 37,
          name: "western",
          link: "/geners/western",
        },
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
                  to={`${link.link}/${link.id}`}
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
