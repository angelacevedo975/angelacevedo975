import { Button, Card, CardActions, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import useStyles from "./Styles";

const MyCertifications = [
  {
    name: (
      <h5>
        AWS Certified<span> Developer - Associate</span>
      </h5>
    ),
    description:
      "Knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS.",
    url: "https://www.credly.com/badges/1ec4aabd-f814-4e05-9bcb-cbf04bb1a2f6/linked_in_profile",
  },
  {
    name: (
      <h5>
        AWS Certified<span> Cloud Practitioner</span>
      </h5>
    ),
    description:
      "Understanding of AWS Cloud concepts, services, and terminology. This is a good starting point for individuals IT or cloud experience or for those with on-premises IT experience looking for basic AWS Cloud fluency",
    url: "https://www.credly.com/badges/125b3137-98fc-48fc-ad36-c214e051ea0e/linked_in_profile",
  },
];

function MediaCard(cert: typeof MyCertifications[0]) {
  const classes = useStyles();

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#262626",
        border: "3px solid rgb(255, 165, 0)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent className={classes.cardContent}>
        {cert.name}
        <p>{cert.description}</p>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: "flex-end",
        }}
      >
        <Button
          size="medium"
          onClick={() => window.open(cert.url, "_blank", "noopener,noreferrer")}
          style={{}}
        >
          Validate
        </Button>
      </CardActions>
    </Card>
  );
}

export default function Certifications() {
  const classes = useStyles();
  return (
    <Container>
      <h3 className={classes.title}>
        My <span>certifications</span>
      </h3>
      <div className={classes.certificationsContainer}>
        {MyCertifications.map((cert, i) => (
          <MediaCard {...cert} key={"certification-" + i}></MediaCard>
        ))}
      </div>
    </Container>
  );
}
