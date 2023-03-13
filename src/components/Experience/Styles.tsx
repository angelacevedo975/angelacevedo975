import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "1rem",
    color: "#fff",
    "& span": {
      color: "rgb(255, 165, 0)",
    },
  },
  experienceTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#fff",
    marginTop: "-4px",
  },
  experienceCompany: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "#fff",
    marginBottom: "6px",
    "& span": {
      color: "rgb(255, 165, 0)",
    },
  },
  experienceDescription: {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "#fff",
    marginBottom: "2rem",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    padding: "10px",
    borderBottom: "1px solid rgb(255, 165, 0)",
    textAlign: "justify",
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      color: "rgb(255, 165, 0)",
    },
  },
}));

export default useStyles;
