import React, { useState } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
}));

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
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
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        {list("left")}
      </Drawer>
    </div>
  );
}
