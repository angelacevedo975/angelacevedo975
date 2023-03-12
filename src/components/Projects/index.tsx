import { Container, Grid } from "@mui/material";
import * as React from "react";
import MediaCard from "../Card";
import useStyles from "./Styles";

export function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <h3 className={classes.title}>
          My{" "}
          <span
            style={{
              color: "rgb(255, 165, 0)",
            }}
          >
            projects
          </span>
        </h3>
        <Grid
          container
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} md={6} lg={4} className={classes.marginTop}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.marginTop}>
            <MediaCard></MediaCard>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.marginTop}>
            <MediaCard></MediaCard>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
