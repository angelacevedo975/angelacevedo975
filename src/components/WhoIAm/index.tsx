import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useStyles from "./Styles";

const paragraphs = [
  `Hi, I'm Angel Acevedo, a software engineer with three years of
    experience. As a full-stack developer, I've honed my skills in React,
    Node, TypeScript, and AWS, and I love keeping up-to-date with the latest
    technologies.`,
  `One of my strengths is my ability to explain complex concepts in an
    easy-to-understand way. I find it fulfilling to help my team members
    understand and contribute to projects more effectively.`,
  `I'm a curious person by nature, and I enjoy learning new technologies
    and approaches. I take pride in being a part of a team that delivers
    high-quality work, and I'm committed to contributing my best to every
    project.`,
  `Overall, I'm a dedicated and ambitious software engineer who loves what
    I do. My passion for learning, good communication skills, and technical
    expertise make me a valuable asset to any team.`,
];

export default function WhoIAm() {
  const classes = useStyles();

  return (
    <Container>
      <h3 className={classes.title}>Who am I</h3>
      {paragraphs.map((paragraph, i) => (
        <React.Fragment key={"parah-" + i}>
          <p className={classes.text}>{paragraph}</p>
          <br></br>
        </React.Fragment>
      ))}
    </Container>
  );
}
