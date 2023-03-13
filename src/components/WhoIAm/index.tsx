import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useStyles from "./Styles";

export default function WhoIAm() {
  const classes = useStyles();

  const paragraphs = [
    <p className={classes.text}>
      Hi, I'm Angel Acevedo. People say time flies when you're having fun, but
      apparently it also flies when you're coding. I may only have three years
      of experience as a software engineer, but it feels like more!. As a
      <span> full-stack developer</span>, I've honed my skills in{" "}
      <span>React, Node, TypeScript, and AWS</span>, and I love keeping
      up-to-date with the latest technologies.
    </p>,
    <p className={classes.text}>
      One of my strengths is my ability to{" "}
      <span> explain complex concepts in an easy-to-understand way</span>. I
      find it fulfilling to help my team members understand and contribute to
      projects more effectively. I'm a <span> curious person by nature</span>,
      and I enjoy learning new technologies and approaches. I take pride in
      being a part of a team that delivers high-quality work, and I'm committed
      to contributing my best to every project.
    </p>,
    <p className={classes.text}>
      Overall, I'm a dedicated and ambitious software engineer who loves what I
      do. My{" "}
      <span>
        {" "}
        passion for learning, good communication skills, and technical expertise
      </span>{" "}
      make me a valuable asset to any team.
    </p>,
  ];

  return (
    <Container>
      <h3 className={classes.title}>Who am I</h3>
      {paragraphs.map((paragraph, i) => (
        <React.Fragment key={"parah-" + i}>
          {paragraph}
          <br></br>
        </React.Fragment>
      ))}
    </Container>
  );
}
