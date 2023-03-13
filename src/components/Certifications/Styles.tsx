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
  certificationsContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch",
    flexWrap: "wrap",
    margin: "0 0 0 0",
    padding: "0 0 0 0",
    // the last card should have margin left
    "& > div": {
      margin: "1rem 1rem 0 0",
    },
  },
  cardContent: {
    "& h5": {
      fontSize: "1.2rem",
      fontWeight: 700,
      color: "#fff",
      "& span": {
        color: "rgb(255, 165, 0)",
      },
    },
    "& p": {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#fff",
      margin: "10px 0 0 0",
      textAlign: "justify",
    },
  },
}));

export default useStyles;
