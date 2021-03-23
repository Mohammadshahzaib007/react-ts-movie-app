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
        { name: "Popular", link: "#" },
        { name: "Top Rated", link: "#" },
        { name: "Upcoming", link: "#" },
      ],
    },
    {
      heading: "genres",
      links: [
        { name: "action", link: "#" },
        { name: "advanture", link: "#" },
        { name: "animation", link: "#" },
        { name: "comedy", link: "#" },
        { name: "crime", link: "#" },
        { name: "Documantry", link: "#" },
        { name: "Drama", link: "#" },
        { name: "Family", link: "#" },
        { name: "fantasy", link: "#" },
        { name: "history", link: "#" },
        { name: "horror", link: "#" },
        { name: "music", link: "#" },
        { name: "mistry", link: "#" },
        { name: "romanc", link: "#" },
        { name: "science fiction", link: "#" },
        { name: "Tv Movie", link: "#" },
        { name: "thriller", link: "#" },
        { name: "war", link: "#" },
        { name: "western", link: "#" },
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
                <ListItem button key={index}>
                  <ListItemIcon>
                    <TheatersIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    style={{ textTransform: "capitalize" }}
                    primary={link.name}
                  />
                </ListItem>
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
            <Toolbar>
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
