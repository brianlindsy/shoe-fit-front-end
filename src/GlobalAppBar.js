import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
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

export default function GlobalAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button href="/" className={classes.title}>
            www.ifdashoefits.com
          </Button>
          <Button href="/calculator">EU to US Shoe Size Calculator</Button>
          <Button href="/articles">Articles</Button>
          <Button href="/about">About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
