import { Container } from "@mui/system";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import React from "react";
import useStyles from "./Styles";

export default function Experience() {
  const classes = useStyles();

  const MyExperience = [
    {
      title: "Fullstack Developer",
      company: "Stellar Menus Inc.",
      date: "May 2022 - Present",
      description: (
        <div className="my-experience">
          <ul className={classes.ul}>
            <li className={classes.li}>
              Participating in the designing and building the infrastructure of
              this project from scratch, using cutting-edge technologies such as
              AWS Lambda, Step Functions, ECS, and S3. The idea behind this was
              to build a scalable and resilient application using microservices.
            </li>
            <li className={classes.li}>
              Building the UI interfaces and functionalities using ReactJs,
              MaterialUI, and micro-frontends.
            </li>
            <li className={classes.li}>
              Collecting and storing user activities to conduct data analytics
              and uncover important insights that could inform the development
              of the product.
            </li>
            <li className={classes.li}>
              Creating backend microservices and APIs that enable applications
              to scale and perform at a high level. I worked designing and
              implementing microservices architectures using technologies such
              as Node.js, Python, and AWS Lambda.
            </li>
            <li className={classes.li}>
              Designing and implementing MongoDB schemas that meet the needs of
              complex applications while ensuring data consistency and
              scalability. I have also leveraged my expertise in database
              optimization to create high-performing databases that can handle
              large volumes of data with ease.
            </li>
            <li className={classes.li}>
              Standardizing code deployment processes and implementing efficient
              information-sharing methods between microservices.
            </li>
            <li className={classes.li}>
              Communicating with managers and product owners to gather
              requirements and suggest new features for products. I worked
              closely with stakeholders to understand their needs and translate
              them into functional requirements.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Backend Developer",
      company: "Fletes Lozmar",
      date: "September 2021 - April 2022",
      description: (
        <div>
          <ul className={classes.ul}>
            <li className={classes.li}>
              Build the API structure using TypeScript, Express.js, and MongoDB
              using an MVC architecture pattern.
            </li>
            <li className={classes.li}>
              Implement cookie-based authentication using Passport.js.
            </li>
            <li className={classes.li}>
              Create the database design, models, and validations for each one.
            </li>
            <li className={classes.li}>
              Connect with another C# API to receive important information and
              data.
            </li>
            <li className={classes.li}>
              Integrate with Enlace Fiscal, a tool that allows us to emit bills.
              Our application generates more than 300 bills per day, and the
              process is 99% automated.
            </li>
            <li className={classes.li}>
              Use Lambda functions with the serverless framework to automate
              jobs based on events like uploading to S3 and handling HTTP
              requests.
            </li>
            <li className={classes.li}>
              Create a socket microservice that works as an interface between
              the API and another service, with separate authentication based on
              tokens.
            </li>
            <li className={classes.li}>
              Use EC2, Docker Compose, and Nginx to serve the application in the
              development environment (in production, we used Jenkins and ECS).
            </li>
            <li className={classes.li}>
              Load and export massive amounts of data to Excel files.
            </li>
            <li className={classes.li}>
              Dashboards and reports using Chart.js and React.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Frontend Developer",
      company: "Vale Valedor",
      date: "January 2021 - August 2021",
      description: (
        <div>
          <ul className={classes.ul}>
            <li className={classes.li}>
              JWT-based authentication works based on roles and sessions.
            </li>
            <li className={classes.li}>
              Use MaterialUI to model the application UI.
            </li>
            <li className={classes.li}>Fully responsive application.</li>
            <li className={classes.li}>
              Integration with the REST API made in Node.js.
            </li>
            <li className={classes.li}>
              Integration of the Google Maps API to get geolocations, display
              maps with specific items, and allow users to get real-time
              directions.
            </li>
            <li className={classes.li}>
              Integration of QR Reader for scanning QR codes on coupons
              containing information such as amount, origin, etc.
            </li>
            <li className={classes.li}>
              Intermediate-level React skills and ability to create custom
              hooks.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Fullstack Developer",
      company: "Scaling Up",
      date: "2020 - January 2021",
      description: (
        <div>
          <ul className={classes.ul}>
            <li className={classes.li}>Frontend UI design using Bootstrap.</li>
            <li className={classes.li}>
              Frontend component-based architecture using ReactJs and NextJs.
            </li>
            <li className={classes.li}>
              Authentication based on JSON Web Tokens (JWT).
            </li>
            <li className={classes.li}>Implementation of basic React hooks.</li>
            <li className={classes.li}>
              CRUD operations with ExpressJs and Node.
            </li>
            <li className={classes.li}>
              Metrics and graphics integration in the application.
            </li>
            <li className={classes.li}>
              Implementation of the Model-View-Controller (MVC) pattern on the
              backend.
            </li>
            <li className={classes.li}>
              Integration with MongoDB using Mongoose.
            </li>
            <li className={classes.li}>
              Animations and transitions throughout the application.
            </li>
            <li className={classes.li}>
              Implementation of Nginx as a server to serve the app.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Container>
      <h3 className={classes.title}>
        My <span>experience</span>
      </h3>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {MyExperience.map((experience, i) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                color="primary"
                // I want this dot to be bigger
                sx={{ width: "17px", height: "17px" }}
              />
              {i !== MyExperience.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <h4 className={classes.experienceTitle}>{experience.title}</h4>
              <h5 className={classes.experienceCompany}>
                {experience.company} - <span>{experience.date}</span>
              </h5>
              <p className={classes.experienceDescription}>
                {experience.description}
              </p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
}
