import { Container } from "@mui/system";
import react from "react";
import useStyles from "./Styles";

const TechnicalSkills = [
  "Node",
  "Typescript",
  "Python",
  "React",
  "Next",
  "Git",
  "Github",
  "HTML",
  "CSS",
  "AWS",
  "Docker",
  "Lambda",
  "S3",
  "CloudFront",
  "API Gateway",
  "DynamoDB",
  "Cognito",
  "IAM",
  "SQS",
  "SNS",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
];

const SoftSkills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Leadership",
  "Adaptability",
  "Creativity",
  "Organization (in progress😄)",
  "Time Management",
  "Collaboration",
  "Self-Confidence",
  "Self-Learning",
  "Easy-Going",
];

export default function Skills() {
  const classes = useStyles();
  return (
    <Container>
      <h3 className={classes.title}>
        <span>My</span> technical skills
      </h3>
      <div className={classes.skillsContainer}>
        {TechnicalSkills.map((skill) => (
          <span className={classes.skill} key={skill}>
            {skill}
          </span>
        ))}
      </div>
      <br />
      <h3 className={classes.title}>
        My <span>soft skills</span>{" "}
      </h3>
      <div className={classes.skillsContainer}>
        {SoftSkills.map((skill) => (
          <span className={classes.skill} key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </Container>
  );
}
