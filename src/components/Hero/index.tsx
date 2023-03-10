import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Container, IconButton, Toolbar, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Styles";

const socialMediaLinks = [
  {
    name: "Github",
    url: "https://github.com/angelacevedo975",
    icon: ({ style }: { style: { transform: string } }) => (
      <GitHub style={style}></GitHub>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/angel-acevedo-839846151/",
    icon: ({ style }: { style: { transform: string } }) => (
      <LinkedIn style={style}></LinkedIn>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/angeleduardo.dominguezacevedo/",
    icon: ({ style }: { style: { transform: string } }) => (
      <Facebook style={style}></Facebook>
    ),
  },
];

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.title}>
            Hi, my name is Angel Acevedo. I am a software engineer.
          </h1>
          <h2 className={classes.subtitle}>
            I build cloud applications using AWS, React, Node, and Typescript.
          </h2>
        </div>
        <div className={classes.right}>
          {socialMediaLinks.map((link) => (
            <Tooltip title={"Go to " + link.name} key={link.name}>
              <IconButton
                size="large"
                color="primary"
                component={Link}
                to={link.url}
                target="_blank"
              >
                <link.icon
                  style={{
                    transform: "scale(2)",
                  }}
                ></link.icon>
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </Container>
    </div>
  );
}
